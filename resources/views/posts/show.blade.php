@extends('plantilla')

@section('titulo', 'Ficha')

@section('contenido')

<h3>Ficha Post {{$post['id']}}</h3>


<div class="card">
    <p class="f-titulo">{{$post['titulo']}}</p><span class="f-fecha">{{$post['created_at']}}</span>
    <p class="f-contenido">{{$post['contenido']}}</p>

</div>



@endsection
