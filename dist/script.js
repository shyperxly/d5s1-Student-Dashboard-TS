"use strict";
// 2. Data siswa
const dataSiswa = [
    {
        name: "Andi Saputra",
        class: "Full Stack A",
        score: 85,
    },
    {
        name: "Saputra Andri",
        class: "Full Stack B",
        score: 80,
    },
    {
        name: "Dude Darmawan",
        class: "Full Stack A",
        score: 95,
    },
    {
        name: "Darmawan Dude",
        class: "Backend Core",
        score: 90,
    },
    {
        name: "Prabowo Subianto",
        class: "Full Stack B",
        score: 75,
    },
    {
        name: "Jokowi Dodo",
        class: "Backend Core",
        score: 85,
    },
    {
        name: "Gibran Rakabuming",
        class: "Full Stack A",
        score: 70,
    },
    {
        name: "Firman Saputra",
        class: "Backend Core",
        score: 90,
    },
    {
        name: "Siti Nurhalifah",
        class: "Full Stack A",
        score: 95,
    },
    {
        name: "M Fadhol",
        class: "Backend Core",
        score: 75,
    },
];
// 3. Mengambil elemen HTML
const search = document.getElementById("search");
const tabelSiswa = document.getElementById("tabelSiswa");
const rataRata = document.getElementById("rataRata");
// 4. Membuat fitur pencarian siswa
search.addEventListener("input", function (event) {
    const searchInput = search.value.toLowerCase();
    const hasilInput = dataSiswa.filter(function (siswa) {
        return siswa.name.toLowerCase().includes(searchInput);
    });
    tampilkanData(hasilInput);
});
// 5. Fungsi untuk menampilkan data siswa
function tampilkanData(data) {
    const namaSiswa = data.map(function (siswa, index) {
        let warnaNilai;
        // Menentukan warna berdasarkan nilai siswa
        if (siswa.score >= 90) {
            warnaNilai = "bg-success";
        }
        else if (siswa.score >= 75) {
            warnaNilai = "bg-warning";
        }
        else {
            warnaNilai = "bg-danger";
        }
        // Membuat baris tabel HTML
        return `
        <tr>
          <td>${index + 1}</td>

          <td class="fw-medium">
            ${siswa.name}
          </td>

          <td>
            <span class="bg-secondary text-white rounded p-1 fw-medium">
              ${siswa.class}
            </span>
          </td>

          <td>
            <span class="badge ${warnaNilai}">
              ${siswa.score}
            </span>
          </td>
        </tr>
      `;
    });
    // Menampilkan data ke dalam tabel
    const hasilSiswa = namaSiswa.join("");
    tabelSiswa.innerHTML = hasilSiswa;
    // 6. Menghitung total nilai siswa
    const totalNilai = data.reduce(function (total, siswa) {
        return total + siswa.score;
    }, 0);
    // 7. Menghitung rata-rata nilai
    const rataRataNilai = data.length > 0 ? totalNilai / data.length : 0;
    // 8. Menampilkan rata-rata nilai
    rataRata.textContent = rataRataNilai.toFixed(1);
}
// 9. Menampilkan seluruh data saat halaman pertama kali dibuka
tampilkanData(dataSiswa);
