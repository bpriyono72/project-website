import { Component } from "react";

export class Navbar extends Component {
    render(){
        return (
                <>
                    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0"  style={{ background: '#EEF9FF' }}>
                        <h1 class="m-0"><img class="img-fluid rounded" src="assets/img/logoweb.png" style={{ maxHeight: '85px' }} alt="" /></h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="fa fa-bars"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                                <a href="#header-carousel" class="nav-item nav-link active">Beranda</a>
                                <a href="#profil" class="nav-item nav-link">Profil</a>
                                <a href="#layanan" class="nav-item nav-link">Layanan</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Publikasi</a>
                                    <div class="dropdown-menu m-0">
                                        <a href="#berita" class="dropdown-item">Berita Kegiatan</a>
                                        <a href="#video" class="dropdown-item">Informasi Visual</a>
                                        <a href="#peraturan" class="dropdown-item">Peraturan</a>
                                        <a href="#lakin" class="dropdown-item">Laporan Kinerja</a>
                                    </div>
                                </div>
                                <a href="service.html" class="nav-item nav-link">PPID</a>
                            </div>
                            <a href="https://...." class="btn btn-success py-2 px-4 ms-3">Aplikasi Mandiri</a>
                        </div>
                    </nav>
                </>
        )
    }
}

export default Navbar;
