function mulaiWebsite() {
    // 1. Ambil nama dari kolom input
    const nama = document.getElementById('nama-user').value;

    // 2. Validasi agar input tidak kosong
    if (nama.trim() === "") {
        alert("Harap isi nama kamu terlebih dahulu ya!");
        return;
    }

    // 3. Masukkan nama ke dalam teks sapaan
    document.getElementById('sapaan').innerText = `Halo, ${nama}!`;

    // 4. Sembunyikan kolom input, lalu munculkan konten utama
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    // 5. PROSES MEMUTAR MUSIK OTOMATIS
    const musik = document.getElementById('lagu-bg');
    
    // Setel volume penuh dan muat ulang file audio
    musik.volume = 1.0;
    musik.load();

    // Jalankan perintah putar musik
    musik.play().then(() => {
        console.log("Musik berhasil berputar otomatis!");
    }).catch(error => {
        console.log("Ditolak browser. Musik dipindahkan agar menyala saat gambar diklik:", error);
        
        // JIKA GAGAL: Musik dipaksa berputar saat pengguna mengklik gambar utama
        document.querySelector('.image-wrapper').addEventListener('click', function() {
            musik.play();
        }, { once: true }); // 'once: true' memastikan perintah ini hanya berjalan 1 kali klik saja
    });
}

function tampilkanKejutan() {
    // Memunculkan kotak teks dan gambar kejutan
    document.getElementById('kotak-kejutan').classList.remove('hidden');
}