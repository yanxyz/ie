<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}

$str = file_get_contents('php://input');
if (!empty($str)) {
    parse_str($str, $data);
    header('Content-Type: application/json');
    echo json_encode($data);
}
