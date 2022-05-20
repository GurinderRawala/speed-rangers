<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
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
        <p>{{ $data->lastname }} wants to contact</p>
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
        </table>
        <p>Message: {{ $data->message }} </p>
    </div>
</body>
</html>