<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // $this->call(CategorySeeder::class);
        // $this->call(DocumentSeeder::class);
        // $this->call(TrainingSeeder::class);
        // $this->call(PressSeeder::class);
        // $this->call(LiteratureSeeder::class);
        // $this->call(ExternalSeeder::class);
        $this->call(InternalSeeder::class);
        // $this->call(UserSeeder::class);
        // $this->call(TabularDataSeeder::class);
        // $this->call(PublicationSeeder::class);
        // $this->call(SpatialSeeder::class);
    }
}
