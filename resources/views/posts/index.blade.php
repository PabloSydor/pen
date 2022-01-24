<link rel="stylesheet" href="css/posts.css">
@extends('plantilla')

@section('titulo', 'Listado Posts')

@section('contenido')

<h3 class="titulo">Listado de Posts</h3>
<a style="margin-left: 24px; margin-bottom: 24px" href="{{route('posts.nueva')}}" class="btn btn-warning">Post Generator</a>

@forelse ($posts as $post)
    <div class="post">
        <p class="p-titulo">{{$post['titulo']}}  ({{ $post->user->login }})</p>
        <div class="botones">
            <a href="{{Route("posts.show", $post['id'])}}" class="ver butn" id="ver">Ver</a>

            <form action="{{route('posts.destroy', $post['id'])}}" method="POST">
                @csrf
                @method('delete')
            <input value="Borrar" type="submit"   class="borrar butn" id="borrar">
            </form>

            <a href="{{route('posts.editar', $post['id'])}}" class="editar btun">Editar</a>


        </div>
    </div>
@empty
    <div class="error">
        <p>No hay posts</p>
    </div>
@endforelse

@endsection
