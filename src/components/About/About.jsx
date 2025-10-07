import Slider from 'react-slick';
import ArrowIcon from "../../assets/arrow-icon.svg";
import {images} from '../../data/about-images';
import { AboutCard } from './AboutCard';
export const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        scroll: false,
        fade: true,
        
    };
    return (
        <section id="about_us" className=" py-20">
            <div className="px-0 lg:px-16 container-section grid grid-rows-custom 
                md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
                <div className='flex flex-col text-center md:text-start items-center md:items-start justify-center gap-10'>
                    <h1 className='text-slate-900 sm:text-5xl text-3xl font-bold font-lora tracking-normal'>What do we do?</h1>
                    <p className='sm:text-xl text-1xl text-balance tracking-wide font-poppins leading-8'>At PeaceApp, we are a passionate team of 
                        developers and dedicated to creating a<br/>safer Peru. Join us in building a safer future,<br/>one step at a time.</p>
                    <div className='flex flex-row gap-3items-center justify-center'>
                        <a
                            style={{ position: "relative" }}
                            href="/"
                            /* -underline effect- is a custom compoonent, go to index.css to see */
                            className="text-dark-blue font-medium font-poppins text-xl inline-flex items-center 
                            gap-4 underline-effect after:bg-dark-blue"
                        >
                            <img className="w-6 h-4" src={ArrowIcon} />
                            More information
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-6 relative'>
                    <Slider {...settings}>
                        {
                            images.map((image, index) =>
                                <AboutCard
                                    key={index}
                                    image={image.image}
                                />
                            )
                        }
                    </Slider>
                    
                </div>
            </div>
        </section>
    )
}
