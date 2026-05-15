import Slider from 'react-slick';
import { TestimonialCard } from './TestimonialCard';
import { cards } from '../../data/testimonials-data';
import './Testimonials.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", right: "-50px" }}
            onClick={onClick}
        >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", left: "-80px", zIndex: 1 }}
            onClick={onClick}
        >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section id="testimonials" className="py-24 bg-[#e2eaf3]">
            <div className="container-section flex flex-col gap-16">
                <div className="flex flex-col gap-6 text-start px-4 md:px-10">
                    <h1 className="font-lora font-medium text-5xl md:text-6xl text-black">
                        What Do They Say About Us?
                    </h1>
                    <p className="font-poppins text-xl md:text-2xl text-slate-700 max-w-3xl leading-relaxed">
                        Discover what our valued users, and supporters have to say about their experiences with PocketGuardians
                    </p>
                </div>
                
                <div className="px-10 md:px-20">
                    <Slider {...settings}>
                        {
                            cards.map((card, index) => (
                                <div key={index} className="px-4">
                                    <TestimonialCard 
                                        name={card.name}
                                        review={card.review}
                                        position={card.position}
                                        profile={card.profile}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}