import { React,useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/free-mode";

import '../../css/doctors.css'

import DoctorImg from '/img/doctor.png?url'
import DoctorBichkovskay from '/img/doctors/bichkovskay.png?url'
import DoctorGerman from '/img/doctors/germanylyapetrovna.png?url'
import DoctorMonKiril from '/img/doctors/monastirlokirilkonstantinovich.png?url'
import DoctorMonOksana from '/img/doctors/monastirlooksanaaleksandrovna.png?url'
import DoctorVeycman from '/img/doctors/veycman.png?url'



import MonKirAbout from '../../about-doctor/monastirlokiril'
import MonOksAbout from '../../about-doctor/monastiroksana'
import GerYliAbout from '../../about-doctor/germanylia'
import BichValAbout from '../../about-doctor/bichvalerya'
import VeycLydmAbout from '../../about-doctor/veycmanlydmila'

import SliderDoctorCard from './slider-doctor-card'


export const SliderDoctor = () => {

    const [isDoctorAbout, setDoctorAbout] = useState(false);
    const [isDoctorAboutShowOne, setDoctorAboutShowOne] = useState("AllWindowDoctorAbout disable");
    const [isDoctorAboutShowSec, setDoctorAboutShowSec] = useState("AllWindowDoctorAbout disable");
    const [isDoctorAboutShowThr, setDoctorAboutShowThr] = useState("AllWindowDoctorAbout disable");
    const [isDoctorAboutShowTho, setDoctorAboutShowTho] = useState("AllWindowDoctorAbout disable");
    const [isDoctorAboutShowFifth, setDoctorAboutShowFifth] = useState("AllWindowDoctorAbout disable");


    const doctorsAboutFunctionOne = () => {
        if(isDoctorAbout){
            setDoctorAbout(false);
            setDoctorAboutShowOne("AllWindowDoctorAbout disable")
            document.querySelector('html').style.overflowY = 'auto';
        }
        else {
            setDoctorAbout(true);
            setDoctorAboutShowOne("AllWindowDoctorAbout enable")
            document.querySelector('html').style.overflowY = 'hidden';
        }
    }
    const doctorsAboutFunctionSec = () => {
        if(isDoctorAbout){
            setDoctorAbout(false);
            setDoctorAboutShowSec("AllWindowDoctorAbout disable")
            document.querySelector('html').style.overflowY = 'auto';
        }
        else {
            setDoctorAbout(true);
            setDoctorAboutShowSec("AllWindowDoctorAbout enable")
            document.querySelector('html').style.overflowY = 'hidden';
        }
    }
    const doctorsAboutFunctionThr = () => {
        if(isDoctorAbout){
            setDoctorAbout(false);
            setDoctorAboutShowThr("AllWindowDoctorAbout disable")
            document.querySelector('html').style.overflowY = 'auto';
        }
        else {
            setDoctorAbout(true);
            setDoctorAboutShowThr("AllWindowDoctorAbout enable")
            document.querySelector('html').style.overflowY = 'hidden';
        }
    }
    const doctorsAboutFunctionTho = () => {
        if(isDoctorAbout){
            setDoctorAbout(false);
            setDoctorAboutShowTho("AllWindowDoctorAbout disable")
            document.querySelector('html').style.overflowY = 'auto';
        }
        else {
            setDoctorAbout(true);
            setDoctorAboutShowTho("AllWindowDoctorAbout enable")
            document.querySelector('html').style.overflowY = 'hidden';
        }
    }
    const doctorsAboutFunctionFifth = () => {
        if(isDoctorAbout){
            setDoctorAbout(false);
            setDoctorAboutShowFifth("AllWindowDoctorAbout disable")
            document.querySelector('html').style.overflowY = 'auto';
        }
        else {
            setDoctorAbout(true);
            setDoctorAboutShowFifth("AllWindowDoctorAbout enable")
            document.querySelector('html').style.overflowY = 'hidden';
        }
    }
    return (
        <>
        <Swiper
        modules={[FreeMode]}
        slidesPerView={4}
        className='AllSwiper'
        freeMode={true}
        direction='horizontal'
        loop={true}
        observeParents={true}
        observer={true}
        >
            <SwiperSlide>
                <a onClick={doctorsAboutFunctionOne}>
                    <SliderDoctorCard data={{imgSrc: DoctorMonKiril, name: 'Монастырло Кирилл', job: 'стоматолог - имплатолог'}} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a onClick={doctorsAboutFunctionSec}>
                    <SliderDoctorCard data={{imgSrc: DoctorMonOksana, name: 'Монастырло Оксана', job: 'стоматолог - ортопед'}} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a onClick={doctorsAboutFunctionThr}>
                    <SliderDoctorCard data={{imgSrc: DoctorGerman, name: 'Герман Юлия', job: 'стоматолог - ортодонт'}} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a onClick={doctorsAboutFunctionTho}>
                    <SliderDoctorCard data={{imgSrc: DoctorBichkovskay, name: 'Бычковская Валентина', job: 'главный врач'}} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a onClick={doctorsAboutFunctionFifth}>
                <SliderDoctorCard data={{imgSrc: DoctorVeycman, name: 'Вейцман Людмила', job: 'главный врач'}} />
                </a>
            </SwiperSlide>
        </Swiper>

        <section id='MonKir' className={isDoctorAboutShowOne}>
        <span onClick={doctorsAboutFunctionOne} className='gotoBack'>
            <svg width="28.000000" height="21.000000" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="Форма 7" d="M10.75 1L2 10L10.75 19M2 10L28 " stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000"/>
            </svg>
            назад
        </span>
        <MonKirAbout />
        </section>

        <section id='MonKir' className={isDoctorAboutShowSec}>
        <span onClick={doctorsAboutFunctionSec} className='gotoBack'>
            <svg width="28.000000" height="21.000000" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="Форма 7" d="M10.75 1L2 10L10.75 19M2 10L28 " stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000"/>
            </svg>
            назад
        </span>
        <MonOksAbout />
        </section>

        <section id='GerYli' className={isDoctorAboutShowThr}>
        <span onClick={doctorsAboutFunctionThr} className='gotoBack'>
            <svg width="28.000000" height="21.000000" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="Форма 7" d="M10.75 1L2 10L10.75 19M2 10L28 " stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000"/>
            </svg>
            назад
        </span>
        <GerYliAbout />
        </section>

        <section id='BichVal' className={isDoctorAboutShowTho}>
        <span onClick={doctorsAboutFunctionTho} className='gotoBack'>
            <svg width="28.000000" height="21.000000" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="Форма 7" d="M10.75 1L2 10L10.75 19M2 10L28 " stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000"/>
            </svg>
            назад
        </span>
        <BichValAbout />
        </section>

        <section id='VeycLydm' className={isDoctorAboutShowFifth}>
        <span onClick={doctorsAboutFunctionFifth} className='gotoBack'>
            <svg width="28.000000" height="21.000000" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="Форма 7" d="M10.75 1L2 10L10.75 19M2 10L28 " stroke="#000000" stroke-opacity="1.000000" stroke-width="3.000000"/>
            </svg>
            назад
        </span>
        <VeycLydmAbout />
        </section>
        </>
    )
}
export default SliderDoctor