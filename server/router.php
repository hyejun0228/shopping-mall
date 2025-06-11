<?php
// ✅ CORS 설정 (맨 위에 위치)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if ($origin === 'http://localhost:3000') {
  header("Access-Control-Allow-Origin: $origin");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // GET 추가
  header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Authorization 추가
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit(); // 괄호 추가
}

// ✅ 실제 API 라우팅
$action = $_GET['action'] ?? '';

switch ($action) {
  case 'register':
    require_once __DIR__ . '/auth/register.php';
    break;
  case 'login':
    require_once __DIR__ . '/auth/login.php';
    break;
  case 'logout':
    require_once __DIR__ . '/auth/logout.php';
    break;
  case 'get_products':
    require_once __DIR__ . '/product/get_products.php';
    break;
  case 'check_email':
    require_once __DIR__ . '/auth/check_email.php';
    break;
  case 'me':
    require_once __DIR__ . '/auth/me.php';
    break;
  default:
    echo json_encode(["error" => "지원하지 않는 요청입니다."]);
}
