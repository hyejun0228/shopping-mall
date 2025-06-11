<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;
$categoryId = isset($_GET['category_id']) ? intval($_GET['category_id']) : 0;

$conn = new mysqli("localhost", "root", "", "shopping_db");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "DB 연결 실패"]);
    exit();
}

if ($userId > 0) {
    // 로그인한 경우: 북마크 포함
    $sql = "
        SELECT p.*, IF(b.user_id IS NULL, 0, 1) AS bookmarked
        FROM products p
        LEFT JOIN bookmarks b ON p.id = b.product_id AND b.user_id = ?
    ";
} else {
    // 로그인하지 않은 경우: 북마크 없음
    $sql = "
        SELECT p.*, 0 AS bookmarked
        FROM products p
    ";
}

// 카테고리 필터가 있는 경우
if ($categoryId > 0) {
    $sql .= " WHERE p.category_id = ?";
}

$sql .= " ORDER BY p.id DESC";

// prepare + bind_param
if ($userId > 0 && $categoryId > 0) {
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "쿼리 준비 실패: " . $conn->error]);
        exit();
    }
    $stmt->bind_param("ii", $userId, $categoryId);
} elseif ($userId > 0) {
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "쿼리 준비 실패: " . $conn->error]);
        exit();
    }
    $stmt->bind_param("i", $userId);
} elseif ($categoryId > 0) {
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "쿼리 준비 실패: " . $conn->error]);
        exit();
    }
    $stmt->bind_param("i", $categoryId);
} else {
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "쿼리 준비 실패: " . $conn->error]);
        exit();
    }
}

$stmt->execute();
$result = $stmt->get_result();

$products = [];
while ($row = $result->fetch_assoc()) {
    $row['bookmarked'] = (bool)$row['bookmarked'];
    $products[] = $row;
}

echo json_encode($products);
$conn->close();
