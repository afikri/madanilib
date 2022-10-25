<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrainingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $staffs = [
                "DELLY FERDIAN",
                "DELLY FERDIAN",
                "IZHAR ALKHALIFARD DAN FELLY FERDIAN",
                "INTAN LESTARI",
                "COMMUNICATION TEAM",
                "HRGA AND FINANCE",
                "PROGRAM STAFF",
                "PROGRAM STAFF"
            ];
            
            $organizers = [
                "INDEF TRAINING CENTRE",
                "LP3ES",
                "SAFENET",
                "ECOEDU.ID",
                "IN HOUSE TRAINING - PANDJI LAKSONO",
                "IN HOUSE TRAINING - HADI PRAYITNO",
                "SMERU INSTITUTE",
                "IN HOUSE TRAINING - RUBBY EMIR"
            ];

            $subjects = [
                "Pelatihan Statistik dan Metodologi Penelitian Kualitatif",
                "Sekolat Riset III Penelitian Survei",
                "Pelatihan Keamanan Digital",
                "Pelatihan Perhitungan Emisi GRK",
                "Digital Marketing",
                "PPH21, PPH23, PPH Pasal 4 ayat 2, PPH Badan",
                "Pelatihan Metodologi Riset dan Riset Kebijakan",
                "Campaign Strategy",
            ];
    
            $periods = [
                "26-Feb-2022",
                "4 - 5 Maret 2022",
                "9 - 11 Maret 2022",
                "21 - 25 Maret 2022",
                "9 - 24 Juli 2022",
                "7 - 28 Juni 2022",
                "8 - 9 Agustus 2022",
                "15 - 17 Agustus 2022"
            ];
    
    
            $links = [
                "https://drive.google.com/drive/folders/1LAnBXtdy-T9irIWJm7lS4yAPc4ruefqR",
                "https://drive.google.com/drive/folders/1dLldOGcbQVyR02KS1xm9O0-9h-fXCM5R",
                null,
                "https://drive.google.com/drive/folders/10jdQeiKWLPfsJKOeuZpUTRBedAYrMCOy",
                "https://drive.google.com/drive/folders/1gNVuYVe4HaAub1u4cRaIVkcjN-5nZLXC",
                "https://drive.google.com/drive/folders/1gNVuYVe4HaAub1u4cRaIVkcjN-5nZLXC",
                "https://drive.google.com/drive/folders/1dr8yUkGgDZ9BXs0WSzE0iG6WdS8Ppk-H",
                null
            ];
            
            for($i=0;$i<count($staffs);$i++) {
                DB::table('trainings')->insert([
                    [
                        "staff" => $staffs[$i],
                        "organizer" => $organizers[$i],
                        "subject" => $subjects[$i],
                        "period" => $periods[$i],
                        "links" => $links[$i],
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                ]);
            }
    
    }
}
