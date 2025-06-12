<?php
// CORS 설정 — 반드시 가장 위에 위치시킬 것
$allowedOrigin = 'http://localhost:3000'; // 프론트 주소

if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

// OPTIONS 요청에 대한 preflight 처리
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 아래는 기존 코드 그대로 유지
header("Content-Type: application/json; charset=UTF-8");

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$userId = intval($data['user_id'] ?? 0);
$productId = intval($data['product_id'] ?? 0);

$conn = new mysqli("localhost", "root", "", "shopping_db");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "DB 연결 실패"]);
    exit();
}

$checkSql = "SELECT * FROM bookmarks WHERE user_id = ? AND product_id = ?";
$checkStmt = $conn->prepare($checkSql);
$checkStmt->bind_param("ii", $userId, $productId);
$checkStmt->execute();
$result = $checkStmt->get_result();

if ($result->num_rows > 0) {
    
    $deleteSql = "DELETE FROM bookmarks WHERE user_id = ? AND product_id = ?";
    $deleteStmt = $conn->prepare($deleteSql);
    $deleteStmt->bind_param("ii", $userId, $productId);
    $deleteStmt->execute();
    echo json_encode(["bookmarked" => false]);
} else {
    
    $insertSql = "INSERT INTO bookmarks (user_id, product_id) VALUES (?, ?)";
    $insertStmt = $conn->prepare($insertSql);
    $insertStmt->bind_param("ii", $userId, $productId);
    $insertStmt->execute();
    echo json_encode(["bookmarked" => true]);
}

$conn->close();
