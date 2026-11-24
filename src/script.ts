// 1. Membuat interface untuk menentukan struktur data siswa
interface Siswa {
  name: string;
  class: string;
  score: number;
}

// 2. Data siswa
const dataSiswa: Siswa[] = [
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
const search = document.getElementById(
  "search"
) as HTMLInputElement;

const tabelSiswa = document.getElementById(
  "tabelSiswa"
) as HTMLTableSectionElement;

const rataRata = document.getElementById(
  "rataRata"
) as HTMLElement;

// 4. Membuat fitur pencarian siswa
search.addEventListener("input", function (event: Event): void {
  const searchInput: string = search.value.toLowerCase();

  const hasilInput: Siswa[] = dataSiswa.filter(
    function (siswa: Siswa): boolean {
      return siswa.name.toLowerCase().includes(searchInput);
    }
  );

  tampilkanData(hasilInput);
});

// 5. Fungsi untuk menampilkan data siswa
function tampilkanData(data: Siswa[]): void {
  const namaSiswa: string[] = data.map(
    function (siswa: Siswa, index: number): string {
      let warnaNilai: string;

      // Menentukan warna berdasarkan nilai siswa
      if (siswa.score >= 90) {
        warnaNilai = "bg-success";
      } else if (siswa.score >= 75) {
        warnaNilai = "bg-warning";
      } else {
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
    }
  );

  // Menampilkan data ke dalam tabel
  const hasilSiswa: string = namaSiswa.join("");

  tabelSiswa.innerHTML = hasilSiswa;

  // 6. Menghitung total nilai siswa
  const totalNilai: number = data.reduce(
    function (total: number, siswa: Siswa): number {
      return total + siswa.score;
    },
    0
  );

  // 7. Menghitung rata-rata nilai
  const rataRataNilai: number =
    data.length > 0 ? totalNilai / data.length : 0;

  // 8. Menampilkan rata-rata nilai
  rataRata.textContent = rataRataNilai.toFixed(1);
}

// 9. Menampilkan seluruh data saat halaman pertama kali dibuka
tampilkanData(dataSiswa);