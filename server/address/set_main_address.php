<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$conn = new mysqli('localhost', 'root', '', 'shopping_db');
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error' => 'DB 연결 실패']);
  exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$user_id = intval($data['user_id'] ?? 0);
$address_id = intval($data['address_id'] ?? 0);

if (!$user_id || !$address_id) {
  http_response_code(400);
  echo json_encode(['error' => 'user_id 또는 address_id 누락']);
  exit();
}

$conn->query("UPDATE addresses SET is_main_address = 0 WHERE user_id = $user_id");

$stmt = $conn->prepare("UPDATE addresses SET is_main_address = 1 WHERE id = ? AND user_id = ?");
$stmt->bind_param("ii", $address_id, $user_id);

if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => '기본 주소 설정 실패: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
