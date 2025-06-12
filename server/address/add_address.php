<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

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
error_log(print_r($data, true));

$user_id = isset($data['user_id']) ? intval($data['user_id']) : null;
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$postalCode = $data['postalCode'] ?? '';
$address = $data['address'] ?? '';
$detailAddress = $data['detailAddress'] ?? '';
$isMainAddress = !empty($data['isMainAddress']) ? 1 : 0;

if (!$user_id || !$name || !$phone || !$postalCode || !$address || !$detailAddress) {
  http_response_code(400);
  echo json_encode(['error' => '필수 항목 누락']);
  exit();
}

if ($isMainAddress) {
  $resetQuery = $conn->prepare("UPDATE addresses SET is_main_address = 0 WHERE user_id = ?");
  $resetQuery->bind_param("i", $user_id);
  $resetQuery->execute();
  $resetQuery->close();
}

$stmt = $conn->prepare("
  INSERT INTO addresses (user_id, name, phone, postal_code, address, detail_address, is_main_address)
  VALUES (?, ?, ?, ?, ?, ?, ?)
");

if (!$stmt) {
  http_response_code(500);
  echo json_encode(['error' => '쿼리 준비 실패: ' . $conn->error]);
  exit();
}

$stmt->bind_param("isssssi", $user_id, $name, $phone, $postalCode, $address, $detailAddress, $isMainAddress);

if ($stmt->execute()) {
  echo json_encode(['success' => true, 'id' => $stmt->insert_id]);
} else {
  http_response_code(500);
  echo json_encode(['error' => '주소 추가 실패: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
