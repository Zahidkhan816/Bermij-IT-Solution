import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import Restuarentimage from '../imags/Restuarent.jpg'
import Eccomerce from '../imags/Eccomerce.jpg'
import onlineSHoping from '../imags/onlineSHoping.jpg'
import Salepurchase from '../imags/Salepurchase.jpg'
import ShowRoom from '../imags/ShowRoom.jpg'
let data = [
  {
    img: [Restuarentimage],
    disc: "Restaurant: A project exploring innovative culinary experiences.",
    src: "https://www.youtube.com/watch?v=aNQEF9qkpfM&t=15s"
  },
  {
    img: [ShowRoom],
    disc: "Showroom: A showcase of luxury automobiles and accessories.",
    src: "https://www.youtube.com/watch?v=WJNzGoeQ5YA&t=16s"
  },
  {
    img: [Salepurchase],
    disc: "Sale Purchase: Encapsulates the essence of facilitating transactions in digital marketplaces",
    src: "https://www.youtube.com/watch?v=aNQEF9qkpfM&t=15s"
  },
  {
    img: [onlineSHoping],
    disc: "Online Shopping: Exploring the convenience and challenges of e-commerce.",
    src: "https://www.youtube.com/watch?v=o-7zhSaHT0E"
  },
  {
    img: [Eccomerce],
    disc: "E-commerce: Investigating strategies for successful online business operations.",
    src: "https://www.youtube.com/watch?v=6pPBwYE69rg"
  }
];


var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`