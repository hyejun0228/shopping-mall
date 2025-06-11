<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// DB 연결
require_once '../db/connect.php'; // 여기에선 $mysqli가 정의됨

$user_id = $_GET['user_id'] ?? null;
if (!$user_id) {
  http_response_code(400);
  echo json_encode(["error" => "user_id는 필수입니다"]);
  exit();
}

$stmt = $mysqli->prepare("
  SELECT 
    cart.id, 
    cart.product_id, 
    cart.quantity, 
    products.name, 
    products.brand, 
    products.description, 
    products.price, 
    products.image_url
  FROM cart
  JOIN products ON cart.product_id = products.id
  WHERE cart.user_id = ?
");

$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$cartItems = [];
while ($row = $result->fetch_assoc()) {
  $cartItems[] = $row;
}

echo json_encode($cartItems);

$stmt->close();
$mysqli->close();
?>
