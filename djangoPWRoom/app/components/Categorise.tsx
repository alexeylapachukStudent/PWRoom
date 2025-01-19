import Image from 'next/image';

const Categories = () => {
    return (
        <div className="pt-9 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image src="/icn_category_beach.jpeg" 
                alt="category-beach"
                width={20} 
                height={20} />


            <span className="text-xs font-semibold">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image src="/icn_category_beach.jpeg" 
                alt="category-villa"
                width={20} 
                height={20} />


            <span className="text-xs font-semibold">Villas</span>
            </div>


            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image src="/icn_category_beach.jpeg" 
                alt="category-cabin"
                width={20} 
                height={20} />


            <span className="text-xs font-semibold">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image src="/icn_category_beach.jpeg" 
                alt="category-tiny"
                width={20} 
                height={20} />


            <span className="text-xs font-semibold">Tiny homes</span>
            </div>
        </div>
    );
};

export default Categories;