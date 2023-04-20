'use client';

import { Carousel } from 'react-carousel-minimal';

import React from 'react';

function CarouselBar() {
 const data = [
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipPLyL1pysuP9sEMBiuBrw45GjvBsAktO6bZewNN=s1360-w1360-h1020",
      caption: "Pentagon"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipPOeFSspxCYLDCPQcXD9w0h8ogMzV8qBFxsIv7e=s1360-w1360-h1020",
      caption: "Sky Beach"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipO5eH3y1a3dorI6dR93ebw3j0m1eR4Jp8k5hDxc=s1360-w1360-h1020",
      caption: "UP&UP"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipPQI0WwTF0HH5JwF96M2_qwKTHFUS0AHDOuwwz8=s1360-w1360-h1020",
      caption: "SKYLOFT"
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipOJP6uHqD2wBX1JT4HVGI3zpTXrUjxgeKmP3rz8=s1360-w1360-h1020",
      caption: "Once Upon A Terrace - OUT"
   },
   {
    image: "https://lh3.googleusercontent.com/p/AF1QipPLyL1pysuP9sEMBiuBrw45GjvBsAktO6bZewNN=s1360-w1360-h1020",
    caption: "Pentagon"
  },
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipPOeFSspxCYLDCPQcXD9w0h8ogMzV8qBFxsIv7e=s1360-w1360-h1020",
    caption: "Sky Beach"
  },
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipO5eH3y1a3dorI6dR93ebw3j0m1eR4Jp8k5hDxc=s1360-w1360-h1020",
    caption: "UP&UP"
  }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Carousel mt-24">
      <div style={{ textAlign: "center" }}>
        <h2 className='text-white text-3xl'>Places where we have Performed!</h2>
        <div style={{
          padding: "0 20px"
        }}>
                  <Carousel
                      
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
                      style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselBar;