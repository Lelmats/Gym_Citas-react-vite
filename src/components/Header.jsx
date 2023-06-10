export default function Header() {

    return(
        <h1 className="text-5xl text-white font-black text-center mx-auto md:w-2/3">
            Bienvenido{" "} 
            <span className="align-middle text-green-400"> GYM-RAT </span> 
            <img src="public\gym_logo.svg" alt="gymlogo" className="invert lg:h-20 h-40 inline fill-lime-500"/>
            
        </h1>
    )
}
