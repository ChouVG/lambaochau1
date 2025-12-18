<?php
$conn = new mysqli("localhost", "root", "", "student_db");
$conn->set_charset("utf8");

if ($conn->connect_error) {
  die("Kết nối lỗi");
}
