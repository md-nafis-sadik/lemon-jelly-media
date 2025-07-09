import { useState } from "react";

const CustomButton = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="relative">
            <div className={`relative group cursor-pointer transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="169" height="58" viewBox="0 0 169 58" fill="none">
  <path d="M168 17L152 1H1V41L17 57H168V17Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
</svg>
                <div className="absolute left-10 top-4 text-white font-medium">Contact Us</div>
                
            </div>

            <div className={` absolute group cursor-pointer transition-opacity duration-500 top-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="169" height="58" viewBox="0 0 169 58" fill="none">
  <path d="M168 17L152 1H1V41L17 57H168V17Z" fill="white" fillOpacity="1" stroke="white" strokeWidth="1.5"/>
</svg>
                <div className="absolute left-10 top-4 text-black font-medium">Contact Us</div>
                
            </div>

        </div>

    );
};

export default CustomButton;
