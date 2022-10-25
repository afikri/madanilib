<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InternalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            "Policy Input",
            "Multistakeholder Dialogue",
            "Policy Input",
            "CSO Consolidation",
            "Policy Input",
            "Multistakeholder Dialogue",
            "CSO Consolidation",
            "Capacity Building",
            "Capacity Building",
            "Research",
            "Multistakeholder Dialogue, Public Campaign",
            "Capacity Building",
            "Multistakeholder Dialogue",
            "Policy Input",
            "Meeting with Policy Makers",
            "Policy Input",
            "Meeting with Policy Makers",
            "CSO Consolidation",
            "Program Coordination"
        ];

        $tags = [
            "Biofuel",
            "Perhutanan Sosial, Deforestasi",
            "Moratorium Hutan",
            "G20",
            "Nilai Ekonomi Karbon",
            "Nilai Ekonomi Karbon",
            "G20",
            "Matrikulasi",
            "Matrikulasi",
            "Biofuel",
            "Biofuel",
            "Matrikulasi",
            "Nilai Ekonomi Karbon, Perhutanan Sosial",
            "Nilai Ekonomi Karbon",
            "Perhutanan Sosial",
            "BPDLH",
            "Perhutanan Sosial",
            "Masyarakat Adat",
            "Sustaianable Commodity"
        ];
        $dates = [
            "09\/02\/2022",
            "10\/02\/2022",
            "08\/02\/2022",
            "17\/02\/2022",
            "11\/03\/2022",
            "15\/03\/2022",
            "15\/03\/2022",
            "22\/03\/2022",
            "29\/03\/2022",
            "23-25\/03\/2022",
            "30\/03\/2022",
            "5-Apr-2022",
            "6 April",
            "14 April",
            "27 April",
            "11 Mei",
            "12 Mei",
            "1 Juli ",
            "9\/7\/2022"
        ];

        $activities = [
            "Pengiriman Policy Brief RUU EBT dan Permohonan Audiensi",
            "TalkShop Relasi Perhutanan Sosial dan Deforestasi",
            "Penyampaian Policy Brief Memperkuat Inpres Moratorium Hutan",
            "Ngobrol CSO G20 (Grup Tenda)",
            "Masukan terhadap rancangan PermenLHK tentang Tata Laksana Penyelenggaraan Nilai Ekonomi Karbon",
            "TalkShop Membedah Pandangan Masyarakat Sipil tentang Nilai Ekonomi Karbon (Kolaborasi dengan KKI Warsi)",
            "Ngobrol CSO G20 (Grup Tenda)",
            "Matrikulasi Madani Masyarakat Sipil (Dasar)",
            "Matrikulasi Madani Gerakan Sosial (Dasar)",
            "Writeshop Synthesis Report",
            "Peluncuran Buku dan TalkShow Interaktif “Menggapai Asa Bahan Bakar Nabati Indonesia\"",
            "Matrikulasi Madani Masyarakat Adat (Dasar)",
            "Talkshow Peran Masyarakat Penjaga Hutan dalam Penyelenggaraan Nilai Ekonomi Karbon",
            "Policy Brief NEK",
            "Meeting dengan Kapus PPSDM KLHK",
            "Penyampaian Hasil Kajian BPDLH",
            "Meeting dengan Dit Kemitraan Lingkungan PSKL",
            "Rapat Koalisi Kawal RUU Masyarakat Adat",
            "Kick Off Meeting IW "
        ];
        $organizers = [
            "Biofuel",
            "Program KLIMA",
            "Program KLIMA",
            "Tim G20 Madani",
            "Program KLIMA",
            "Program KLIMA",
            "Tim G20 Madani",
            "Madani (KM)",
            "Madani (KM)",
            "Biofuel",
            "Program Biofuel",
            "Madani (KM)",
            "Program KLIMA - Kolaborasi dengan Warsi",
            "Program KLIMA - Kolaborasi dengan Warsi",
            "Program KLIMA",
            "Program KLIMA",
            "Program KLIMA",
            "Comm (Enggagement) - Program GD",
            "Secara Umum, IW memiliki 4 program yang akan dibawakan selama 2022-2023: 1) Pemetaan; 2) SAT; 3) PADI; 4) Online-Offline Campaign. Namun demikian hanya program 1,2,3 yang akan diinsiasi pada tahun ini. Selengkapnya, klik link di samping :)"
        ];
        $audiences = [
            "Policy Input",
            "Multistakeholder Dialogue",
            "Policy Input",
            "CSO Consolidation",
            "Policy Input",
            "Multistakeholder Dialogue",
            "CSO Consolidation",
            "Capacity Building",
            "Capacity Building",
            "Research",
            "Multistakeholder Dialogue, Public Campaign",
            "Capacity Building",
            "Multistakeholder Dialogue",
            "Policy Input",
            "Meeting with Policy Makers",
            "Policy Input",
            "Meeting with Policy Makers",
            "CSO Consolidation",
            "Program Coordination"
        ];

        $participants = [
            null,
            "F= 13\nM= 15",
            "-",
            55,
            "-",
            "F= 9\nM= 14",
            "Lihat zoom",
            "14 (F=7, M=7)",
            "15 (F=7, M=8)",
            null,
            "181 Participants with 3:2 Male to Female ratio",
            "20 (F=11, M=9)",
            null,
            "-",
            null,
            null,
            null,
            "Offline 12 (Madani 3 orang), Online 19 orang",
            "Dhia, Trias, Kukuh, Amel, Iik, Luluk, Resni, Baim, Izhar, Anggi, Delly, Fadli, Yosi, Mas Jojo, Mbak Nadia, Abah Fikri"
        ];
        $objectives = [
            "Pemberian Policy Input RUU EBT dan Permohonan Audiensi dengan Komisi VII DPR RI",
            "Berbagi pengalaman dan cerita terkait praktik perhutanan sosial dan fenomena deforestasi di tapak; berbagi pandangan tentang narasi PS terhadap komitmen pengurangan emisi",
            "Memperkuat Inpres Moratorium Hutan dengan memasukkan 1,39 juta Ha hutan alam primer di luar PIPPIB, di luar konsei\/izin dan PIAPS.",
            "Menginisiasi gerakan CSO lingkungan dalam momen G20",
            "Penyelenggaraan NEK harus berjalan inklusif dan berkeadilan dengan memastikan hak-hak masyarakat diakomodir secara jelas di dalam kebijakan NEK ",
            "Memetakan pandangan dan perspektif masyarakat sipil tentang posisi dan peran masyarakat pengelola hutan dalam penyelenggaraan Nilai Ekonomi Karbon",
            "Menginisiasi gerakan CSO lingkungan dalam momen G20",
            "Memahami konsep negara, pasar, dan masyarakat sipil",
            "Memahami pengertian dan contoh-contoh gerakan sosial",
            "Mendudukan para peneliti yang sudah berkontribusi pada tulisan ini dan melakukan review secara menyeluruh terhadap tulisan tersebut.",
            "Mendiseminasikan kumpulan karya jurnalistik terkait diversifikasi bahan baku BBN, membagikan pandangan dan pengalaman terkait potensi ragam bahan baku BBN nasional, mengidentifikasi peluang dan tantangan mengembangkan ragam komoditas bahan baku BBN nasional, dan mendiskusikan gagasan dan rekomendasi kebijakan guna mendukung pengembangan dan penggunaan ragam komoditas bahan baku BBN nasional. ",
            "Memahami konsep dasar MA",
            null,
            null,
            null,
            null,
            null,
            "1. Update Advokasi: DPR & Pemerintah \n2. Update Kampanye \n3. Nasib RUU MA di tengah kebijakan yang dikeluarkan pemerintah: UUCK, UUP3 "
        ];
        $key_results = [
            "Dua rekomendasi utama untuk RUU EBT: 1) Penguatan pengaturan terkait pemenuhan prinsip keberlanjutan sosial dan lingkungan dalam pengembangan BBN, mencakup industri hulu hingga hilir dari BBN; 2) Penguatan pengaturan terkait ketentuan pengembangan BBN dengan mengedepankan diversifikasi komoditas sebagai bahan baku dan penekanan terhadap pemanfaatan teknologi BBN generasi 2 (pemanfaatan limbah sebagai bahan baku).",
            "Untuk menilai kontribusi PS terhadap pengendalian dan peningkatan tutupan hutan dan lahan memerlukan jangka waktu yang cukup panjang, mengingat tujuan awal PS adalah memberikan hak pengelolaan hutan bagi masyarakat akibat ketimpangan penguasaan lahan untuk perkebunan skala besar. Dengan hak pengelolaan hutan yang diberikan ke masyarakat, haapannya dapat mengelola hutan secara berkelanjutan sehingga mampu berkontribusi pada perekonomian masyarakat yang tinggal di dalam dan sekitar kawasan hutan. Sementara itu, kawasan-kawasan hutan yang masuk ke dalam PIAPS dan diberikan izin\/persetujuan PS adalah kawasan hutan yang sudah terdegradasi. Sehingga perlunya untuk melihat sejarah wilayah PS sebelum pemberian izin\/persetuajuan. Melihat kondisi penutupan lahan awal yang diberikan ke masyarakat, maka fokus implementasi PS terlebih dahulu adalah memperbaiki atau mempertahankan tutupan hutan, baru setelahnya dapat menurunkan laju deforestasi. Lebih dari itu, upaya mempertahankan hingga meningkatkan tutupan hutan dari program PS juga harus dibareng dengan penguatan pasca izin melalui pendampingan dan peningkatan kapasitas.",
            "Tiga rekomendasi utama untuk memperkuat Inpres Moratorium Hutan: (i) memverifikasi indikasi dari analisis Madani atas hutan alam primer seluas 1,39 juta ha yang belum tercakup dan terlindungi ke dalam PIPPIB Tahun 2022 Periode I; (ii) menjadikan PIPPIB sebagai informasi yang terbuka sesuai amanat Undang-Undang No. 14 tahun 2008 tentang Keterbukaan Informasi Publik; dan (iii) melakukan proses due diligence dalam setiap Proyek Strategis Nasional, terutama bagi proyek yang bersinggungan dengan ekosistem hutan alam dan gambut. ",
            "Ada 5 klaster isu yang disuarakan CSO yang dianggap penting untuk digaungkan di momen G20 baik di dalam maupun di luar, yaitu HAM dan Lingkungan, Pandemi dan Akses Kesehatan Masyarakat, Ruang Gerak Masyarakat Sipil, Tata Kelola di Sektor Kunci, dan Keputusan G20 yang melemahkan gerakan masyarakat sipil.\n\nBeberapa ide aksi yang disampaikan adalah kampanye publik dan outreach untuk isu-isu penting yang tidak diakomodir agenda G20, pernyataan bersama, seri diskusi transformasi digital, website\/portal informasi untuk meng-counter statement G20, side event di luar event G20, memperluas aliansi dengan akademisi untuk menggaungkan shrinking civic space, global climate strike, aksi dan event dengan menggunakan momentun yang ada",
            "Madani merekomendasikan 4 hal utama dalam rancangan PermenLHK tentang Tata Laksana NEK: 1) Dalam pelaksanaan mekanisme perdagangan karbon khususnya perdagangan izin emisi (cap & trade), batas atas emisi harus ditetapkan secara ketat oleh pelaku usaha sektor dan sub sektor, tidak hanya berdasarkan target NDC 2030, melainkan juga untuk mencapai target NZE 2060 dan Carbon net sink sektor FOLU 2030, 2) Penetapan Kuota perdagangan karbon lintas-sektor dalam perdagangan karbon dalam negeri perlu mempertimbangkan risiko impermanensi \/ risk of reversal jika emisi di sektor energi di-offset dengan penurunan emisi di sektor hutan dan lahan, 3) Penyediaan informasi publik terkait penyelenggaraan NE, termasuk menyediakan Pedoman Informasi Publik dan Pedoman Pengelolaan Pengaduan Khusus terkait Penyelenggaraan NEK untuk acuan penyelenggara kegiatan NEK.",
            null,
            "Pengerucutan strategi di dalam dan di luar",
            "Peserta memahami elemen dan ciri-ciri masyarakat, pasar, dan masyarakat sipil dan dapat membedakan ketiga konsep tersebut.\nPeserta dapat berpendapat mengenai hubungan antara masyarakat sipil, pasar, dan negara",
            "Peserta mengetahui definisi dan tahapan perkembangan gerakan sosial\nPeserta mengetahui contoh-contoh gerakan sosial\nPeserta dapat memberikan contoh gerakan sosial dan mengidentifikasi tujuan, aktor, counter-movement, dan hasil gerakan sosial",
            "Adanya luaran berupa hasil review dan penyempurnaan dari Synthesis Report",
            "1. Dirjen EBTKE (Diwakili oleh Bapak Edi Wibowo) menyadari apabila tantangan ke depannya memang bagaimana menemukan tanaman lain selain sawit untuk BBN. Walaupun banyak yang bisa menjadi bahan baku BBN, tanaman yang paling produktif dan efisien pengolahannya itu adalah sawit. Untuk itu, penelitian lebih lanjut perlu dilaksanakan menuju net zero emission di 2060.\n\n2. Berada di wilayah tropis membuat keanekaragaman hayati Indonesia enjadi sangat tinggi. Hal ini juga berbanding lurus dengan potensi bahan baku BBN Nasional. Sayangnya, saat ini pemerintah masih terfokus pada pemanfaatan edible oil yang seharusnya dikembangkan lagi tidak terbatas pada edible oil. \n\n3. Ariel meliput potensi ampas kopi sebagai bahan baku BBN. Dalam proses peroduksi liputan, ditemukan apabila ada dua bagian dari sampah kopi yang dapat dimanfaatkan yaitu ampas kopi dan kulit tanduk. Lebih jauh lagi, dalam sebuah penelitian disebuykan 10 kg ampas kopi bisa hasilkan 2 liter minyak nabati. Hal yang menarik adalah fakta apabila ampas kopi ini merupakan limbah yang sangat banyak hampir di seluruh wilayah di indonesia.\n\n4. Di Sulawesi nyampulng dikenal dengan sebutan dongkalang. Sejauh ini, proses pengumpulan nyampung belum bersifat industri, namun secara mandiri oleh warga di hutan hutan. Oleh karenanya produksinya juga masih sangat terbatas. Terlebih, nilai jual nyamplung masih sangat rendah di angka Rp. 1000,-",
            "Peserta mengenal elemen-elemen MA\nPeserta mengenal sejarah kontestasi MA sejak zaman kolonial",
            null,
            null,
            null,
            null,
            null,
            "Penentuan Anggota Tim Kampanye, Tim Substansi, Tim Lobby dan juru bicara \nPembuatan desain kampanye dengan menyesuaikan pada sasaran kampanye \nAkan Berdiskusi dengan pakar terkait UU Cipta Kerja dan UU P3 \nAkan melakukan Identifikasi pasal-pasal di RUU Masyarakat Adat yang bersinggungan dengan UU Cipta Kerja dan UU P3 dan akan ditambahkan\/diupdate ke dalam Naskah Position Paper yang dimiliki Koalisi "
        ];
        $links = [
            "https://madaniberkelanjutan.id/2022/02/14/mendorong-prinsip-keberlanjutan-dan-diversifikasi-bahan-baku-bahan-bakar-nabati-dalam-ruu-energi-baru-terbarukan",
            "https://docs.google.com/document/d/1kpghF0td-wffCLi1hKKKbkrHtamlKT3F3zBJEovnuUs/edit",
            "https://docs.google.com/document/d/1uTLT6UZHNbYvQARTOqXh34GdCh64a0iA8XUyTDpWg38/edit#heading=h.tu7x8bunir19",
            "https://docs.google.com/document/d/1tI6sddawtE59g-8v0joklURpMftsAhy_ikjSO_tMJ4U/edit?usp=sharing",
            null,
            "https://docs.google.com/document/d/1lcCfkTUxjVGbhOtbZAa2l-Eo0qCAaImmzpCTn-LPOdM/edit#",
            "https://docs.google.com/document/d/1tI6sddawtE59g-8v0joklURpMftsAhy_ikjSO_tMJ4U/edit?usp=sharing",
            "https://docs.google.com/presentation/d/1lcYisCGTcP6fqJwLsWdOQ8EsyAiQIbhz5vSkEI8NWXk/edit?usp=sharing",
            "https://docs.google.com/document/d/1EjjSRI4c71owkiLt0Pbo41gzky4pgL2TipSdMNJJojU/edit?usp=sharing",
            "https://docs.google.com/document/d/1yrE5IVobx9vKP_fihqiJsOK6rP-yp5UZ/edit?usp=sharing&amp;ouid=116035102073290458951&amp;rtpof=true&amp;sd=true",
            "https://drive.google.com/file/d/1wgBUJt19cEksfFdtQLvoSixYsZF1fcBn/view?usp=sharing,https://www.youtube.com/watch?v=yZSgijqPkTo&amp;t=1202s",
            "https://docs.google.com/spreadsheets/d/19MzAmN6_JkVk1OWcaS0hcdXIQrW4Fu1vATFCM7N8BEs/edit#gid=1134093407",
            null,
            null,
            null,
            null,
            null,
            "https://docs.google.com/document/d/1-fNcoZu3qxCi-8zouIJ0G64xgMbG9dN7/edit?usp=sharing&amp;ouid=111467394474146693152&amp;rtpof=true&amp;sd=true",
            null
        ];

        $types = [
            "Policy Input",
            "Diskusi CSO",
            "Policy Input",
            "Diskusi CSO",
            "Policy Input",
            "Diskusi CSO",
            "Diskusi CSO",
            "Capacity-building",
            "Capacity-building",
            "Capacity-building",
            "Talkshow Interaktif",
            "Capacity-building",
            "Diskusi Publik",
            "Policy Input",
            "Dialog",
            "Policy recommendations and publication",
            "Dialog",
            "Rapat Koalisi"
        ];

        for ($i = 0; $i < count($categories); $i++) {
            DB::table('internals')->insert([
                [
                    "category" => $categories[$i],
                    "tags" => $tags[$i],
                    "date" => $dates[$i],
                    "activity" => $activities[$i],
                    "organizer" => $organizers[$i],
                    "target" => $audiences[$i],
                    "participant" => $participants[$i],
                    "objective" => $objectives[$i],
                    "links" => $links[$i],
                    "types" => $types[$i],
                    "key_res" => $key_results[$i],
                    "created_at" => now(),
                    "updated_at" => now()
                ],
            ]);
        }
    }
}
