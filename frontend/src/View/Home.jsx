import React, { Component } from 'react';
import '../CSS/style.css';
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>

                {/* START NAVBAR */}
                <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a href="/" className="nav-a">TRANG CHỦ</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-a">ĐĂNG NHẬP</a>
                                </li>
                                <li className="nav-item">
                                    <a to={'/register'} className="nav-a">ĐĂNG KÝ TÀI KHOẢN</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-a">LIÊN HỆ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* END NAVBAR */}
                {/* Home Section Start*/}
                <section className="bg_home_personal_img full_height_100vh_home" id="home">
                    <div className="bg_overlay_cover_on" />
                    <div className="home_table_cell">
                        <div className="home_table_cell_center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12">
                                        <div className=" mx-auto text-center home_text_personal">
                                            <h1 className="home_title  mt-4 font-weight-bold text-white mb-0"><span style={{ color: "red" }}>BẠN CÓ TÂM SỰ</span> HAY <br />BẠN KHÔNG VUI<br /><span className="simple-text-rotate font-weight-bold" style={{ color: "red" }}> HÃY ĐẾN VỚI CHÚNG TÔI! </span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Home Section End*/}
                {/* Contact Us Start */}
                <footer className="section_all bg-light" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text-center">
                                    <p className="mb-0">LIÊN HỆ</p>
                                    <h3 className="font-weight-bold text-capitalize mb-0">LIÊN HỆ</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <button type="button" className="btn btn_custom btn_round" data-toggle="modal" data-target="#exampleModalCenter">LIÊN HỆ VỚI CHÚNG TÔI</button>
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModalCenter">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title mb-0 font-weight-bold" id="exampleModalLongTitle"> LIÊN HỆ</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="custom_form_body">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="fname" placeholder="First Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="semail" placeholder="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="sbject" placeholder="Subject" />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <textarea name="comments" id="comments" rows={6} className="form-control" placeholder="Your message..." defaultValue={""} />
                                                        </div>
                                                        <div>
                                                            <button className="btn btn_custom w-50">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-12">
                                <div className="contact_social_icons text-center mt-3">
                                    <ul className="list-unstyled">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook" /></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter" /></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-google-plus" /></a></li>
                                    </ul>
                                    <p className="font-weight-bold mt-4">Số Điện Thoại: 032 660 9183</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        );
    }
}

export default HomePage;
