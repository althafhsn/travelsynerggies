import React from 'react'

const page = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className='mx-auto text-center'>
                <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl text-orange-500 font-bold'>
                    Contact Us
                </h1>
            </div>
            <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" title="map"

                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Address</h2>
                            <p className="mt-1">Nassima Tower, Sheikh Zayed Road, Dubai, UAE</p>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Our Global Offices</h2>
                            <p className="mt-1">Oman / Sri Lanka / Malaysia / Qatar</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
                            <a className="text-orange-500 leading-relaxed cursor-pointer ">info@travelsynergies.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
                            <p className="leading-relaxed">+971 544552595</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4">
                    <h2 className="text-orange-500 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Feel free to share your feedback here! We truly value your input.
                    </p>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
                    
                </div>
            </div>
        </section>
    )
}

export default page
