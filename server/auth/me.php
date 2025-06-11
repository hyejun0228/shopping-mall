<?php
session_start();

if (isset($_SESSION['user'])) {
  echo json_encode([
    "id" => $_SESSION['user']['id'],
    "email" => $_SESSION['user']['email'],
    "name" => $_SESSION['user']['name']
  ]);
} else {
  http_response_code(401);
  echo json_encode(["error" => "로그인되어 있지 않습니다."]);
}
?>
