import {Splide, SplideSlide} from "@splidejs/react-splide";

const Vendor = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col">
                    <div className="owl-carousel vendor-carousel">
                        <Splide options={{
                            perPage: 5,
                            pagination: true,
                            type   : 'loop',
                            rewind: false
                        }}>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-1.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-2.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-3.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-4.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-5.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-6.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-7.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="vendor-item border p-4">
                                    <img src={require('../../img/vendor-8.jpg')} alt=""/>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendor;