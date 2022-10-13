<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TabularDataSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            "Karhutla",
            "Sawit",
            "Biofuel",
            "Biofuel",
            "Biofuel",
            "Sawit",
            "Hutan Alam",
            "Hutan Alam",
            "Biofuel",
            "Konsesi",
            "Karhutla",
            "Karhutla",
            "Sawit",
            "Sawit",
            "Perhutanan Sosial",
            "Sawit",
            "Sawit",
            "Hutan Alam",
            "Gambut",
            "Karhutla",

            "Sawit",
            "Hutan Alam",
            "Hutan Alam",
            "Hutan Alam",
            "Hutan Alam",
            "Hutan Alam",
            "Hutan Alam,Sawit",
            "Karhutla",
            "Sawit",
            "Sawit",
            "Deforestasi",
            "Sawit",
            "Pilpres",
            "Karhutla",
            "Gambut",
            "Deforestasi",
            "Perhutanan Sosial",
            "Perhutanan Sosial",
            "Deforestasi",
            "Deforestasi",

            "Karhutla",
            "Hutan Alam",
            "Bencana",
            "Bencana",
            "Sawit",
            "Deforestasi",
            "Deforestasi",
            "Deforestasi",
            "Hutan Alam",
            "Hutan Alam",
            "Sawit,Hutan Alam",
            "Gambut",
            "Sawit",
            "Sawit",
            "Sawit",
            "Sawit",
            "Deforestasi",
            "Karhutla",
            "Pilkada",
            "Deforestasi",
            "Karhutla",
            "Konsesi",
            "Masyarakat Adat",
            "Gambut",
            "Konsesi",
            "Sawit",
            "Sawit",
            "Deforestasi",
            "Hutan Alam",
            "Hutan Alam",
            "Hutan Alam",
            "Sawit",
            "Hutan Alam",
            "Hutan Alam",
            "Karhutla",
            "Hutan Alam",
            "Hutan Alam",
            "Sawit",
            "Konsesi"

        ];

        $filenames = [
            "Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar",
            "Analisis Data Konsesi Sawit GP dan Auriga",
            "Analisis Omnimbus Law - Annex XX Neraca Biodiesel dan CPO Skenario B30D10 Analysis",
            "Analisis Omnimbus Law - Biofuel Worksheet",
            "Analisis Omnimbus Law - Ekspor Impor CPO dan PKO Nasional 2000 - 2018 (BPS)",
            "Analisis Omnimbus Law - Luas dan Produktivitas Lahan 1970 - 2018",
            "Analisis Omnimbus Law - Data Tabular Mas Fadli",
            "Analisis Pilkada",
            "Biofuel Worksheet",
            "Concession Risk Ranking",
            "Area Terbakar 2019 dalam Izin Sawit di Gambut + Kawasan Hutan",
            "Area Terbakar 2019 dalam Izin Sawit di Gambut + Tutupan Lahan",
            "Daftar Kabupaten dengan Tutupan Hutan Terluas dalam Konsesi",
            "Daftar Konsesi Sawit",
            "Daftar Lokasi ProKlim dalam SRN 2018 - Wilayah Sumatera",
            "Tutupan Sawit (Kota-Kab)",
            "Tutupan Sawit di Gambut (Kota-Kab)",
            "Luasan Hutan Alam di APL tiap Kabupaten Kota",
            "Luasan Gambut di Tiap Kabupaten Kota",
            "Luasan Area Terbakar di Tiap Kabupaten Kota",
            "Luasan Izin Sawit dan Pohon Sawit di Tiap Kabupaten Kota",
            "HA dalam Konsesi Pilkada",
            "Luasan Hutan Alam berdasarkan Tutupan Lahan per Kabupaten 2018",
            "HA 19 R05",
            "Luas Hutan Alam 2019",
            "Hutan Alam 2019",
            "Hutan Alam di Izin Sawit",
            "Hutan yang Terbakar",
            "Izin Sawit dan Tutupan Sawit",
            "NTPR X Luas Smallholder 10 Provinsi Smallholder Terluas",
            "Komen Defor Indonesia 2019-2020",
            "Laju Luas Lahan Sawit per Sektor",
            "LHKPN - Penghitungan LHKPN Capres 2019",
            "Resume Statistik Covid Karhutla",
            "Statistik AT19 IS TL FEG Prov",
            "LTS Deforestation Scenario",
            "Capaian Perhutanan Sosial sd 1 April 2019",
            "Capaian Perhutanan Sosial sd 02.05.20_2020",
            "Data Deforestasi 23 April 2018",
            "Data Deforestasi 26 April 2018",

            "Data Jejak Terbakar",
            "Data Kehutanan Provinsi Papua Barat",
            "Data Kerugian Bencana - Intensitas Bencana",
            "Data Kerugian Bencana - Ringkasan APBD 2017",
            "Data Statistik Izin Sawit dan Tertanam Sawit",
            "Deforestasi Bruto",
            "Deforestasi di Wilayah Izin Konsesi Kumulatif 2003 - 2018",
            "Deforestasi",
            "Fakta Hutan Papua",
            "HA di HP dan HPT",
            "Harga TBS 2013 - 2018 Dirjenbun",
            "Hutan Alam dan Gambut di Izin Sawit di PIPPIB",
            "Konsesi Sawit di Gambut",
            "Laju Luas Lahan Sawit per Sektor",
            "Luas Lahan Sawit Tidak Menghasilkan Smallholder",
            "Masterdata Sawit",
            "Rekap Deforestasi 2013-2014",
            "Rekapitulasi Luas Kebakaran Hutan dan Lahan per Provinsi di Indonesia 2013 - 2018",
            "Resume Data Pilkada",
            "Resume Matriks Perbandingan Deforestasi Madani GFW FWI",
            "Resume Statistik Covid Karhutla",
            "Resume Tumpang Tindih",
            "Sikap Anggota DPR Terhadap RUU Masyarakat Adat",
            "Statistik AT19 IS TL FEG Prov",
            "Statistik Jumlah HPH 2001-2016 BPS",
            "Statistik Sawit Nasional 2010 - 2019",
            "Tabel Analisis Masalah Workshop Moratorium Sawit CLUA",
            "Tabel Deforestasi",
            "Tabel FREL Subnasional Interprestasi",
            "Tabel FREL Subnasional Pak Ridwan",
            "Tabel Hutan Alam Berisiko Terancam dan Sangat Terancam 2020",
            "Tabular Izin dan Area Tertanam Sawit",
            "Tabulasi Hutan Alam Primer Sekunder Kabkot dan Fungsi Kawasan Hutan",
            "TABULASI HUTAN ALAM PRIMER SEKUNDER KABKOT dan FUNGSI KAWASAN HUTAN",
            "Total Areal APL _ Sawit Provinsi",
            "Track Visi Misi Prabowo",
            "Tracking Visi dan Misi Capres terkait Lingkungan",
            "Tutupan Sawit dalam Kawasan Hutan",
            "List of PO Companies in PIPPIB 2020"

        ];



        $doc_description = [
            "Luas Area Baru Terbakar ABT Kalteng, Sumsel, Kalbar",
            "Data Tabular Sawit Greenpeace dan Auriga",
            "Annex XX Neraca Biodiesel dan CPO Skenario B30D10 Analysis",
            "Biofuel worksheet",
            "Ekspor Impor CPO dan PKO Nasional 2000 - 2018 (BPS)",
            "Luas dan produktivitas lahan 1970 - 2018",
            "Luas administrasi dan luas hutan setiap provinsi",
            "Hutan Alam di Provinsi dan Kabupaten Pilkada 2020",
            "•	Political-economic background
             •	Impacts on forests and land
             •	Index Mundi
             •	Collective auction
             •	Current work on biofuel",
            "Company Name, Problematic Area, Forest Cover, Ranking",
            "Area Terbakar 2019 dalam Izin Sawit di Gambut + Kawasan Hutan",
            "Area Terbakar 2019 dalam Izin Sawit di Gambut + Tutupan Lahan",
            "Luasan Izin Sawit dan Pohon Sawit di Area Gambut di Tiap Kabupaten Kota",
            "Nama Perusahaan, Luas Konsesi, Luas Hutan Alam, Luas Gambut",
            "Nama Kegiatan, Kab/Kota, Provinsi, Status, No Akun",
            "Luas tutupan sawit Provinsi - Kota/ Kabupaten",
            "Luas tutupan sawit di Gambut Provinsi - Kota/ Kabupaten",
            "Luasan Hutan Alam di APL tiap Kabupaten Kota",
            "Luasan Gambut di Tiap Kabupaten Kota",
            "Luasan Area Terbakar di Tiap Kabupaten Kota", // 20

            "Luasan Izin Sawit dan Pohon Sawit di Tiap Kabupaten Kota",
            "Hutan Alam di Provinsi dan Kabupaten Pilkada 2020",
            "Luasan Hutan Alam berdasarkan Tutupan Lahan per Kabupaten 2018",
            "Hutan Alam tahun 2019",
            "Luas hutan alam 2019 (7sheet)",
            "Luas hutan alam 2019 (1sheet)",
            "•	Data izin sawit CSO
             •	Data izin sawit RSPO
             •	Data pelepasan kawasan hutan",
            "Luasan hutan yang terbakar",
            "Izin Sawit dan Tutupan Sawit",
            "NTPR X Luas Smallholder 10 Provinsi Smallholder Terluas", //30
            "","","","","","","","","","",
            "","","","","","","","","","",
            "","","","","","","","","","",
            "","","","","","","","","","",
            "","","","","","","","","",
        ];

        foreach ($categories as $i => $val) {
            DB::table('tabular_data')->insert([
                [
                    "category" => $categories[$i],
                    "tags" => "",
                    "file_name" => $filenames[$i],
                    "doc_description" => $doc_description[$i],
                    "created_at" => now(),
                    "updated_at" => now()
                ],
            ]);
        }
    }
}
