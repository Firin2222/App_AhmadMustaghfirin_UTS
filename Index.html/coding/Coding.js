function tampilkanNilai() {
    
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var mataKuliah = document.getElementById('mataKuliah').value;
    var nilai = parseFloat(document.getElementById('nilai').value);

    if (!nim || !nama || !mataKuliah || !nilai) {
        alert('Semua Kolom Wajib Di Isi');
        return false;
    }
    
    var nilaiHuruf,indeksNilai,keterangan;

    if (nilai < 0 || nilai> 100){
        alert ("Nilai Tidak Valid !! Masukkan Nilai 0 Sampai 100")
        return;
    } else if (nilai >= 85 && nilai <= 100) {
        nilaiHuruf = 'A';
        indeksNilai = 4.00;
        keterangan = 'Pujian';
    } else if (nilai >= 79) {
        nilaiHuruf = 'A-';
        indeksNilai = 3.67;
        keterangan = 'Sangat Memuaskan';
    } else if (nilai >= 74) {
        nilaiHuruf = 'B+';
        indeksNilai = 3.33;
        keterangan = 'Sangat Memuaskan';
    } else if (nilai >= 69) {
        nilaiHuruf = 'B';
        indeksNilai = 3.00;
        keterangan = 'Memuaskan';
    } else if (nilai >= 64) {
        nilaiHuruf = 'B-';
        indeksNilai = 2.67;
        keterangan = 'Memuaskan';
    } else if (nilai >= 59) {
        nilaiHuruf = 'C+';
        indeksNilai = 2.33;
        keterangan = '-';
    } else if (nilai >= 54) {
        nilaiHuruf = 'C';
        indeksNilai = 2.00;
        keterangan = '-';
    } else if (nilai >= 41) {
        nilaiHuruf = 'D';
        indeksNilai = 1.00;
        keterangan = '-';
    } else {
        nilaiHuruf = 'E';
        indeksNilai = 0.00;
        keterangan = '-';
    }


    var hasilTampil = document.getElementById('hasilTampil');
    hasilTampil.innerHTML = `
        <h3>Hasil:</h3>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Mata Kuliah:</strong> ${mataKuliah}</p>
        <p><strong>Nilai Akhir:</strong> ${nilai}</p>
        <p><strong>Nilai Huruf:</strong> ${nilaiHuruf}</p>
        <p><strong>Indeks Nilai:</strong> ${indeksNilai.toFixed(2)}</p>
        <p><strong>Keterangan:</strong> ${keterangan}</p>
    `;
}

function resetForm() {
    document.getElementById('nilaiForm').reset();
    document.getElementById('hasilTampil').innerHTML = '';
}
