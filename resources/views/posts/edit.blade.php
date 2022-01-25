<link rel="stylesheet" href="../../css/create.css">
<link rel="stylesheet" href="../css/nuevo.css">

@extends('plantilla')

@section('titulo', 'Edit Posts')

@section('contenido')

<h3 class="tit">Editando post {{$post['id']}}</h3>

<form action="{{route('posts.update', $post['id'])}}" method="POST">

    @csrf
    @method('put')

    <div class="formu">
        <input class="form-control formm" type="text" placeholder="{{$post['titulo']}}" value="{{old('titulo')}}" id="titulo" name="titulo">
    </div>
    @if ($errors->has('titulo'))
        <div class="text-danger er">
        {{ $errors->first('titulo') }}
        </div>
    @endif

    <div class="formu">
        <textarea style="height: 420px"  class="form-control formm" placeholder="{{$post['contenido']}}" value="{{old('contenido')}}" id="contenido" name="contenido"></textarea>
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
        <input class="butn editar" type="submit" value="Actualizar">
    </div>



</form>




@endsection
