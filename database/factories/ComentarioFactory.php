<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Comentario;
use App\Models\User;
use App\Models\Post;



class ComentarioFactory extends Factory
{

    protected $model = Comentario::class;


    public function definition()
    {
        return [
            'comentario' => $this->faker->sentence,
            // 'user_id' => $this->faker->numberBetween(1, 5),
           'user_id' => User::inRandomOrder()->first(),
           'post_id' => Post::inRandomOrder()->first(),
        ];
    }
}
