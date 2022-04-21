import React, {useState, useEffect} from 'react'
import Link from 'next/link'

function WeatherBoxes(){

    const linkStyle = {
                            color:"#fff",
                            textDecoration:"none"
                      }

    return(
        <section id="w-b-s">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div style={{textAlign: "center",width:"100%"}} className="row">
                        <h2 style={{
                            textAlign: "center",
                            width:"100%",
                            marginBottom:"30px"}} className="city-choose">
                            Choose the city for current weather
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://mosqpedia.org/img/cache/largeimage/hkqaPdO0HuPiLzj7Cu4iQaoNhvzpNhd7Gzc2gbBp)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link style={linkStyle} href = "/islamabad">
                                            <a style={linkStyle}>Islamabad</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/d/d1/Jinnah_Mausoleum.JPG)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/karachi">
                                            <a style={linkStyle}>Karachi</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Khyber_pass.jpeg/220px-Khyber_pass.jpeg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/peshawar">
                                            <a style={linkStyle}>Peshawar</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://images.mapsofworld.com/allwonders/minar-e-pakistan.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/lahore">
                                            <a style={linkStyle}>Lahore</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://balochistan.gov.pk/wp-content/uploads/2019/05/explore-sample.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/quetta">
                                            <a style={linkStyle}>Quetta</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gilgit_City_a_View_from_Gilgit_serena_hotel.jpg/270px-Gilgit_City_a_View_from_Gilgit_serena_hotel.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/gilgit">
                                            <a style={linkStyle}>Gilgit</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tomb_of_Shah_Rukn-e-Alam_Multan.jpg/220px-Tomb_of_Shah_Rukn-e-Alam_Multan.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/multan">
                                            <a style={linkStyle}>Multan</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://1.bp.blogspot.com/-BGhe3DmFUnA/YQggTEZSqCI/AAAAAAAABsg/n66RkQzXeS4XQjj9g86Lflb_ZnBFITkcgCLcBGAsYHQ/s2000/Faisalabad.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/faisalabad">
                                            <a style={linkStyle}>Faisalabad</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rohri.jpg/270px-Rohri.jpg)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link href = "/sukkur">
                                            <a style={linkStyle}>Sukkur</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div style={
                                {
                                    backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jhelum_River_Bridge.JPG/220px-Jhelum_River_Bridge.JPG)",
                                    backgroundSize:"cover"
                                }
                                    } className="w-box">
                                <div className="box-label">
                                    <h2>
                                        <Link  href = "/jhelum">
                                            <a style={linkStyle}>Jhelum</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {
                        `
                            Link{
                                color:"#fff",
                            textDecoration:"none"
                            }
                        `
                    }
                </style>
            </div>
        </section>
    )
}

export default WeatherBoxes