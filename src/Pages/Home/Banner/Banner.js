import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [banners,setBanners] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:7000/banners')
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
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height:"670px"}}
                className="d-block w-100"
                src={banners[1]?.bannerImg}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:"670px"}}
                className="d-block w-100"
                src={banners[2]?.bannerImg}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;