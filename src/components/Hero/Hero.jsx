import { Button } from "../Button/Button";
import './Hero.css';

export const Hero = () => {
    return (
        <section id="hero" className="w-full bg-slate-300">
            <div className="py-44 sm:py-[230px] container-section font-poppins">
                <div className="relative z-30 flex flex-col items-center justify-center text-center gap-8">
                    <h1 className="text-white sm:text-6xl text-4xl font-poppins font-semibold tracking-wide drop-shadow">
                        PeaceApp
                    </h1>
                    <p className="text-slate-100 font-thin tracking-wide sm:text-3xl text-2xl leading-loose drop-shadow">
                    “Your Safety, Our Priority: Building a Better, Safer <br />Future for Every Citizen"
                    </p>
                    <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 mt-4 text-2xl">
                        <a href="#about_us"><Button name="Our Team" /></a>
                        <a href="#service"><Button name="Know More" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
