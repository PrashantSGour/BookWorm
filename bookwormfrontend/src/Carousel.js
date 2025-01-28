import React from 'react';
import { Carousel } from 'antd';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const ResponsiveCarousel = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div style={{ marginTop: '20px', padding: '10px' }}>
      <Carousel autoplay autoplaySpeed={2000}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                margin: '10px auto',
                maxWidth: '90%',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                background: '#fff',
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
