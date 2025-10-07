import { Button } from "../Button/Button"
import { ServiceIcon } from "./ServiceIcon"

import MapIcon from "../../assets/map-icon.svg"
import MegaphoneIcon from "../../assets/megaphone-icon.svg"
import ShieldIcon from "../../assets/shield-icon.svg"
import RadarIcon from "../../assets/radar-icon.svg"

const icons = [MapIcon, MegaphoneIcon, ShieldIcon, RadarIcon];

export const Service = () => {
    return (
        <section id="service" className="bg-secondary-light py-20">
            <div className="container-section font-lora grid grid-rows-custom md:grid-rows-1 
                grid-cols-1 md:grid-cols-2 gap-14 md:gap-0">
                <div className="px-0 lg:px-16 flex flex-col justify-center items-center
                    md:items-start text-center md:text-start gap-10">
                    <h1 className="text-black leading-normal md:leading-normal tracking-wide text-4xl md:text-5xl">
                        PeaceApp gives you the tools you need for a <span className="text-dark-blue font-semibold">secure</span> and <span className="text-dark-blue font-semibold">confident journey</span>
                    </h1>
                    <a href="#testimonials"><Button name="Know More" /></a>
                </div>
                <div className="grid grid-rows-auto grid-cols-2 
                    place-items-center gap-5 md:gap-10 p-0 md:p-10">
                    {
                        icons.map((icon, index) => 
                            <ServiceIcon
                                key={ index }
                                icon={ icon }
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}