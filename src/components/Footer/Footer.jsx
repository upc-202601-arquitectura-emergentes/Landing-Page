import Logo from '../../assets/big-logo-peaceapp_darkmode.svg';
import ubicationLogo from '../../assets/ubication-logo.svg';


export const Footer = () => {
    return (
        <section className="bg-footer py-20">
            <div className='mb-20 h-full flex justify-center items-center '>
                <img className='w-64' src={Logo} />
            </div>

            <div className="text-center text-white">
                <p>©{new Date().getFullYear()} PeaceAPP, All rights reserved.</p>
            </div>


        </section>
    )
}
