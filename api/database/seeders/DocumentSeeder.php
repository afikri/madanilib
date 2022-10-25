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
        $categories = [
            "Strategi Koalisi",
            "Renstra",
            "Laporan Program",
            "Catatan Proses",
            "Catatan Proses"
        ];
        $tags = [
            "Moratorium Sawit",
            "Anyer",
            "RFN",
            "Peta Jalan Nol Deforestasi, Papua Barat",
            "ProKlim"
        ];
        $filenames = [
            "Final_Rencana_Aksi_Kolektif_Masyarakat_Sipil_Moratorium_Sawit_2019",
            "Dokumen Perencanaan Strategis Madani 2020_Madani_2020",
            "Madani - End-year report - 28 Feb 2018 Final_Madani_2018",
            "Catatan Proses Peta Jalan Indonesia Menuju Nol Deforestasi_Madani_2018",
            "Coaching Clinic dan Kick Off: Pengembangan ProKlim di Areal Perhutanan Sosial untuk Mendukung Pencapaian Target NDC Indonesia_Madani_24 April 2019"
        ];

        $filesources = [
            "Koalisi Moratorium Sawit",
            "Madani",
            "Madani",
            "Madani",
            "Madani"
        ];

        $years = [
            "2019",
            "2020",
            "2018",
            "2018",
            "2019"
        ];

        $links = [
            "https://drive.google.com/file/d/1-52MwkOTg08yNqPdxZdJ_9m5h8mAVf4U/view?usp=sharing,
            https://drive.google.com/file/d/1ClVmQU-TBFvdJ88kjak7h8um2_NDTcl0/view?usp=sharing",
            "https://drive.google.com/file/d/1nVWyaaq-bzjcrbK-9i23zx2Wyz-EHXXp/view?usp=sharing",
            "https://drive.google.com/file/d/1aZQjm4vqA9soRSH4c3ygi4qot0iDYivA/view?usp=sharing",
            "https://drive.google.com/file/d/1aZQjm4vqA9soRSH4c3ygi4qot0iDYivA/view?usp=sharing",
            "https://drive.google.com/file/d/1aZQjm4vqA9soRSH4c3ygi4qot0iDYivA/view?usp=sharing"
        ];

        $desc = [
            "Ekonomi Industri Kelapa Sawit dan Isu Deforestasi 7, Permasalahan Pengaturan Alokasi Lahan bagi Perkebunan Kelapa Sawit 8,
Moratorium Sawit sebagai Momentum untuk Menata Kembali 11,
Inisiatif-inisiatif LSM terkait Kelapa Sawit dan Isu Deforestasi 13,
Kerangka Kerja Logis 17,
Pendekatan RENAKSI 22,
RENAKSI I: Data, 
RENAKSI II: Evaluasi Perizinan,
RENAKSI III: Penghentian pelepasan kawasan hutan untuk perkebunan sawit,
Analisis Awal Pemilihan Lokasi Prioritas Intervensi,
Lokasi Prioritas Intervensi untuk Perkebunan Kelapa Sawit dalam Kawasan Hutan,
RENCANA IMPLEMENTASI
Tata Waktu,
Anggaran yang Dibutuhkan,
Struktur Pengelolaan RENAKSI,
Strategi dan Mekanisme Komunikasi,
Tata Waktu Renaksi Kolektif Moratorium Sawit
            ",
            null,
            null,
            null,
            null
        ];

        for($i=0;$i<count($categories);$i++) {
            DB::table('documents')->insert([
                [
                    "category" => $categories[$i],
                    "tags" => $tags[$i],
                    "file_name" => $filenames[$i],
                    "file_source" => $filesources[$i],
                    "year" => $years[$i],
                    "folder" => $links[$i],
                    "doc_description" => $desc[$i],
                    "created_at" => now(),
                    "updated_at" => now()
                ],
            ]);
        }
    }
}
