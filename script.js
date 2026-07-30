/* =========================================================
   1. DATASET KALENDER MUSIM WISATA (12 BULAN)
   ========================================================= */
const dataKalender = [
    {
        id: "jan",
        bulan: "Januari",
        status: "Merah",
        statusText: "Sebaiknya Tunda Kunjungan",
        cuacaIcon: "fa-cloud-showers-heavy text-danger",
        campingIcon: "fa-tent-arrow-down-to-line text-muted",
        ringkasan: "Puncak Musim Hujan",
        keteranganCuaca: "Curah hujan sangat tinggi disertai angin musiman kencang dan potensi kabut tebal.",
        rekomendasi: "Jalur pendakian licin & rawan. Tidak direkomendasikan untuk aktivitas luar ruangan.",
        aktivitasCocok: "Wisata edukasi atau kuliner lokal di area bawah pemukiman warga Desa Lalatedong.",
        tipsSafety: "Hindari berada di dekat area lereng curam atau tebing yang licin."
    },
    {
        id: "feb",
        bulan: "Februari",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-sun text-warning",
        campingIcon: "fa-campground text-success",
        ringkasan: "Cuaca Stabil",
        keteranganCuaca: "Intensitas hujan menurun drastis, cuaca cerah berawan dan udara terasa sejuk.",
        rekomendasi: "Waktu awal yang sangat baik untuk mulai melakukan pendakian ringan dan fotografi.",
        aktivitasCocok: "Trekking pagi hari, berburu foto panorama, dan menyaksikan sunrise.",
        tipsSafety: "Gunakan alas kaki berpola grip baik karena beberapa tanah basah tersisa."
    },
    {
        id: "mar",
        bulan: "Maret",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-cloud-sun text-success",
        campingIcon: "fa-campground text-success",
        ringkasan: "Camping Ideal",
        keteranganCuaca: "Kondisi langit didominasi cerah, angin bertiup sepoi-sepoi yang sangat menenangkan.",
        rekomendasi: "Sangat ideal untuk kegiatan camping malam hari di area puncak bukit.",
        aktivitasCocok: "Camping Ground, Stargazing (melihat bintang), dan fotografi senja.",
        tipsSafety: "Bawa pakaian hangat/jaket untuk malam hari karena suhu bukit cenderung dingin."
    },
    {
        id: "apr",
        bulan: "April",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-sun text-warning",
        campingIcon: "fa-campground text-success",
        ringkasan: "Panorama Cerah",
        keteranganCuaca: "Sinar matahari optimal, kelembapan seimbang, dan jarak pandang sangat jelas.",
        rekomendasi: "Waktu terbaik menikmati panorama lanskap Selat Makassar dari ketinggian.",
        aktivitasCocok: "Sightseeing, pembuatan konten video/foto drone, dan piknik keluarga.",
        tipsSafety: "Gunakan sunscreen / tabir surya dan topi pelindung matahari."
    },
    {
        id: "mei",
        bulan: "Mei",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-cloud-sun text-success",
        campingIcon: "fa-campground text-success",
        ringkasan: "Cuaca Sangat Nyaman",
        keteranganCuaca: "Musim kemarau bersahabat, hembusan angin sejuk, udara bersih tanpa kabut.",
        rekomendasi: "Sangat cocok bagi wisatawan pemula yang ingin merasakan sensasi mendaki ringan.",
        aktivitasCocok: "Camping, jalur foto lanskap, dan penjelajahan flora lokal.",
        tipsSafety: "Pastikan membawa air minum secukupnya untuk menjaga hidrasi tubuh."
    },
    {
        id: "jun",
        bulan: "Juni",
        status: "Kuning",
        statusText: "Perlu Kewaspadaan",
        cuacaIcon: "fa-wind text-warning",
        campingIcon: "fa-tent text-warning",
        ringkasan: "Mulai Musim Angin",
        keteranganCuaca: "Perubahan pola angin pasat yang mulai bertiup lebih kencang dari arah darat/laut.",
        rekomendasi: "Tetap aman berkunjung siang hari. Waspada saat mendirikan tenda malam hari.",
        aktivitasCocok: "Trekking singkat di pagi hari & fotografi lanskap.",
        tipsSafety: "Gunakan pasak tenda ekstra kuat jika ingin berkemah di area puncak."
    },
    {
        id: "jul",
        bulan: "Juli",
        status: "Kuning",
        statusText: "Perlu Kewaspadaan",
        cuacaIcon: "fa-wind text-warning",
        campingIcon: "fa-tent text-warning",
        ringkasan: "Puncak Angin",
        keteranganCuaca: "Puncak hembusan angin kencang berdurasi panjang, kondisi langit relatif cerah.",
        rekomendasi: "Sangat disarankan kunjungan harian (Day-trip). Kurang disarankan camping berdiri.",
        aktivitasCocok: "Menikmati pemandangan laut dari spot foto terlindung.",
        tipsSafety: "Gunakan pakaian windbreaker (tahan angin) dan hindari berdiri terlalu dekat bibir tebing."
    },
    {
        id: "agt",
        bulan: "Agustus",
        status: "Kuning",
        statusText: "Perlu Kewaspadaan",
        cuacaIcon: "fa-wind text-warning",
        campingIcon: "fa-tent text-warning",
        ringkasan: "Angin Kencang",
        keteranganCuaca: "Angin musiman masih dominan kencang, namun keasrian langit sangat bersih.",
        rekomendasi: "Cukup aman berwisata jika memperhatikan petunjuk panduan pengelola lokal.",
        aktivitasCocok: "Wisata foto pemandangan, menikmati momen sore hari.",
        tipsSafety: "Pastikan kacamata atau benda ringan diikat/disimpan aman dari hembusan angin."
    },
    {
        id: "sep",
        bulan: "September",
        status: "Kuning",
        statusText: "Perlu Kewaspadaan",
        cuacaIcon: "fa-cloud-sun text-warning",
        campingIcon: "fa-campground text-success",
        ringkasan: "Musim Transisi",
        keteranganCuaca: "Pancaroba / transisi iklim. Angin mereda, sesekali timbul hujan lokal berdurasi singkat.",
        rekomendasi: "Selalu pantau laporan cuaca sebelum berangkat.",
        aktivitasCocok: "Trekking pagi hingga siang hari.",
        tipsSafety: "Selalu sediakan jas hujan lipat / payung di dalam tas."
    },
    {
        id: "okt",
        bulan: "Oktober",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-sun text-warning",
        campingIcon: "fa-campground text-success",
        ringkasan: "Cuaca Bersahabat",
        keteranganCuaca: "Kondisi iklim kembali stabil, angin tenang dan keindahan pemandangan jernih.",
        rekomendasi: "Momen emas kedua dalam setahun untuk kunjungan wisata dan camping.",
        aktivitasCocok: "Camping, sunset hunter, fotografi panorama, dan acara komunitas.",
        tipsSafety: "Tetap ikuti rambu petunjuk jalur pendakian resmi."
    },
    {
        id: "nov",
        bulan: "November",
        status: "Hijau",
        statusText: "Sangat Direkomendasikan",
        cuacaIcon: "fa-cloud-sun text-success",
        campingIcon: "fa-campground text-success",
        ringkasan: "Sangat Direkomendasikan",
        keteranganCuaca: "Suhu udara sejuk segar, pepohonan hijau mekar dipadukan cuaca cerah.",
        rekomendasi: "Waktu paling sempurna menutup akhir tahun dengan momen liburan di alam bebas.",
        aktivitasCocok: "Camping keluarga, edukasi alam, dokumentasi video drone.",
        tipsSafety: "Jaga kebersihan dengan membawa kembali seluruh sampah pribadi."
    },
    {
        id: "des",
        bulan: "Desember",
        status: "Merah",
        statusText: "Sebaiknya Tunda Kunjungan",
        cuacaIcon: "fa-cloud-showers-heavy text-danger",
        campingIcon: "fa-tent-arrow-down-to-line text-muted",
        ringkasan: "Puncak Hujan",
        keteranganCuaca: "Tingkat curah hujan tinggi, potensi petir dan angin barat yang kuat.",
        rekomendasi: "Sangat tidak disarankan mendaki atau berkemah demi keselamatan.",
        aktivitasCocok: "Wisata budaya dan kuliner khas Sendana di pemukiman warga.",
        tipsSafety: "Utamakan keselamatan diri dan keluarga, hindari area perbukitan saat hujan lebat."
    }
];

/* =========================================================
   2. RENDERING KALENDER MUSIM KE DOM HTML
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    
    // Inisialisasi AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    const calendarGrid = document.getElementById("calendarGrid");

    if (calendarGrid) {
        dataKalender.forEach((data, index) => {
            let borderClass = "border-status-hijau";
            let badgeClass = "bg-status-hijau";
            
            if (data.status === "Kuning") {
                borderClass = "border-status-kuning";
                badgeClass = "bg-status-kuning";
            } else if (data.status === "Merah") {
                borderClass = "border-status-merah";
                badgeClass = "bg-status-merah";
            }

            const cardHTML = `
                <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
                    <div class="card month-card rounded-4 p-3 shadow-sm bg-white hover-scale h-100 ${borderClass}" onclick="openMonthDetail('${data.id}')">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="fw-bold text-dark-green mb-0">${data.bulan}</h5>
                            <i class="fa-solid ${data.cuacaIcon} fs-4"></i>
                        </div>
                        <span class="badge ${badgeClass} mb-3 text-start w-auto font-poppins">${data.statusText}</span>
                        <div class="d-flex align-items-center gap-2 text-muted small mt-auto">
                            <i class="fa-solid ${data.campingIcon}"></i>
                            <span class="fw-medium">${data.ringkasan}</span>
                        </div>
                    </div>
                </div>
            `;
            calendarGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    }

    /* =========================================================
       3. NAVBAR SCROLL EFFECT & SMOOTH SCROLL
       ========================================================= */
    const navbar = document.getElementById("mainNavbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    /* =========================================================
       4. GALERI LIGHTBOX PREVIEW MODAL
       ========================================================= */
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightboxImg = document.getElementById("lightboxImg");
    const galleryModalElement = document.getElementById("galleryModal");

    if (galleryImages.length > 0 && lightboxImg && galleryModalElement) {
        const galleryModal = new bootstrap.Modal(galleryModalElement);

        galleryImages.forEach(img => {
            img.addEventListener("click", function () {
                lightboxImg.src = this.src;
                galleryModal.show();
            });
        });
    }
});

/* =========================================================
   5. FUNCTION FUNGSI MODAL DETAIL KALENDER
   ========================================================= */
function openMonthDetail(monthId) {
    const item = dataKalender.find(data => data.id === monthId);
    if (!item) return;

    const modalMonthName = document.getElementById("modalMonthName");
    const modalStatusBadge = document.getElementById("modalStatusBadge");
    const modalHeaderBg = document.getElementById("modalHeaderBg");
    const modalWeatherDesc = document.getElementById("modalWeatherDesc");
    const modalRecDesc = document.getElementById("modalRecDesc");
    const modalActivityDesc = document.getElementById("modalActivityDesc");
    const modalSafetyDesc = document.getElementById("modalSafetyDesc");

    let headerBgClass = "bg-success";
    if (item.status === "Kuning") {
        headerBgClass = "bg-warning";
    } else if (item.status === "Merah") {
        headerBgClass = "bg-danger";
    }

    if (modalHeaderBg) modalHeaderBg.className = `modal-header text-white p-4 ${headerBgClass}`;
    if (modalMonthName) modalMonthName.textContent = `Bulan ${item.bulan}`;
    if (modalStatusBadge) modalStatusBadge.textContent = item.statusText;
    
    if (modalWeatherDesc) modalWeatherDesc.textContent = item.keteranganCuaca;
    if (modalRecDesc) modalRecDesc.textContent = item.rekomendasi;
    if (modalActivityDesc) modalActivityDesc.textContent = item.aktivitasCocok;
    if (modalSafetyDesc) modalSafetyDesc.textContent = item.tipsSafety;

    const monthModalElement = document.getElementById("monthDetailModal");
    if (monthModalElement) {
        const monthModal = new bootstrap.Modal(monthModalElement);
        monthModal.show();
    }
}