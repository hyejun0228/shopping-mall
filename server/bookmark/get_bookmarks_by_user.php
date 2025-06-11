<?php
header("Content-Type: application/json; charset=UTF-8");
// CORS 헤더도 추가

$userId = intval($_GET['user_id'] ?? 0);

$conn = new mysqli("localhost", "root", "", "shopping_db");
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB 연결 실패"]);
  exit();
}

$sql = "SELECT product_id FROM bookmarks WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$bookmarks = [];
while ($row = $result->fetch_assoc()) {
  $bookmarks[] = (int)$row['product_id'];
}

echo json_encode($bookmarks);
$conn->close();
