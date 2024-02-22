function ImportantsRents() {
    return(
        <div className='px-5 h-[120rem] w-full md:px-5 md:h-[120rem] lg:h-full lg:mb-[40rem]' id='important-rents'>
                <p className='text-3xl text-primary font-semibold pb-4 mt-6'>Trending Stays</p>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='w-full h-[28rem] bg-chicago bg-cover rounded-xl lg:bg-center lg:h-96'>
                        <p className='cardTitle lg:text-black'>Chicago</p>
                        <p className='text-sm pl-8 text-black mr-24'>2 rooms, bathroom and kitchen</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:pt-3'>
                        <div className='w-full h-[28rem] bg-LA bg-cover rounded-xl lg:bg-center lg:h-full lg:col-span-1'>
                            <p className='cardTitle'>Los Angeles</p>
                            <p className='text-sm pl-8 text-white mr-24'>4 rooms, 3 bathrooms kitchen and private pool</p>
                        </div>
                        <div className='lg:col-span-1 flex flex-col gap-6'>
                            <div className='w-full h-[28rem] bg-miami bg-cover rounded-xl lg:h-96'>
                                <p className='cardTitle'>Miami</p>
                                <p className='text-sm pl-8 text-white mr-24'>3 rooms, 2 bathrooms kitchen and amazing sea view</p>
                            </div>
                            <div className='w-full h-[28rem] bg-bali bg-cover rounded-xl lg:bg-center lg:h-96'>
                                <p className='cardTitle'>Bali</p>
                                <p className='text-sm pl-8 text-white mr-24'>2 rooms, 2 bathrooms kitchen and private pool</p>
                            </div>
                        </div>                    
                    </div>
                </div>
        </div>
    )
}
export default ImportantsRents