<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('documents')->insert([
            [
                "category_id" => 2,
                "file_name" => "Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar",
                "file_source" => "Madani",
                "year" => "2020",
                "folder" => "Document",
                "upload_date" => "2020-12-12",
                "uploader" => "Asep Kurniadi",
                "doc_description" => "Luas Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar",
                "created_at" => now(),
                "updated_at" => now()
            ],
        ]);
    }
}
