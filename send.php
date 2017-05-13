<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['subject'])&&$_POST['subject']!="")&&(isset($_POST['message'])&&$_POST['message']!="")&&(isset($_POST['calendar'])&&$_POST['calendar']!="")&&(isset($_POST['time'])&&$_POST['time']!="")&&(isset($_POST['quantity'])&&$_POST['quantity']!="")){ 
        $to = '7yatan@gmail.com';
        $subject = 'Back call'; //Загаловок сообщения
        $message = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                       <p>Name: '.$_POST['name'].'</p>
                       <p>Email: '.$_POST['email'].'</p> 
                       <p>Subject: '.$_POST['subject'].'</p>
                       <p>Message: '.$_POST['message'].'</p>
                       <p>Calendar: '.$_POST['calendar'].'</p>
                       <p>Time: '.$_POST['time'].'</p>
                       <p>Quantity: '.$_POST['quantity'].'</p>
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html;  \r\n"; 
        $headers .= "From: Sender <from@example.com>\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>