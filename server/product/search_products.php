<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

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
  echo json_encode(['error' => 'DB 연결 실패']);
  exit();
}

$keyword = $_GET['q'] ?? '';
$keyword = '%' . $keyword . '%'; // 부분일치 검색

$stmt = $conn->prepare("SELECT * FROM products WHERE name LIKE ?");
$stmt->bind_param("s", $keyword);
$stmt->execute();
$result = $stmt->get_result();

$products = [];
while ($row = $result->fetch_assoc()) {
  $products[] = $row;
}

echo json_encode(['products' => $products]);
$conn->close();
?>
