import React from 'react'
import Slider from "react-slick";
import '../../CSS/Advertisement.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advertisement = ({ adsList }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <Slider {...settings}>
                {adsList?.map((ads) => (
                    <a className='ads' href={ads.type !== "4" ? "https://hust-e-shopper.up.railway.app/product-detail/" + ads.adsData[0].product_id : ""}>
                        <img className="img-fluid" src={ads.image} />
                        <p className='ads-name'>{ads.name}</p>
                        {console.log(ads.type !== "4" ? ads.adsData[0].product_id : "")}
                    </a>
                ))}
            </Slider>
        </>
    )
}

export default Advertisement;