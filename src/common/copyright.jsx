import { Component } from "react";

export class Copyright extends Component {
    render(){
        return(
            <>
                <div class="container-fluid text-white" style={{ background: '#061429' }}>
                    <div class="container text-center">
                        <div class="row justify-content-end">
                            <div class="col-lg-8 col-md-6">
                                <div class="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                                    <p class="mb-0"><i>Kantor Pengawasan dan Pelayanan Bea dan Cukai Tipe Madya Pabean B Samarinda - 2024</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Copyright;