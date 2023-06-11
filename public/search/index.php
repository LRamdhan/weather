<?php

// disable cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");

// disable cache
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

require("db_config.php");

$response = [
  "status" => "",
  "message" => "",
  "data" => ""
];

if($_SERVER["REQUEST_METHOD"] !== "GET") {
  $response["status"] = "failed";
  $response["message"] = "unpermitted method detected";
  $response = json_encode($response);
  echo $response;
  exit;
}

$connect = mysqli_connect($_ENV["url"], "root", "", "weather");
$q = isset($_GET["q"]) ? $_GET["q"] : "";
$query = mysqli_query($connect, "SELECT * FROM city WHERE name LIKE '%$q%' LIMIT 20");
$data = [];
while($row = mysqli_fetch_assoc($query)) { $data[] = $row; }

$response["status"] = "success";
$response["message"] = "data found";
$response["data"] = $data;
$response = json_encode($response);
echo $response;