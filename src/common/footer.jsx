import { Component } from "react";

export class Footer extends Component {
    render(){
        return(
                <>
                    <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-lg-4 col-md-6 footer-about">
                                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-success p-4">
                                        <a href="index.html" class="navbar-brand">
                                            <h1 class="m-0"><img class="img-fluid rounded" src="assets/img/team-1.jpg" style={{ maxHeight: '150px', borderRadius: '20px' }} alt="" /></h1> 
                                        </a>
                                        <p class="mt-3 mb-2">
                                            Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Lorem diam sit erat dolor elitr et, Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.
                                        </p>
                                        <p class="mt-3 mb-1"><i>Samarinda, 24 Oktober 2022</i></p>
                                        <br></br>
                                        Mr. Abcdesfghijkallj fjhkl
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6">
                                    <div class="row gx-5">
                                        <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                                <h3 class="text-light mb-0">Hubungi Kami</h3>
                                            </div>
                                            <div class="d-flex mb-2">
                                                <i class="bi bi-geo-alt text-success me-2"></i>
                                                <p class="mb-0">Jl. Niaga Timur No. 2, Samarinda, Kalimantan Timur</p>
                                            </div>
                                            <div class="d-flex mb-2">
                                                <i class="bi bi-envelope-open text-success me-2"></i>
                                                <p class="mb-0">kppbcsamarinda@beacukai.go.id</p>
                                            </div>
                                            <div class="d-flex mb-2">
                                                <i class="bi bi-telephone text-success me-2"></i>
                                                <p class="mb-0">+012 345 6789 0000</p>
                                            </div>
                                            <div class="d-flex mt-4">
                                                <a class="btn btn-success btn-square me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                                                <a class="btn btn-success btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                                                <a class="btn btn-success btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                                <a class="btn btn-success btn-square" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                                <h3 class="text-light mb-0">Grup Satuan Kerja</h3>
                                            </div>
                                            <div class="link-animated d-flex flex-column justify-content-start">
                                                <a class="text-light mb-2" href="#">- Kanwil BC Kalbagtim</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP B Balikpapan</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP B Samarinda</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP B Tarakan</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP C Bontang</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP C Sangatta</a>
                                                <a class="text-light mb-2" href="#">- KPPBC TMP C Nunukan</a>
                                                <a class="text-light mb-2" href="#"></a>
                                                <a class="text-light mb-2" href="#"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                                <h3 class="text-light mb-0">Lain-lain</h3>
                                            </div>
                                            <div class="link-animated d-flex flex-column justify-content-start">
                                                <butaton type="button" data-bs-toggle="modal" data-bs-target="#website"><i class="fa fa-arrow-right text-success me-2"></i> Tentang Website</butaton>
                                                <butaton type="button" data-bs-toggle="modal" data-bs-target="#privasi"><i class="fa fa-arrow-right text-success me-2"></i> Kebijakan Privasi</butaton>
                                                <butaton type="button" data-bs-toggle="modal" data-bs-target="#skb"><i class="fa fa-arrow-right text-success me-2"></i> Syarat & Ketentuan</butaton>
                                                <butaton type="button" data-bs-toggle="modal" data-bs-target="#petasitus"><i class="fa fa-arrow-right text-success me-2"></i> Peta Situs</butaton>
                                                <butaton type="button" data-bs-toggle="modal" data-bs-target="#disclaimer"><i class="fa fa-arrow-right text-success me-2"></i> Disclaimer</butaton>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="website" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                                <div class="modal-header border-0">
                                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="container py-5">
                                    <div class="row g-5">
                                        <div class="col-12" p-5>
                                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                                <img class="w-100" src="assets/img/skb.jpg" style={{ maxWidth: '1300px' }} alt="" />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="privasi" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                                <div class="modal-header border-0">
                                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="container py-5">
                                    <div class="row g-5">
                                        <div class="col-12" p-5>
                                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                                <img class="w-100" src="assets/img/skb.jpg" style={{ maxWidth: '1300px' }} alt="" />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="skb" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                                <div class="modal-header border-0">
                                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="container py-5">
                                    <div class="row g-5">
                                        <div class="col-12" p-5>
                                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                                <img class="w-100" src="assets/img/skb.jpg" style={{ maxWidth: '1300px' }} alt="" />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="petasitus" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                                <div class="modal-header border-0">
                                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="container py-5">
                                    <div class="row g-5">
                                        <div class="col-12" p-5>
                                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                                <img class="w-100" src="assets/img/skb.jpg" style={{ maxWidth: '1300px' }} alt="" />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="disclaimer" tabindex="-1">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content" style={{ background: '#EEF9FF' }}>
                                <div class="modal-header border-0">
                                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="container py-5">
                                    <div class="row g-5">
                                        <div class="col-12" p-5>
                                            <div class="text-center position-relative pb-3 mb-5 mx-auto">
                                                <img class="w-100" src="assets/img/disclaimer.jpg" style={{ maxWidth: '650px' }} alt="" />
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

export default Footer;
