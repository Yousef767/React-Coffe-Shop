import React, { Component, Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../images/espresso.jpeg'
import img2 from '../images/hotcho.png'
import img3 from '../images/icetea.png'
import { addItem } from "./add";


class Top extends Component {
    render() {
        return (
            <Fragment>
                <header>Top Items</header>
                <Swiper 
                    breakpoints={{
                        300: {
                            width: 300,
                            slidesPerView: 1.4,
                        },
                        500: {
                            width: 500,
                            slidesPerView: 2.1,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="item" id="hc1">
                            <img src={img2} alt=''></img>
                            <div className="details">
                                <span>Hot Cohoclate</span>
                                <div className="info">
                                    <span>17</span>
                                    <i className="fa-regular fa-cup-togo" onClick={addItem}></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item" id="e1">
                            <img src={img1} alt=''></img>
                            <div className="details">
                                <span>Espresso</span>
                                <div className="info">
                                    <span>20</span>
                                    <i className="fa-regular fa-cup-togo" onClick={addItem}></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item" id="it1">
                            <img src={img3} alt=''></img>
                            <div className="details">
                                <span>Ice Tea</span>
                                <div className="info">
                                    <span>10</span>
                                    <i className="fa-regular fa-cup-togo" onClick={addItem}></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Fragment>
        )
    }
}

export default Top

