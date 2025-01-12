const SearchFilters = () => {
    return (
        <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div key="check-in" className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm font-semibold">Add dates</p>
                    </div>

                    <div key="find" className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Find</p>
                        <p className="text-sm font-semibold">Reserve dates</p>
                    </div>

                    <div key="check-out" className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm font-semibold">Wanted location</p>
                    </div>  

                    <div key="who" className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm font-semibold">Add guests</p>
                    </div>
                    
                </div>                
            </div>
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-PWRoom rounded-full text-white hover:bg-PWRoomDark">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 64 64">
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M41.713,26.5c-2.627-1.598-4.409-0.986-5.414-0.24c-0.7,0.519-1.644,0.551-2.331,0.015l-0.127-0.099	c-0.903-0.706-0.968-2.053-0.14-2.846c2.255-2.16,5.013-1.928,6.76-1.443c1.158,0.321,2.366-0.31,2.815-1.425v0	c0.408-0.95-0.048-2.063-1.018-2.423c-2.635-0.978-7.807-2.059-12.043,2.177c-5.958,5.958-3.024,13.585-0.542,16.88	c2.441,3.24,10.787,9.614,19.724,2.212c10.028-8.306,4.513-18.686,1.083-22.116c-3.114-3.114-14.127-9.794-23.921,0	c-8.076,8.076-3.669,17.888-1.356,21.793C19.744,41.79,6.219,52.155,10.461,56.398s17.271-14.563,17.271-14.563	s4.875,4.333,9.207,4.243"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;