<?php
$mysqli = new mysqli("localhost", "root", "", "shopping_db");
if ($mysqli->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB 연결 실패"]);
  exit;
}
?>