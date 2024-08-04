import { Component } from "react";

export class Pengaduan extends Component {
    render(){
        return(
            <>

<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-success text-uppercase">Layanan Pengaduan</h5>
                        <h1 class="mb-0">Butuh bantuan ? Silahkan adukan, kami siap membantu.</h1>
                    </div>
                    <div class="row gx-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 class="mb-4"><i class="fa fa-reply text-success me-3"></i>Balasan dalam waktu 24 jam</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-4"><i class="fa fa-phone-alt text-success me-3"></i>Dukungan layanan telepon 24 jam</h5>
                        </div>
                    </div>
                    <p class="mb-4">Mari bersama kita bangun lingkungan pelayanan yang berintegritas. Apabila anda mengalami permasalahan yang disebabkan oleh sikap dan perilaku pegawai bea dan cukai atau mengetahui pelanggaran yang dilakukan oleh pegawai bea dan cukai, silahkan sampaikan pengaduannya.</p>
                    <div class="row gx-0">
                        <div class="col-lg-2 wow zoomIn" data-wow-delay="0.5s">
                            <img  style={{ maxHeight: '90px' }} src="assets/img/lapor.jpg" alt="" />
                        </div>
                        <div class="col-lg-2 wow zoomIn" data-wow-delay="0.7s">
                            <img  style={{ maxHeight: '90px' }} src="assets/img/kpk.png" alt="" />
                        </div>
                        <div class="col-lg-2 wow zoomIn" data-wow-delay="0.9s">
                            <img  style={{ maxHeight: '90px' }} src="assets/img/wise.png" alt="" />
                        </div>
                        <div class="col-lg-2 wow zoomIn" data-wow-delay="1.1s">
                            <img  style={{ maxHeight: '90px' }} src="assets/img/sipuma.jpg" alt="" />
                        </div>
                        <div class="col-lg-2 wow zoomIn" data-wow-delay="1.3s">
                            <img  style={{ maxHeight: '90px' }} src="assets/img/laporbcs.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" style={{ minHeight: '550px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="1.5s" src="assets/img/gratifikasi.jpg" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>


            </>
        )
    }
}

export default Pengaduan;
