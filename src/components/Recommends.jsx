function Recommends() {
    return(
        <div className='p-6' id='recommends'>
                <p className='text-3xl font-semibold text-primary'>Recommends</p>
                <div id="scroll-container" className='w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-hidden'>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-norway bg-cover'></div>
                        <div className='w-full h-2/5 bg-secundary rounded-b-lg py-3'>
                            <p className='text-white text-bold text-xl px-2'>Norway</p>
                            <p className='text-white text-lg px-2'>Beautiful Landscapes</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-new_york bg-cover'></div>
                        <div className='w-full h-2/5 bg-white rounded-b-lg py-3'>
                            <p className='text-terciary text-bold text-xl px-2'>New York</p>
                            <p className='text-terciary text-lg px-2'>Manhattan</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-yosemite bg-cover'></div>
                        <div className='w-full h-2/5 bg-secundary rounded-b-lg py-3'>
                            <p className='text-white text-bold text-xl px-2'>Yosemite</p>
                            <p className='text-white text-lg px-2'>A break from the world</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-seattle bg-cover'></div>
                        <div className='w-full h-2/5 bg-white rounded-b-lg py-3'>
                            <p className='text-terciary text-bold text-xl px-2'>Seattle</p>
                            <p className='text-terciary text-lg px-2'>Big City</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-switzerland bg-cover'></div>
                        <div className='w-full h-2/5 bg-secundary rounded-b-lg py-3'>
                            <p className='text-white text-bold text-xl px-2'>Switzerland</p>
                            <p className='text-white text-lg px-2'>The best chocolate of the world</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-sydney bg-cover bg-center'></div>
                        <div className='w-full h-2/5 bg-white rounded-b-lg py-3'>
                            <p className='text-terciary text-bold text-xl px-2'>Sydney</p>
                            <p className='text-terciary text-lg px-2'>Visit a great place</p>
                        </div>
                    </div>    
                    <div className='card'>
                        <div className='w-full h-3/5 rounded-t-lg bg-yosemite bg-cover bg-center'></div>
                        <div className='w-full h-2/5 bg-secundary rounded-b-lg py-3'>
                            <p className='text-white text-bold text-xl px-2'>Yosemite</p>
                            <p className='text-white text-lg px-2'>The life in the world</p>
                        </div>
                    </div>                
                </div>                
            </div>
    )
}
export default Recommends