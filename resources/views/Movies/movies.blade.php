<link rel="stylesheet" href="css/movies.css">
@extends('plantilla')


@section('titulo', 'Movies')

@section('contenido')

<div class="contenedor">
    @forelse ($movies as $movie)
    <a href="{{Route('movies-show', $movie)}}" class="movie-card">
        <img src="imgs/movies/{{$movie['picture']}}" alt="" class="card__img">
        <p class="card__title">{{$movie['title']}}</p>
    </a>
    @empty

    @endforelse
</div>



@endsection




