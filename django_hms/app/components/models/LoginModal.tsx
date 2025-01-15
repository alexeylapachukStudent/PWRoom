'use client';

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();
    
    const content = () => (
        <>
            <form className="space-y-8">
                <input type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder="Your email address"></input>
                <input type="password" className="w-full h-[54px] px-4 mb-8 border border-gray-100 rounded-xl" placeholder="Your password"></input>
                <div className="cursor-pointer p-5 bg-PWRoom text-white rounded-xl opacity-80 mb-6">
                    The error
                </div>
            </form>
            <CustomButton
                label="Log In"
                onClick={() => {
                    console.log('Log In Button Clicked')
                }}
            />
        </>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log In"
            content={content()}
        />
    )   
}

export default LoginModal;