<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

// Получаем данные из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Проверяем обязательные поля
if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Заполните имя и телефон']);
    exit;
}

// Формируем письмо
$to = 'info@glubina-pool.ru';
$subject = 'Заявка с сайта glubina-pool.ru';
$body = "Имя: $name\nТелефон: $phone\nСообщение: $message";
$headers = "From: noreply@glubina-pool.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Отправляем
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Заявка отправлена']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки']);
}
?>