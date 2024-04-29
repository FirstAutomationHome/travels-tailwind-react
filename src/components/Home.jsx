function Home () {
    return(
        <div className="w-full h-3/4 md:h-auto lg:h-3/4" id='home'>
                <div id="clave" className="w-full h-full">
                    <div className='flex flex-col absolute w-full h-full space-y-96 py-3 items-center md:space-y-96 md:py-3 md:items-center lg:space-y-2 lg:items-start lg:pt-28 lg:justify-start '>
                        <input className='outline-none p-3 rounded-full shadow-lg transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-7/12 lg:hidden' type='search' placeholder=" San Francisco" />
                        <div className='hidden h-auto lg:w-2/4 lg:flex lg:pb-4'>
                            <p className='text-4xl ml-16 font-bold text-black'>Find more locations like this</p>
                        </div>
                        <button className='bg-white text-lg font-semibold p-3 w-48 h-20 rounded-full text-primary shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16 lg:h-14'>
                            Explore More
                        </button>
                    </div>
                    <div className='w-full h-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center'>
                        <img className='md:h-[40rem] md:w-full lg:hidden' src='./img/sanFrancisco.jpg' alt='San Francisco'/>
                    </div>
                    
                </div>
        </div>
    )
}
export default Home