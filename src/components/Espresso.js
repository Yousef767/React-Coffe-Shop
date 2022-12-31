import React, { Component, Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../images/espresso.jpeg'
import { addItem } from "./add";

function giveItemId() {
    let all = document.querySelectorAll('.swiper-wrapper .item');
    all.forEach((e, i) => { e.id = `e${i + 1}` })
}
class Espresso extends Component {
    componentDidMount() {
        giveItemId()
    }
    render() {
        return (
            <Fragment>
                <header>Espresso</header>
                <Swiper
                    breakpoints={{
                        300: {
                            width: 300,
                            slidesPerView: 1.4,
                        },
                        500: {
                            width: 500,
                            slidesPerView: 2.25,
                        },
                        700: {
                            width: 700,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="item">
                            <img src={img} alt=''></img>
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
                        <div className="item">
                            <img src={img} alt=''></img>
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
                        <div className="item">
                            <img src={img} alt=''></img>
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
                        <div className="item">
                            <img src={img} alt=''></img>
                            <div className="details">
                                <span>Espresso</span>
                                <div className="info">
                                    <span>20</span>
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

export default Espresso

