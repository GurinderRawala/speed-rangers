<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\PHPMailerController;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    private $data;
    private $request;
    public function __construct(Request $request)
    {
        $this->data = [
            'firstname'=> $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone' => $request->phone,
            'message'=> $request->message
        ];
        $this->request = $request;
    }
    private function verify()
    {
        $this->request->validate([
            'firstname'=>'required',
            'lastname' => 'required',
            'email' => 'required | email:rfc,dns'
        ]);
    }
    public function __invoke()
    {
        $this->verify();
    Contact::create($this->data);
    $payload = [
        "to" => "gurinderrawala@gmail.com",
        "subject" => $this->data["firstname"]. " wants to contact you"
    ];
    $emailBody = (new ContactMail($this->request))->render();
    $mailer = new PHPMailerController();
    $mailer->sendMail($payload, $emailBody, null);
    return json_encode([ "message"=> "We will get back to you shortly" ]);
    }
}

