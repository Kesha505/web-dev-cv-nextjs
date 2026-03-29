export default function CVPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container-fluid px-lg-5 px-3">
          <a className="navbar-brand fw-bold fs-4" href="#">BIODATA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-lg-4 gap-2 mt-3 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#biodata">Biodata</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#experience">Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About (Hero) Section */}
      <section id="about" className="hero d-flex align-items-center">
        <div className="container h-100">
          <div className="row align-items-center justify-content-center text-center text-lg-start h-100">
            <div className="col-lg-5 mb-5 mb-lg-0 d-flex justify-content-center">
              {/* Harap letakkan file foto Anda 'foto profil.jpeg' di folder 'public' */}
              <img src="/foto profil.jpeg" alt="Foto profil" className="profile-img img-fluid rounded-circle" />
            </div>
            <div className="col-lg-7 intro text-white ps-lg-5">
              <h1 className="display-4 fw-bold mb-3">Dewa Gede Dhalem Keshananda</h1>
              <p className="lead mb-4">
                Mahasiswa Universitas Primakara yang memiliki minat dalam
                <span className="text-success ms-1">Web Development</span> dan <span className="text-success ms-1">Database</span>.
              </p>
              <a href="https://wa.me/6285903685028" target="_blank" rel="noopener noreferrer" className="btn-wa">
                <i className="fab fa-whatsapp fs-5"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Biodata Section */}
      <section id="biodata" className="section py-5 custom-bg-light text-dark">
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-5 pb-2">Biodata</h2>
          <div className="row g-4 justify-content-center mx-auto" style={{ maxWidth: '800px' }}>
            <div className="col-sm-6 text-center">
              <div className="biodata-card h-100">
                <strong className="d-block text-muted mb-1">Tanggal Lahir:</strong>
                <span className="fs-5 fw-medium">26 Maret 2003</span>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="biodata-card h-100">
                <strong className="d-block text-muted mb-1">Email:</strong>
                <span className="fs-6 fw-medium text-break">greenlight2603@gmail.com</span>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="biodata-card h-100">
                <strong className="d-block text-muted mb-1">No Telp:</strong>
                <span className="fs-5 fw-medium">085903685028</span>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="biodata-card h-100">
                <strong className="d-block text-muted mb-1">Universitas:</strong>
                <span className="fs-5 fw-medium">Universitas Primakara</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section py-5 custom-dark text-white text-center">
        <div className="container py-5">
          <h2 className="fw-bold mb-5 pb-2">Experience</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="experience-card h-100 text-dark mx-auto" style={{ maxWidth: '320px' }}>
                <h3 className="h4 fw-bold mb-3">Panitia PMB Gemilang 2025</h3>
                <p className="mb-0 text-muted">Menjadi anggota panitia dalam kegiatan PMB Gemilang 2025.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="experience-card h-100 text-dark mx-auto" style={{ maxWidth: '320px' }}>
                <h3 className="h4 fw-bold mb-3">Profile</h3>
                <p className="mb-0 text-muted">Owner Dedik_Sgarage.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="experience-card h-100 text-dark mx-auto" style={{ maxWidth: '320px' }}>
                <h3 className="h4 fw-bold mb-3">Profile</h3>
                <p className="mb-0 text-muted">Owner Ketzz_shopgame.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
