<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

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

$data = json_decode(file_get_contents("php://input"), true);
$user_id = $data['user_id'] ?? null;
$product_id = $data['product_id'] ?? null;
$quantity = $data['quantity'] ?? 1;

if (!$user_id || !$product_id) {
  http_response_code(400);
  echo json_encode(['error' => 'user_id와 product_id는 필수입니다.']);
  exit();
}

$checkStmt = $conn->prepare("SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?");
$checkStmt->bind_param("ii", $user_id, $product_id);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
  $stmt = $conn->prepare("UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?");
  if (!$stmt) {
    echo json_encode(['error' => '쿼리 준비 실패: ' . $conn->error]);
    exit();
  }
  $stmt->bind_param("iii", $quantity, $user_id, $product_id);
} else {
  $stmt = $conn->prepare("INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)");
  if (!$stmt) {
    echo json_encode(['error' => '쿼리 준비 실패: ' . $conn->error]);
    exit();
  }
  $stmt->bind_param("iii", $user_id, $product_id, $quantity);
}

if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => '장바구니 추가 실패: ' . $stmt->error]);
}

$checkStmt->close();
$stmt->close();
$conn->close();
?>
