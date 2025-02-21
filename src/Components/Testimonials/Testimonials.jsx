import React from 'react';
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Emily",
        text: "This workshop was amazing and helped me grow!",
        img: "https://picsum.photos/101/102",
    },
    {
        id: 3,
        name: "Sophia",
        text: "A great experience with top-notch speakers and experts!",
        img: "https://picsum.photos/101/103",
    },
    {
        id: 4,
        name: "Daniel",
        text: "Absolutely loved the session! Learned so much.",
        img: "https://picsum.photos/101/104",
    },
    {
        id: 5,
        name: "James",
        text: "Highly recommend to anyone looking to improve skills.",
        img: "https://picsum.photos/101/105",
    },
    {
        id: 6,
        name: "Olivia",
        text: "Engaging and informative. Worth every minute!",
        img: "https://picsum.photos/101/106",
    }
];

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Increased readability
        cssEase: "linear",
        pauseOnHover: true, // Corrected
        pauseOnFocus: true, // Corrected
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3, // Fixed typo
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Fixed typo
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1, // Adjusted for better mobile UX
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-orange'>
                        What Our Participants Say
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Hear from those who have attended our sessions.
                    </p>
                </div>

                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10'>
                                    <div className='mb-4 flex justify-center'>
                                        <img 
                                            src={data.img} 
                                            alt={data.name} 
                                            className='rounded-full w-20 h-20'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3 text-center'>
                                            <p className='text-xs text-gray-500'>
                                                "{data.text}"
                                            </p> 
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>  
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
