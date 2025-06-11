<?php
require_once __DIR__ . '/../db/connect.php';

$data = json_decode(file_get_contents("php://input"), true);
$name = $mysqli->real_escape_string($data['name']);
$email = $mysqli->real_escape_string($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT);

// 이메일 중복 체크
$check = $mysqli->query("SELECT * FROM users WHERE email='$email'");
if ($check->num_rows > 0) {
  echo json_encode(["error" => "이미 가입된 이메일입니다."]);
  exit;
}

// INSERT
$stmt = $mysqli->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $password);
$stmt->execute();

echo json_encode(["success" => true]);
$mysqli->close();
?>