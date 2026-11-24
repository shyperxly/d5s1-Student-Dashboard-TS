"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// Mengambil elemen HTML
const search = document.getElementById("search");
const tabelSiswa = document.getElementById("tabelSiswa");
const rataRata = document.getElementById("rataRata");
// Event pencarian siswa
search.addEventListener("input", function (event) {
    const searchInput = search.value.toLowerCase();
    const hasilInput = dataSiswa.filter(function (siswa) {
        return siswa.name.toLowerCase().includes(searchInput);
    });
    tampilkanData(hasilInput);
});
// Fungsi untuk menampilkan data siswa
function tampilkanData(data) {
    const namaSiswa = data.map(function (siswa, index) {
        let warnaNilai;
        if (siswa.score >= 90) {
            warnaNilai = "bg-success";
        }
        else if (siswa.score >= 75) {
            warnaNilai = "bg-warning";
        }
        else {
            warnaNilai = "bg-danger";
        }
        return `
      <tr>
        <td>${index + 1}</td>
        <td class="fw-medium">${siswa.name}</td>
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
    const hasilSiswa = namaSiswa.join("");
    tabelSiswa.innerHTML = hasilSiswa;
    // Menghitung total nilai
    const totalNilai = data.reduce(function (total, siswa) {
        return total + siswa.score;
    }, 0);
    // Menghitung rata-rata nilai
    const rataRataNilai = data.length > 0 ? totalNilai / data.length : 0;
    rataRata.textContent = rataRataNilai.toFixed(1);
}
// Menampilkan semua data saat halaman dibuka
tampilkanData(dataSiswa);
//# sourceMappingURL=script.js.map