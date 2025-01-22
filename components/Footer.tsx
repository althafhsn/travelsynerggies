

const Footer = () => {
    return (
        <div>

            <footer className=" font-sans ">

                <hr className=" border-orange-500 md:my-8 h-2" />
                <div className="container px-6 py-6 mx-auto">

                    <div className="flex flex-col md:flex-row items-center justify-between pb-12">
                        {/* Logo Section */}
                        <div className="flex flex-1 gap-4 hover:cursor-pointer pb-5">
                            <img src="/whitelogo.png" alt="Logo" className="w-48" />
                        </div>

                        {/* Social Media Icons Section */}
                        <div className="flex gap-4 hover:cursor-pointer sm:scale-75 sm:justify-end">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" />
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" width="30" height="30" alt="WhatsApp" />
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 gap-6 grid-cols-2 sm:gap-y-10 lg:grid-cols-4">


                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="font-semibold text-orange-500 dark:text-white">Register</p>

                                <div className="flex flex-col items-start mt-5 space-y-2">
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Login</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Registration</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">My Account</p>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold text-orange-500 dark:text-white">Company</p>

                                <div className="flex flex-col items-start mt-5 space-y-2">
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Careers</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Partners</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Company Profile</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Bucket List</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Trade Partners</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="font-semibold text-orange-500 dark:text-white"></p>

                                <div className="flex flex-col items-start mt-5 space-y-2">
                                    <a href="/blogs#terms-conditions">
                                        <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Why Choose Us</p>
                                    </a>
                                    <a href="/blogs#find-us">
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Whre To Find Us</p>
                                    </a>
                                    
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Sustainable Tourisum</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Blogs</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Trade Service</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-orange-500 dark:text-white"></p>

                                <div className="flex flex-col items-start mt-5 space-y-2">
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Special Offers</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Destinations</p>
                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">About Destinations</p>
                                    <a href="#outbound-holidays">

                                    <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">Posts</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-orange-500 xl:text-2xl">Subscribe our newsletter to get an update.</h1>

                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-orange-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-300" placeholder="Email Address" />

                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-orange-500 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-white/20 md:my-8 h-2" />


                    <p className="font-sans  text-start md:text-center md:text-lg md:p-4 ">© Travel Synergies 2023. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
