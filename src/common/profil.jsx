import { Component } from "react";

export class Profil extends Component {
    render(){
        return(
            <>


<div class="container-fluid py-5 wow fadeInUp" id="profil" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-success text-uppercase">Profil</h5>
                        <h1 class="mb-0">KPPBC TMP B Samarinda</h1>
                    </div>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div class="row g-0 mb-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#organisasiModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Struktur Organisasi</h5></butaton>
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#sekilasModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Sekilas KPPBC TMP B Samarinda</h5></butaton>
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#tupoksiModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Tugas Pokok dan Fungsi</h5></butaton>
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#visiModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Visi, Misi dan Motto</h5></butaton>
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#maklumatModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Maklumat Pelayanan</h5></butaton>
                            <butaton type="button" data-bs-toggle="modal" data-bs-target="#aplikasiModal"><h5 class="mb-3"><i class="fa fa-arrow-right text-success me-3"></i> Aplikasi Mandiri</h5></butaton>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-3">Video Profil</h5>
                            <hr></hr>
                            <iframe className="embed-responsive-item rounded-2" src="https://www.youtube.com/embed/JPvZAIX6pWg" allow="autoplay;accelerometer;" allowFullScreen title="video profil"></iframe>
                            <a href="https://www.youtube.com/embed/JPvZAIX6pWg" target="_blank"  rel="noreferrer"></a>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" style={{ minHeight: '500px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="assets/img/about.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="organisasiModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Struktur Organisasi</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="sekilasModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Sekilas Bea Cukai Samarinda</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="tupoksiModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Tugas Pokok dan Fungsi</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="visiModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Visi, Misi dan Motto</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="maklumatModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Maklumat Pelayanan</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="aplikasiModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        <h5 class="text-succes">Aplikasi Mandiri</h5>
                    </div>
                    <div class="row g-5">
                        <div class="col-12" p-5>
                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                <img class="w-100" src="assets/img/organisasi.jpg" style={{ maxWidth: '1200px' }} alt="" />
                            </div>
                        </div>    
                        <div class="col-12 bg-light rounded" p-5>
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-success me-2"></i><strong>John Doe</strong></small>
                                <small><i class="far fa-calendar-alt text-success me-2"></i><strong>01 Jan, 2045</strong></small>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                            <div>
                                <p class="mb-4">
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            </>
        )
    }
}

export default Profil;
