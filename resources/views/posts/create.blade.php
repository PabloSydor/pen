<link rel="stylesheet" href="../css/create.css">
<link rel="stylesheet" href="../css/nuevo.css">

@extends('plantilla')

@section('titulo', 'Create Post')

@section('contenido')

<h4 class="tit">Nuevo post</h4>


<form action="{{route('posts.store')}}" method="POST">

    @csrf

    <div class="formu">
        <input class="form-control formm" type="text" placeholder="Titulo" id="titulo" value="{{old('titulo')}}" name="titulo">
    </div>
    @if ($errors->has('titulo'))
        <div class="text-danger er">
        {{ $errors->first('titulo') }}
        </div>
    @endif


    <div class="formu">
        <textarea class="form-control formm" placeholder="Contenido" id="contenido" {{old('contenido')}} name="contenido"></textarea>
    </div>
    @if ($errors->has('contenido'))
        <div class="text-danger er">
        {{ $errors->first('contenido') }}
        </div>
    @endif

    <div>
        <input type="text" placeholder="Titulo" id="user_id" name="user_id" value="1" hidden>
    </div>

    <div class="formu">
        <input class="butn" type="submit" value="Crear Post">
    </div>



</form>



@endsection
