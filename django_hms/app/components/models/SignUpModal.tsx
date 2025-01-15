'use client';

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal();
    
    const content = () => (
        <>
            <form className="space-y-8">
                <input type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" placeholder="Your email address" />
                
                <input type="password" className="w-full h-[54px] px-4 mb-8 border border-gray-100 rounded-xl" placeholder="Your password" />

                <input type="password" className="w-full h-[54px] px-4 mb-8 border border-gray-100 rounded-xl" placeholder="Repeat password" />
                
                <div className="cursor-pointer p-5 bg-PWRoom text-white rounded-xl opacity-80">
                    The error
                
                </div>
            </form>
            <CustomButton
                label="Sign Up"
                onClick={() => {
                    console.log('Sign Up Button Clicked')
                }}
            />
        </>
    );

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign Up"
            content={content()}
        />
    )   
}

export default SignupModal;