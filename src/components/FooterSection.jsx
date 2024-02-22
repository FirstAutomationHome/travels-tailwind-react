function FooterSection() {
    return(
        <footer className='w-full h-auto bg-gray-50 p-6 space-y-2 pb-16 dark:bg-gray-900' id='about-us'>
                <p className='text-sm text-gray-500 dark:text-white'>Investors</p>
                <p className='text-lg text-primary font-semibold dark:text-white'>About us</p>
                <p className='text-sm text-gray-500 dark:text-white'>Jobs</p>
                <p className='text-sm text-gray-500 dark:text-white'>Privacy Policy</p>
                <p className='text-sm text-gray-500 dark:text-white'>Terms and conditions</p>
                <p className='text-sm text-gray-500 dark:text-white'>Platzi Travel, inc</p>
                <p className='text-sm text-gray-500 dark:text-white'>Follow us</p>
                <div className='flex w-full h-full'>
                    <img className='opacity-80' src="./svg/icons8-instagram.svg" alt="icon-instagram" />
                    <img className='opacity-80' src="./svg/icons8-facebook-nuevo.svg" alt="icon-facebook" />
                </div>
        </footer>
    )
}
export default FooterSection