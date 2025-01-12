import Image from 'next/image';

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    src="/beach_1.jpg"
                    alt="beach_house"
                    width={768}
                    height={768}
                    sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                />
            </div>

            <div className='mt-2'>
                <p className='text-lg font-bold'>Beach House</p>
            </div>

            <div className='mt-2'>
                <p className='text-sm text-gray-500'><strong>200$ per night</strong></p>
            </div>

        </div>
    );
};

export default PropertyListItem;