<link rel="stylesheet" href="../css/post.css">
@extends('plantilla')

@section('titulo', 'Ficha')

@section('contenido')


<div class="post">
    <p class="f-titulo">{{$post['titulo']}}</p><span class="f-fecha">{{$post['created_at']}}</span>
    <p class="f-escrito">Usuario: {{$post->user->login}}</p>


    <p class="f-contenido">{{$post['contenido']}}</p>


    @if (Auth()->check())
        @if (Auth()->user()['login'] === $post->user->login)
            <form action="{{route('posts.destroy', $post['id'])}}" method="POST" class="btun">
                @csrf
                @method('delete')
            <input value="Borrar" type="submit"   class="borrar butn btun" id="borrar">
            </form>
        @endif
    @endif

    @if (Auth()->check())
        @if (Auth()->user()['login'] === $post->user->login)
            <a href="{{route('posts.edit', $post['id'])}}" class="editar btun">Editar</a>
        @endif
    @endif
</div>

<h3 class="c-titulo">Comentarios</h3>

@forelse ($post->comentarios as $comentario)
<div class="c">
    <p class="c-login">({{$comentario->user->login}})</p>
    <p class="c-com">{{$comentario['comentario']}}</p>
</div>

@empty
    <p class="c-error">No hay comentarios!</p>
@endforelse

{{-- ({{ $comentario->user->login }}) --}}



@endsection
