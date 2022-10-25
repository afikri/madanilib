<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LiteratureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            "Sawit",
            "ProKlim",
            "SDG",
            "Pembangunan Daerah",
            "COP UNFCCC",
            "COP UNFCCC",
            "COP UNFCCC",
            "COP UNFCCC",
            "COP UNFCCC",
            "NDC",
            "Kebijakan Sawit",
            null,
            "Kebijakan Sawit",
            "Perencanaan Pembangunan",
            "Kebijakan sawit",
            "Kebijakan Hutan",
            "NDC",
            "Pendanan Iklim & Nilai Ekonomi Karbon",
            "NDC",
            "NDC"
        ];

        $filenames = [
            "Biofuels Policy in Indonesia - Overview and Status Report_ICCT_2016_PDF",
            "Inpres No.6 Tahun 2019 tentang Kelapa Sawit Berkelanjutan (RAN KSB)_SetKab RI_2019",
            "Kumpulan Peraturan tentang Proklim_KLHK_2018_PDF",
            "Resolusi PBB SDG_UN GA_2015_PDF",
            "Deklarasi Manokwari Pembangunan Berkelanjutan Berbasis Wilayah Adat di Tanah Papua_Pemprov Papua _ Papua Barat_2018_PDF",
            "Katowice Decision - CMA 1 Art. 7_UNFCCC_2018_PDF.pdf",
            "Katowice Decision - CMA 1 CP.21_UNFCCC_2018_PDF",
            "Katowice Decision - CMA 1_UNFCCC_2018_PDF",
            "Katowice Decision - CP.24_UNFCCC_2018_PDF",
            "Katowice Decision - Long Term Climate Finance_UNFCCC_2018_PDF",
            "Kepmen LHK No SK.679 Tahun 2017 tentang Pemantauan Implementasi NDC_Menteri LHK_2017_PDF",
            "Kepmen Pertanian tentang Penetapan Luas Tutupan Kelapa Sawit Indonesia Tahun 2019_Menteri Pertanian_2019",
            "Madani Policy Lists Indonesia_Madani_2018_PDF",
            "Kepmen Pertanian Penyelenggaraan Sertifikasi Perkebunan KSB_Menteri Pertanian_(n.d.)_PDF",
            "Narasi RPJMN IV 2020-2024_KEMENPPN_2019_PDF",
            "Naskah Rinpres Sawit Desember 2017_Menko Perekonomian_2017_PDF",
            "New-York-Declaration-on-Forest-–-Action-Statement-and-Action-Plan_UN_2017_PDF",
            "Updated NDC",
            "Peraturan Presiden No. 98 Tahun 2021 tentang Nilai Ekonomi Karbon",
            "Long-Term Strategy on Low Carbon and Climate Resilience 2050 (LTS-LCCR)",
            "Strategi Implementasi NDC"
        ];

        $filesources = [
            "The International Council on Clean Transportation (ICCT)",
            "Sekretariat Kabinet RI",
            "KLHK",
            "UN",
            "PemProv Papua dan PemProv Papua Barat",
            "UNFCCC",
            "UNFCCC",
            "UNFCCC",
            "UNFCCC",
            "UNFCCC",
            "KLHK",
            "Kementerian Pertanian",
            "Madani",
            "Kementerian Pertanian",
            "Kementerian PPN\/Bappenas",
            "Menko Perekonomian",
            "UN",
            "GOI",
            "GOI",
            "GOI",
            "KLHK"
        ];

        $years = [
            2016,
            2019,
            2018,
            2015,
            2018,
            2018,
            2018,
            2018,
            2018,
            2018,
            2017,
            2019,
            2018,
            null,
            2019,
            2017,
            2017,
            2021,
            2021,
            2021,
            2017
        ];

        $links = [
            "https://drive.google.com/file/d/1D-Yk0VPG3DCJbKHFXvaOBsyoIwIAgN3D/view?usp=sharing",
            "https://drive.google.com/file/d/16934LQgYxEnuz4FQ3HymGD0feZQlwLzC/view?usp=sharing",
            "https://drive.google.com/file/d/1MkRIPQt9PjvlqDrzkqHrXpbiTpdK6SoP/view?usp=sharing",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "https://drive.google.com/file/d/1E4lUJESwcH3EVIiCUDXbCrIQzKMis_Ga/view?usp=sharing",
            "https://drive.google.com/file/d/1hkps0l9G0XYebESH4mTEk6cVNG3DWhMw/view?usp=sharing",
            "https://drive.google.com/file/d/1uPqNjc5QKZhnzBOFQi64auFWdrvU9DA0/view?usp=sharing",
            "https://drive.google.com/file/d/1JpgeIAG-SrTDaYJN3pMhMt1s9KuKcM6B/view?usp=sharing"
        ];

        $desc = [
            "Context for Fuels policy in Indonesia; \nFuel consumption and outlook, \nstate of the palm oil industry in Indonesia, \nIndonesia and Climate Change, \nEnvironmental Impacts of palm oil production in Indonesia. \nBiofuels Policy in Indonesia; \nOverview, \nKey Player in Indonesian Government, \nKey Regulations, \nHistorical Performance against targets, \nPotential other uses of the palm oil levy fund.",
            "Penguatan Data, Penguatan Koordinasi dan Infrastruktur.\nPeningkatan Kapasitas dan Kapabilitas Pekebun.\nPengelolaan dan Pemantauan Lingkungan.\nTata Kelola Perkebunan dan Penanganan Sengketa\nDukungan Percepatan Pelaksanaan Sertifikasi Indonesian Sustainable Palm Oil (ISPO) dan Peningkatan Akses Pasar Produk Kelapa Sawit",
            "Permen LHK no.84\/MENLHK-SETJEN\/KUM.1\/11\/2016 tentang Program Kampung Iklim (ProKlim)\nPerDirJen Pengendalian Perubahan Iklim no.P1\/PP1\/SET\/KUM.1\/2\/2017 tentang Pedoman Pelaksanaan Program Kampung Iklim",
            "Resolusi UNGA 25 September 2015 tentang Agenda Pembangunan Berkelanjutan 2015-2030 (SDGs)\nDeklarasi Bersama Negara Anggota PBB\nIsi Tujuan-tujuan serta target yang dicapai melalui SDGs",
            "Komitmen Pengarusutamaan pembangunan berkelanjutan di tanah Papua, perlindungan hak dan peran masyarakat adat, menjunjung tinggi gakkum terkait SDA, mengatur skema pendanaan berkelanjutan, Upaya konservasi, Peningkatan SDA, Pemberdayaan masyarakat adat, pembentukan lembaga independen penyelesaian sengketa lingkungan, kawasan\/koridor konservasi, evaluasi dampak lingkungan terhadap infrastruktur yang sudah terbangun, upaya perumusan pergub tentang ketahanan pangan, kemitraan global, nasional, lokal untuk investasi, pemberdayaan masyarakat dan pelibatan peran perempuan dan masyarakat adat",
            "pedoman lanjut Artikel 7 Paris Agreement tentang nationally determined contributions",
            "Hal-hal yang berkaitan dengan Artikel 6 Paris Agreement",
            "Hal-hal yang berkaitan dengan pengimplementasian Paris Agreement",
            "Persiapan pengimplementasian Paris Agreement dan sesi pertama konferensi.",
            "Pendanaan Iklim Jangka Panjang (long-term climate finance)",
            "Pemantauan Implementasi Kontribusi Yang Ditetapkan Secara Nasional (Nationally Determined Contributions-NDC).\nLampiran 1 - Cakupan Kegiatan Penurunan Emisi GRK \nLampiran 2 - cakupan kegiatan menuju Climate Resilience",
            "Penetapan Luas Tutupan Kelapa Sawit Indonesia 2019\nPeta Rekonsiliasi Tutupan Kebun Kelapa Sawit di 34 Provinsi di Indonesia",
            "Protecting Peatland:\nPotential Impact\nGovernment Regulations\nPresidential Regulations establishing Peatland Restoration Agency\nREDD+ Implementation:\nPotential Impact\nNDC Implementation:\nPotential Impact\nAddressing Drivers of Deforestation:\nMoratorium of Licences in primary forest and peatland (challenges)\nMoratorium of Palm Oil Licences in Forest area\nRevision of Indonesian Sustainable Palm Oil\nIndonesia Biofuel Policy\nSVLK",
            "Peraturan berkaitan dengan penyelenggaraan sertifikasi Perkebunan Kelapa Sawit Berkelanjutan (KSB) Indonesia\nregulasi berkaitan dengan Indonesia Sustainable Palm Oil (ISPO)",
            "RPJMN IV 2020-2024\nKetahanan Ekonomi untuk pertumbuhan yang berkualitas\nPengembangan Wilayah\nPeningkatan SDM\nKebudayaan dan Karakter Bangsa\nInfrastruktur untuk mendukung ekonomi dan pelayanan dasar\nLingkungan Hidup dan Perubahan Iklim\nStabilitas PolHuKam\nKaidah Pelaksanaan\nVisi Menuju Indonesia 2025",
            "Instruksi Presiden tentang Penundaan dan Evaluasi perizinan perkebunan kelapa sawit serta peningkatan produktivitas perkebunan kelapa sawit",
            "The New York Declaration on Forests\nMatter and list of endorsers of the New York Delaration on Forests\nAction Agenda for the New York Declaration on Forests\nForest Matter\nAlready much has been achieved\nEvery Actor's task to achieve the goals\nSupportive Concrete Action Announcements\nThe Supply Chain Revolution\nForest Country Announcements\nIndigenous Peoples\nDeveloped Country Commitments",
            "I. NATIONAL CONTEX\n1.1. GENERAL POLICIES\n1.2. LONG-TERM STRATEGY ON LOW CARBON AND CLIMATE RESILIENCE\nII. MITIGATION\nIII. ADAPTATION\nIV. INFORMATION TO FACILITATE CLARITY, TRANSPARENCY AND\nUNDERSTANDING\n4.1. QUANTIFIABLE INFORMATION ON THE REFERENCE POINT AND TIME FRAMES AND\/OR\nPERIODS FOR IMPLEMENTATION\n4.2. SCOPE AND COVERAGE\n4.3. PLANNING PROCESSES\n4.4. ASSUMPTIONS AND METHODOLOGICAL APPROACHES\n4.5. FAIR AND AMBITIOUS IN THE LIGHT OF NATIONAL CIRCUMSTANCES\n4.6. INDONESIA’S NDC CONTRIBUTES TOWARDS ACHIEVING THE OBJECTIVE OF THE\nCONVENTION AS SET OUT IN ITS ARTICLE 2\nV. NATIONAL REGISTRY SYSTEM AS THE BACKBONE OF TRANSPARENCY\nFRAMEWORK \nVI. MEANS OF IMPLEMENTATION\n6.1. FINANCE\n6.2. TECHNOLOGY DEVELOPMENT AND TRANSFER\n6.3. CAPACITY BUILDING\nVII. REVIEW AND ADJUSTMENT",
            "Ketentuan Umum\nMaksud, Tujuan, dan Ruang Lingkup\nUpaya Pencapaian Target Kontribusi yang Ditetapkan Secara Nasional (NDC)\nTata Laksana Penyelenggaraan Nilai Ekonomi Karbon\nKerangka Transparansi\nPemantauan dan Evaluasi\nKomite Pengarah",
            "Long-Term Vision: Mitigation and Adaptation\nNational Condition and Development Objective\nMitigation and Adaptation Ambition\nMitigation Pathways\nAdaptation Pathways\nCross-Cutting Policy and Measures\nInternational Partnership\nImplementation Approach\nMonitoring, Review, and Update",
            "PARIS AGREEMENT DAN UNDANG-UNDANG NOMOR 16\nTAHUN 2016 TENTANG PENGESAHAN PARIS AGREEMENT\nTO THE UNITED NATIONS FRAMEWORK CONVENTION ON\nCLIMATE CHANGE\nKOMITMEN DALAM NDC\nPROGRAM IMPLEMENTASI NDC\nPENDANAAN"
        ];

        for ($i = 0; $i < count($categories); $i++) {
            DB::table('literatures')->insert([
                [
                    "category" => $categories[$i],
                    "file_name" => $filenames[$i],
                    "source" => $filesources[$i],
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
