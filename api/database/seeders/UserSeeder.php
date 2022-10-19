<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                "name" => "Fikri Abdul",
                "email" => "fikri.abdul@gmx.com",
                "password" => bcrypt("p455w0rd@123"),
                "remember_token" =>Str::random(10), 
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Kristian Muser",
                "email" => "kmuser1@madaniberkelanjutan.id",
                "password" => bcrypt("kMus3r1"),
                "remember_token" =>Str::random(10), 
                "created_at" => now(),
                "updated_at" => now()
            ],
        ]);
    }
}
