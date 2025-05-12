export default function AboutUs (){
    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex justify-center items-center">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-[50%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-[56px] font-bold leading-tight text-[#101828]">
                            About Us
                        </h1>
                        <p className="text-[18px] text-[#475467] max-w-[520px]">
                            We are a team of passionate individuals dedicated to making a difference in the world. Our mission is to provide a platform that connects donors with causes they care about, making the donation process seamless and impactful.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img src="/images/about-us.png" alt="About Us" className="w-full max-w-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}