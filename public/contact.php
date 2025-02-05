<?php
header("Content-Type: application/json; charset=UTF-8"); // Ensure JSON response

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

$name = htmlspecialchars($_POST["name"] ?? '');
$email = htmlspecialchars($_POST["email"] ?? '');
$phone = htmlspecialchars($_POST["phone"] ?? '');
$message = htmlspecialchars($_POST["message"] ?? '');

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "All fields are required."]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    exit;
}

// Validate phone number (basic format)
if (!preg_match("/^\+?[0-9\-\s]+$/", $phone)) {
    echo json_encode(["status" => "error", "message" => "Invalid phone number format."]);
    exit;
}

// Debugging: Log request to a file
file_put_contents("log.txt", print_r($_POST, true), FILE_APPEND);

$to = "contact@test.palacepizzabartow.com"; // Change this to your actual email
$subject = "New Contact Form Submission from $name";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$body = "You received a new message:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Message:\n$message\n";

// Send Email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message."]);
}
?>