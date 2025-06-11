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
$user_id = isset($data['user_id']) ? intval($data['user_id']) : null;
$product_id = isset($data['product_id']) ? intval($data['product_id']) : null;

if (!$user_id || !$product_id) {
  http_response_code(400);
  echo json_encode(["error" => "user_id와 product_id는 필수입니다"]);
  exit();
}

// 삭제 대상 존재 확인 (디버깅용)
$check = $conn->query("SELECT * FROM cart WHERE user_id = $user_id AND product_id = $product_id");
if ($check->num_rows === 0) {
  http_response_code(404);
  echo json_encode(["error" => "삭제 대상이 존재하지 않습니다"]);
  exit();
}

$stmt = $conn->prepare("DELETE FROM cart WHERE user_id = ? AND product_id = ?");
if (!$stmt) {
  http_response_code(500);
  echo json_encode(['error' => '쿼리 준비 실패: ' . $conn->error]);
  exit();
}

$stmt->bind_param("ii", $user_id, $product_id);

if ($stmt->execute()) {
  echo json_encode(["success" => true]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "삭제 실패: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
