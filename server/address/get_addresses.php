<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$user_id = $_GET['user_id'] ?? null;

if (!$user_id) {
  http_response_code(400);
  echo json_encode(['error' => 'user_id is required']);
  exit();
}

$conn = new mysqli('localhost', 'root', '', 'shopping_db');

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error' => 'DB 연결 실패']);
  exit();
}

$stmt = $conn->prepare("SELECT * FROM addresses WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$addresses = [];
while ($row = $result->fetch_assoc()) {
  $addresses[] = $row;
}

echo json_encode($addresses);

$stmt->close();
$conn->close();
?>
