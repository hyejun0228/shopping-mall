<?php
session_start();
require_once __DIR__ . '/../db/connect.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $mysqli->real_escape_string($data['email']);
$password = $data['password'];

$res = $mysqli->query("SELECT * FROM users WHERE email='$email'");
$user = $res->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
  $_SESSION['user'] = [
    "id" => $user['id'],
    "email" => $user['email'],
    "name" => $user['name']
  ];

  echo json_encode([
    "success" => true,
    "user_id" => $user['id'],      // ✅ 추가
    "email" => $user['email'],     // 선택사항
    "name" => $user['name']        // 선택사항
  ]);
} else {
  echo json_encode(["error" => "이메일 또는 비밀번호가 잘못되었습니다."]);
}


$mysqli->close();
?>
