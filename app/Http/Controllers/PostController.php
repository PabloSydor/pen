<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comentario;
use App\Http\Requests\Requests\PostRequest;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{


    public function __construct()
    {
    $this->middleware('auth',
    ['except' => ['index', 'show']]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::get();
        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return view('posts.create');
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {

        // $request->validate(
        //     [
        //     'titulo' => 'required|min:5',
        //     'contenido' => 'required|min:50',
        //     ], [
        //     'titulo.required' => 'El título es obligatorio',
        //     'contenido.required' => 'El contenido es obligatorio',
        //     ]
        //    );



        $post = new Post();
        $post['titulo'] = $request['titulo'];
        $post['contenido'] = $request['contenido'];
        $post['user_id'] = 1;
        $post->save();
        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $post = Post::findOrFail($id);
        if (Auth()->check() && Auth()->user()['id'] == $post['user_id']) {


        // $post = Post::findOrFail($id);
        return view('posts.edit', compact('post'));

        } else {
        return redirect()->route('posts.index');

        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {


        $post = Post::findOrFail($id);
        $post['titulo'] = $request['titulo'];
        $post['contenido'] = $request['contenido'];
        $post->save();
        return redirect()->route('posts.show', $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        Comentario::where('post_id', $id)->delete();
        return redirect()->route('posts.index');

    }


    public function nuevoPrueba() {
        $post = new Post();
        $post['titulo'] = "Titulo " . rand(1, 1210);
        $post['contenido'] = "Contenido " . rand(1, 1283838);
        $post['user_id'] = rand(1, 2);
        $post->save();
        return redirect()->route('posts.index');
    }

    public function editarPrueba($id) {
        $post = Post::findOrFail($id);
        $post['titulo'] = "Titulo " . rand(1, 1210);
        $post['contenido'] = "Contenido " . rand(1, 1283838);
        $post->save();
        return redirect()->route('posts.index');
    }




}
