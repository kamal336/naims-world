import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [banners,setBanners] = useState([]);

    useEffect(()=>{
        fetch('https://desolate-reaches-24885.herokuapp.com/banners')
        .then(res=> res.json())
        .then(data=> setBanners(data))
    },[])

    return (
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{height:"670px"}}
                className="d-block w-100"
                src={banners[0]?.bannerImg}
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold">Naim's World Theme Park</h2>
                <h5 className="fw-bold">It's a amazing theme park in the world and very enjoyable day you can spend.</h5>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height:"670px"}}
                className="d-block w-100"
                src={banners[1]?.bannerImg}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold">Naim's World Theme Park</h2>
                <h5 className="fw-bold">It's a amazing theme park in the world and very enjoyable day you can spend.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:"670px"}}
                className="d-block w-100"
                src={banners[2]?.bannerImg}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className="fw-bold">Naim's World Theme Park</h2>
                <h5 className="fw-bold">It's a amazing theme park in the world and very enjoyable day you can spend.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;