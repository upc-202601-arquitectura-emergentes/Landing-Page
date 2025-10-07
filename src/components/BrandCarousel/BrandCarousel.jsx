import milwaukeeLogo from '../../assets/milwaukee-logo.svg';
import compassLogo from '../../assets/compass-logo.svg';
import girlsLogo from '../../assets/girls-logo.svg';
import pacificLogo from '../../assets/pacific-logo.svg';
import unitedLogo from '../../assets/united-logo.svg';

import { BrandLogo } from './BrandLogo';

import './BrandCarousel.css';

const logos = [milwaukeeLogo, compassLogo, unitedLogo, girlsLogo, pacificLogo];


export const BrandCarousel = () => {

  return (
    <section id="brands-carousel" className="bg-white py-20">
      <div className="container-section text-center font-lora">
        <p className='text-2xl font-medium leading-normal'>Many organizations <span className='text-secondary-dark font-bold'>trust </span>
          us when it comes to<br />making daily commuting a <span className='text-secondary-dark font-bold'>safer </span>experience</p>
        <div className="scroller w-full mt-10">
          <ul className='scroller__inner to-left w-full flex flex-row justify-between items-center whitespace-nowrap gap-20'>
            {
              [...logos, ...logos].map((logo, index) =>
                <BrandLogo
                  key={index}
                  logo={logo}
                />
              )
            }
          </ul>
        </div>
        <div className="scroller w-full mb-10">
          <ul className='scroller__inner to-right w-full flex flex-row justify-between items-center whitespace-nowrap gap-20'>
            {
              [...logos, ...logos].map((logo, index) =>
                <BrandLogo
                  key={index}
                  logo={logo}
                />
              )
            }
          </ul>
        </div>
        <p className='text-2xl font-medium leading-normal'>Join them and make every journey<br/> worry-free with <span className='text-secondary-dark font-bold'>PeaceApp</span></p>
      </div>
    </section>
  )
}