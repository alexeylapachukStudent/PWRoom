import Image from 'next/image';
import ReservationSideBar from '@/app/components/properties/ReservationSideBar';

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="pt-10 w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={"/beach_1.jpg"}
                    alt="beach_house"
                    className='object-cover w-full h-full'
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div className="py-6 pr-6 col-span-3">
                   <h1 className="mb-4 text-4xl">Property name</h1>

                   <span className="mb-6 block text-lg text-gray-500">4 guests - 2 bedrooms - 1 bathroom</span>

                   <hr />

                   <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="username"
                        />


                        <p><strong>John do is your host</strong></p>
                    </div> 

                    <hr />
                    
                     <p className="mt-6 text-lg">Descriptionfrrfrfrfrfrfr fr fr fr fr frf rf</p>   
                    
                </div>

                <ReservationSideBar />
            </div>
        </main>
    );
};

export default PropertyDetailPage;