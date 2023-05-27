<?php $name = $_POST['name']; $email = $_POST['email']; $web = $_POST['web']; $subject = $_POST['subject']; $text = $_POST['text'];

$to = 'mucyoh32@gmail.com';

$headers = 'From: $name <$email>\r\n'; $headers .= 'Reply-To: $email\r\n';

 $message = 'Name: $name\r\n'; $message .= 'Email: $email\r\n'; $message .= 'Web: $web\r\n';$message .= 'Subject: $subject\r\n'; $message .= 'Text: $text\r\n';

if (mail($to, $subject, $message, $headers)) { 
    echo 'Email sent successfully!'; } 
    else 
    { 
        echo 'Email sending failed!'; 
    } ?>