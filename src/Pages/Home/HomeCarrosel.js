import React from 'react';
import adrita from '../../asset/img/lec_Adrita-lab.jpg'
import fahim from '../../asset/img/lec_ayon_lab.jpg'
import wrizu from '../../asset/img/wriju_lab.jpg'
import towhid from '../../asset/img/lec_towhid_lab.jpg'
import './Home.css'


const HomeCarrosel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full opacity-75">
                <img src={adrita} alt="" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full opacity-75">
                <img src={fahim} alt="" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full opacity-75">
                <img src={wrizu} alt="" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full opacity-75">
                <img src={towhid} alt="" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HomeCarrosel;