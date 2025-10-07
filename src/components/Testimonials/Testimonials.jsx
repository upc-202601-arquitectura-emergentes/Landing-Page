import Slider from 'react-slick';

import { TestimonialCard } from './TestimonialCard';

// importamos data que es un array de objetos con la info de cada testimonios 
import { cards } from '../../data/testimonials-data';

import './Testimonials.css';

export const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section id="testimonials" className="py-20 bg-secondary-light">
            <div className="container-section flex flex-col items-center gap-10 text-center">
                <h1 className="font-lora font-medium text-4xl md:text-5xl text-black">
                What Do They Say About Us?
                </h1>
                <p className="font-poppins text-xl leading-relaxed mb-5">
                Discover what our values partners, clients, and supporters have to
                <br />
                say about their experiences with PeaceApp
                </p>
                <iframe
                src="https://player.vimeo.com/video/1031246291?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Validation interviews Summary"
                allowFullScreen
                className="w-full h-96"
                ></iframe>
            </div>
        </section>

    )
}