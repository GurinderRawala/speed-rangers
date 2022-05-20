<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PHPMailer\PHPMailer\PHPMailer;  
use PHPMailer\PHPMailer\Exception;
 

class PHPMailerController extends Controller
{
    public function email() {
        return view("contact");
    }
    private function configMailer(){
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer(true);
        
        try {
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host = env('HOST_NAME', 'mail.permiles.com');      
            $mail->SMTPAuth = true;
            $mail->Username = env('MAIL_USERNAME', 'admin@permiles.com'); 
            $mail->Password = env('MAIL_PASSWORD', 'Rawala39!!');      
            $mail->SMTPSecure = env('MAIL_ENCRYPTION', 'tls');
            $mail->Port = env('MAIL_PORT', 587);  
            $mail->isHTML(true);    
            return $mail;
    }catch(Exception $e){
        return back()->with('error','configuring mail failed');
    }
    }
    public function sendMail($payload, $emailBody, $attachment){
        $mail = $this->configMailer();
        $mail->setFrom('admin@permiles.com', 'Per Miles');
        $mail->addAddress($payload['to']);
        $mail->Subject = $payload['subject'];
        $mail->Body= $emailBody;
        if( $attachment ){
            $mail->addAttachment($attachment);
        }
        if( !$mail->send() ) {
            return back()->with("failed", "Email not sent.")->withErrors($mail->ErrorInfo);
        }
        else {
            return back()->with("success", "Email has been sent.");
        }
    }

}
