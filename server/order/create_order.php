<?php
// 주문 생성 API

// CORS 설정
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// DB 연결
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'shopping_db';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error' => 'DB 연결 실패: ' . $conn->connect_error]);
  exit();
}

// JSON 파싱
$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'] ?? null;
$total_price = $data['total_price'] ?? 0;
$recipient_name = $data['recipient_name'] ?? '';
$recipient_phone = $data['recipient_phone'] ?? '';
$postal_code = $data['postal_code'] ?? '';
$address = $data['address'] ?? '';
$detail_address = $data['detail_address'] ?? '';
$items = $data['items'] ?? [];

if (!$user_id || empty($items)) {
  http_response_code(400);
  echo json_encode(['error' => 'user_id 또는 주문 항목이 없습니다.']);
  exit();
}

// 주문 테이블에 삽입
$stmt = $conn->prepare("INSERT INTO orders (user_id, total_price, status, recipient_name, recipient_phone, postal_code, address, detail_address, created_at) VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, NOW())");
$stmt->bind_param("idsssss", $user_id, $total_price, $recipient_name, $recipient_phone, $postal_code, $address, $detail_address);

if (!$stmt->execute()) {
  http_response_code(500);
  echo json_encode(['error' => '주문 생성 실패: ' . $stmt->error]);
  exit();
}

$order_id = $stmt->insert_id;
$stmt->close();

// 각 상품 항목 저장
$itemStmt = $conn->prepare("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)");
foreach ($items as $item) {
  $product_id = $item['product_id'];
  $quantity = $item['quantity'];
  $price = $item['price'];
  $itemStmt->bind_param("iiid", $order_id, $product_id, $quantity, $price);
  $itemStmt->execute();
}
$itemStmt->close();


echo json_encode(['success' => true, 'order_id' => $order_id]);
$conn->close();
?>
