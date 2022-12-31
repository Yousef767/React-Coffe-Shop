import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { Component } from 'react';
import HotCho from '../images/hotcho.png'
import IceTea from '../images/icetea.png'
import Brewed from '../images/brewed.jpeg'
import Espresso from '../images/espresso.jpeg'
import { NavLink } from 'react-router-dom';



class Slider extends Component{
    render() {
        return (
            <Swiper className='custom'
                breakpoints={{
                    300: {
                        width: 300,
                        slidesPerView: 2.5,
                    },
                    400: {
                        width: 400,
                        slidesPerView: 3,
                    },
                    500: {
                        width: 500,
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide className='slide'>
                    <NavLink activeclassname="active" to='/hotcho' > 
                        <img src={HotCho} alt=''></img>
                        <span>Hot Chocolate</span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <NavLink activeclassname="active" to='/icetea' >
                        <img src={IceTea} alt=''></img>
                        <span>Ice Tea</span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <NavLink activeclassname="active" to='/brewed' >
                        <img src={Brewed} alt=''></img>
                        <span>Brewed Coffe</span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <NavLink activeclassname="active" to='/espresso' >
                        <img src={Espresso} alt=''></img>
                        <span>Espresso</span>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        )
    }
}

export default Slider