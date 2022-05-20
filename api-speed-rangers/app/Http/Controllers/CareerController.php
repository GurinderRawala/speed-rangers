<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use App\Http\Controllers\PHPMailerController;
use App\Mail\CareerMail;

class CareerController extends Controller
{
    private $firstname;
    private $lastname;
    private $email;
    private $phone;
    private $street;
    private $city;
    private $state;
    private $postal;
    private $position;
    private $equipment;
    private $file;
    private $message;
    public function __construct(Request $request)
    {
        $this->firstname = $request->firstname;
        $this->lastname = $request->lastname;
        $this->email = $request->email;
        $this->phone = $request->phone;
        $this->street = $request->street;
        $this->city = $request->city;
        $this->state = $request->state;
        $this->postal = $request->postal;
        $this->position = $request->position;
        $this->equipment = $request->equipment;
        $this->message = $request->message;
        $this->file = $request->file;
        $this->request = $request;
    }
    private function verify () {
        $this->request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required | email:rfc,dns',
            'phone' => 'required',
            'street' => 'required',
            'city' => 'required',
            'state' => 'required',
            'position' => 'required',
            'equipment' => 'required',
        ]);
    }
    private function fileUpload () {
        if( !$this->file ) {
            return false;
        }
        $this->request->validate([
            'file' => 'mimes:doc,docx,pdf,txt,jpg,jpeg,png,svg'
        ]);
        $fileName = time().'.'.$this->file->extension();  
   
        $this->file->move(public_path('uploads'), $fileName);
   
        return public_path('uploads')."/".$fileName;
    }
    private function createData($filepath){
        return [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'phone' => $this->phone,
            'street' => $this->street,
            'city' => $this->city,
            'state' => $this->state,
            'postal' => $this->postal,
            'position' => $this->position,
            'equipment' => $this->equipment,
            'filepath' => $filepath,
            'message' => $this->message
        ];
    }
    public function create() {
        $this->verify();
        $file = $this->fileUpload();
        $filepath = null;
        if( $file ){
            $filepath = $file;
        }
        $data = $this->createData($filepath);
        Career::create($data);
        $payload = [
                "to" => "gurinderrawala@gmail.com",
                "subject" => $this->firstname. " is applying for a job"
            ];
            $contactMail = ( new CareerMail($this->request) )->render();
            $mailer = new PHPMailerController();
            $mailer->sendMail($payload, $contactMail, $filepath);
        return json_encode([ 'message' => 'We will get back you shortly' ]);
    }
}
