import React, { Component, Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../images/hotcho.png'
import { addItem } from "./add";

function giveItemId() {
    let all = document.querySelectorAll('.swiper-wrapper .item');
    all.forEach((e, i) => { e.id = `hc${i + 1}` })
}
class HotChocolate extends Component {
    componentDidMount() {
        giveItemId()
    }
    render() {
        return (
            <Fragment>
                <header>Hot Chocolate</header>
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
                                <span>Hot Cohoclate</span>
                                <div className="info">
                                    <span>17</span>
                                    <i className="fa-regular fa-cup-togo" onClick={addItem}></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={img} alt=''></img>
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
                        <div className="item">
                            <img src={img} alt=''></img>
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
                        <div className="item">
                            <img src={img} alt=''></img>
                            <div className="details">
                                <span>Hot Cohoclate</span>
                                <div className="info">
                                    <span>17</span>
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

export default HotChocolate

