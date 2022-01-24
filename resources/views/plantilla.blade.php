<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/plantilla.css">
    <title>
        @yield('titulo')
    </title>
</head>
<body>
    @include('partials.menu')
    <p style="margin-top: 0;
    padding: 8px;
    padding-top: 8px;
    display: flex;
    justify-content: flex-end;
    line-height: 10px;
    color: rgb(114, 114, 114);" class="fecha">{{fechaActual("d/m/y")}}</p>
    @yield('contenido')
</body>
</html>
