<?php
  require_once __DIR__ . '/../db/connect.php';
  $email = $mysqli->real_escape_string($_GET['email'] ?? '');
  $res = $mysqli->query("SELECT id FROM users WHERE email = '$email'");
  echo json_encode(["exists" => $res->num_rows > 0]);
  $mysqli->close();
?>