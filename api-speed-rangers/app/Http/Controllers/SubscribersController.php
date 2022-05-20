<?php

namespace App\Http\Controllers;

use App\Models\Subscribers;
use Illuminate\Http\Request;

class SubscribersController extends Controller
{
    private $interest;
    private $email;
    private $request;
    public function __construct(Request $request)
    {
        $this->email = $request->email;
        $this->interest = $request->interest;
        $this->request = $request;
    }
    protected function verify(){
        $this->request->validate([
            'interest'=>'required',
            'email' => 'required | email:rfc,dns'
        ]);
    }
    public function createSubscriber(){
        $this->verify();
        Subscribers::create([
            'interest' => $this->interest,
            'email' => $this->email
        ]);
        return json_encode(["message" => "Thank you, We will get back to you"]);
    }
}
