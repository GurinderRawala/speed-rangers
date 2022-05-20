<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<meta charset="utf-8">
<style>
.my-container{
    background-color: #f1f1f1;
    color: #333;
    padding: 25px;
    font-size: 14px;
}
</style>
</head>
<body>
    <div class="my-container">
        <p>{{ $data->lastname }} is apply for {{ $data->position  }}</p>
        <table>
            <tr>
                First Name: {{ $data->firstname }}
            </tr>
            <tr>
            Last Name: {{ $data->lastname }}
            </tr>
            <tr>
            Email: {{ $data->email }} 
            </tr>
            <tr>
            Phone: {{ $data->phone }}
            </tr>
            <tr>
                Address: {{ $data->street }}, {{ $data->city }} {{ $data->state }} {{ $data->postal }}
            </tr>
            <tr>
                Wants to drive: {{ $data->equipment }}
            </tr>
        </table>
        <p>Message: <br/> {{ $data->message }} </p>
    </div>
</body>
</html>