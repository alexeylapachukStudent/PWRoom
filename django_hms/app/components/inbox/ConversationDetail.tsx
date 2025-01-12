'use client';


import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h[480px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>

                    <p>frfrfrfrfrfrfrfrfrfrfr</p>
                </div>


                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-PWRoomDark">
                    <p className="font-bold text-gray-500">Alex</p>

                    <p>frfrfrfrfrfrfrfrfrfrfr</p>
                </div>
            </div>
            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input type="text" placeholder="Type a message" className="w-full p-2 border border-gray-300 rounded-xl" />

                <CustomButton
                label='Send'
                onClick={() => console.log('Clicked')}
                className="w-[100px]" />
                
            </div>
        </>
    );
}

export default ConversationDetail;