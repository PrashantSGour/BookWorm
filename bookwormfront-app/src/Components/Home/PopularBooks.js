import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 480px) {
    flex-direction: column; /* Stack items vertically on mobile */
    align-items: center;
    gap: 15px;
  }
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 480px) {
    flex: 1 1 auto;
    width: 90%;
    max-width: 350px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.4;
`;

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data); // Debug API response
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (products.length > 2) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [products.length]);

  return (
    <CarouselContainer>
      <CarouselWrapper>
      <CarouselTrack
  animate={{ x: `-${index * 33.33}%` }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
{products.map((product, index) => (
  <Card key={product.id || index}>  {/* Fallback to index if id is missing */}
    <Title>{product.title}</Title>
    <Description>{product.description}</Description>
  </Card>
))}
</CarouselTrack>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;