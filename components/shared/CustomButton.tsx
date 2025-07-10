import { useState } from "react";

const CustomButton = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="relative">
            <div className={`relative group cursor-pointer transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="169" height="58" viewBox="0 0 169 58" fill="none">
                        <path d="M168 17L152 1H1V41L17 57H168V17Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
                    </svg>

                </span>
                <span className="lg:hidden block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="34" viewBox="0 0 98 34" fill="none">
                        <path d="M96.6415 10.141L87.4986 0.998108H1.21289V23.8553L10.3557 32.9981H96.6415V10.141Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.857143" />
                    </svg>
                </span>
                <div className="absolute left-6 lg:left-10 top-[9px] lg:top-4 font-medium text-[10px] lg:text-base text-white">Contact Us</div>

            </div>

            <div className={` absolute group cursor-pointer transition-opacity duration-500 top-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <span className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="169" height="58" viewBox="0 0 169 58" fill="none">
                        <path d="M168 17L152 1H1V41L17 57H168V17Z" fill="white" fillOpacity="1" stroke="white" strokeWidth="1.5" />
                    </svg>
                </span>
                <span className="lg:hidden block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="34" viewBox="0 0 98 34" fill="none">
                        <path d="M96.6415 10.141L87.4986 0.998108H1.21289V23.8553L10.3557 32.9981H96.6415V10.141Z" fill="white" fillOpacity="1" stroke="white" strokeWidth="0.857143" />
                    </svg>
                </span>
                <div className="absolute left-6 lg:left-10 top-[9px] lg:top-4 text-[10px] lg:text-base text-black font-medium">Contact Us</div>

            </div>

        </div>

    );
};

export default CustomButton;
