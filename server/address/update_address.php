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

$id = intval($data['id'] ?? 0);
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$postalCode = $data['postalCode'] ?? '';
$address = $data['address'] ?? '';
$detailAddress = $data['detailAddress'] ?? '';

if (!$id || !$name || !$phone || !$postalCode || !$address || !$detailAddress) {
  http_response_code(400);
  echo json_encode(['error' => '필수 항목 누락']);
  exit();
}

$stmt = $conn->prepare("
  UPDATE addresses
  SET name = ?, phone = ?, postal_code = ?, address = ?, detail_address = ?
  WHERE id = ?
");

$stmt->bind_param("sssssi", $name, $phone, $postalCode, $address, $detailAddress, $id);

if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => '수정 실패: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
