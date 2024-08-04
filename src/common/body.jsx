import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import Beranda from "./beranda";
import { Statistik } from "./statistik";
import { Profil } from "./profil";
import { Layanan } from "./layanan";
import { Berita } from "./berita";
import { Video } from "./video";
import { Pengaduan } from "./pengaduan";
import { Eselon1 } from "./eselon1";
import { Kunjungan } from "./kunjungan";
import { Footer } from "./footer";
import { Copyright } from "./copyright";

export class Body extends Component {
    render(){
        return(
            <Router>
                <>
                    <Topbar />        
                    <div class="container-fluid position-relative p-0">
                    <Navbar />        
                    <Beranda />        
                    </div>
                    <Statistik />        
                    <Profil />        
                    <Layanan />
                    <Berita />
                    <Video />
                    <Pengaduan />
                    <Eselon1 />                
                    <Kunjungan />
                    <Footer />                
                    <Copyright />                
                    <a href="#" class="btn btn-lg btn-success btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
                </>
            </Router>
        )
    }
}

export default Body;
