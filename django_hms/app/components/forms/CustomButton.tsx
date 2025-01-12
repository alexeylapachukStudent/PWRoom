import React from 'react';

interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps>  = ({
    label,
    className,
    onClick
}) => {
    return (
       <div 
            onClick={onClick}
            className={`w-full py-4 bg-PWRoom hover:bg-PWRoomDark text-white rounded-xl transition text-center cursor-pointer ${className}`}
       >
            {label}
       </div>
    );
};

export default CustomButton;