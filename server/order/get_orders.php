<?php
// CORS 설정
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// OPTIONS 프리플라이트 요청 처리
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

// user_id 받기 (GET 방식)
$user_id = $_GET['user_id'] ?? null;

if (!$user_id) {
  http_response_code(400);
  echo json_encode(['error' => 'user_id가 없습니다.']);
  exit;
}

try {
  $orders = [];

  // 주문 정보 가져오기
  $order_stmt = $conn->prepare("
    SELECT * FROM orders
    WHERE user_id = ?
    ORDER BY created_at DESC
  ");
  $order_stmt->bind_param("i", $user_id);
  $order_stmt->execute();
  $order_result = $order_stmt->get_result();

  while ($order = $order_result->fetch_assoc()) {
    $order_id = $order['id'];

    // 해당 주문의 상품 가져오기
    $items_stmt = $conn->prepare("
      SELECT oi.*, p.name AS product_name, p.image_url
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    ");
    $items_stmt->bind_param("i", $order_id);
    $items_stmt->execute();
    $items_result = $items_stmt->get_result();

    $items = [];
    while ($item = $items_result->fetch_assoc()) {
      $items[] = $item;
    }

    $order['items'] = $items;
    $orders[] = $order;
  }

  echo json_encode(['orders' => $orders]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => '서버 오류: ' . $e->getMessage()]);
}

$conn->close();
?>
