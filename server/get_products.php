<?php
// CORS 허용
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// MySQL 연결 정보
$host = "localhost";
$user = "root";       // 기본 XAMPP 사용자
$pass = "";           // 비밀번호가 없다면 빈 문자열
$dbname = "sample";   // 사용 중인 DB 이름

// 연결 시도
$conn = new mysqli($host, $user, $pass, $dbname);

// 연결 오류 확인
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB 연결 실패: " . $conn->connect_error]);
  exit;
}

// 상품 테이블에서 데이터 조회
$sql = "SELECT id, name, price, image FROM products";  // 'products' 테이블 필요
$result = $conn->query($sql);

// 결과를 배열로 변환
$products = [];
while ($row = $result->fetch_assoc()) {
  $products[] = $row;
}

// JSON 응답
echo json_encode($products);

// 연결 종료
$conn->close();
?>
