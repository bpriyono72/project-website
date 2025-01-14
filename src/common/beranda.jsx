import { Component } from "react";

export class Beranda extends Component {
    render(){
        return(
            <>

        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assets/img/carousel-1.jpg" alt="Image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-2.jpg" alt="Image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-3.jpg" alt="Image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-4.jpg" alt="Image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-5.jpg" alt="Image" />
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-6.jpg" alt="Image" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
            </>
        )
    }
}

export default Beranda;
