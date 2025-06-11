<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:3000"); // CORS 설정 (프론트 주소 맞게 수정)
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

$productId = isset($_GET['product_id']) ? intval($_GET['product_id']) : 0;

$conn = new mysqli("localhost", "root", "", "shopping_db");
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB 연결 실패"]);
  exit();
}

$sql = "SELECT * FROM products WHERE id = ? LIMIT 1";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $productId);
$stmt->execute();
$result = $stmt->get_result();

$product = $result->fetch_assoc();

if (!$product) {
  http_response_code(404);
  echo json_encode(["error" => "상품을 찾을 수 없습니다."]);
  exit();
}

echo json_encode($product);
$conn->close();
