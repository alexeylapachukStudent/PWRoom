'use client';

import { useState, useEffect, useCallback } from "react";
import React from "react";


interface ModalProps {
    label: string;
    content: React.ReactElement;
    close: () => void;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close
}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleModalClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            close();
        }, 300);

    }, [close]);

    if (!isOpen) {
        return null;
    }

    return (
        <div key="modal-overlay" className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            
            <div key="modal-container" className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
                
                <div key="modal-content" className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
                    
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        
                        <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                            
                            <div 
                                onClick={handleModalClose}
                                className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                            >
                            
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            </div>


                            <h2 className="text-lg font-bold">{label}</h2>
                        </header>

                        <section className="p-6">
                            {content}
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;