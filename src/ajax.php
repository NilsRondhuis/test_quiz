<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $fname = $_POST["fname"];
  $lname = $_POST["lname"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $anwsers = $_POST["answers"];
  
  echo json_encode(["status" => "success"]);
}
?>