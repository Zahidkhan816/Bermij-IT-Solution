import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "User Requirements Model for VANET Applications",
    src: " https://www.youtube.com/watch?v=aNQEF9qkpfM&t=15s"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Classes of Attacks in VANET",
    src: "https://www.youtube.com/watch?v=WJNzGoeQ5YA&t=16s"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Forming vehicular web of trust in VANET ",
    src: " https://www.youtube.com/watch?v=aNQEF9qkpfM&t=15s"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "New card based scheme to ensure security and trust in vehicular communications ",
    src: "https://www.youtube.com/watch?v=o-7zhSaHT0E"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "VANET Security Research and Development Ecosystem",
    src: " https://www.youtube.com/watch?v=6pPBwYE69rg"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Trust Levels in Peer to Peer(P2P) in VANET",
    src: "  https://www.youtube.com/watch?v=XdBWXk6QjMY"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Behavior of Attacker and Some New Possible Attacks in Vehicular Communication",
    src: " https://www.youtube.com/watch?v=rerEsfVrdsE"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Timing Attack in Vehicular Network",
    src: "   https://www.youtube.com/watch?v=LHxW1lXZu3k"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Denial of Service (DOS) Attack and Its Possible Solutions in VANET",
    src: "   https://www.youtube.com/watch?v=gQg1RP5yQXg"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Using TPM to ensure Security,Trust and Privacy (STP) in VANET",
    src: "  https://www.youtube.com/watch?v=53rG1p8frZw"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Using Trusted Platform Module (TPM) to Secure Business Communication (SBC) in VANET",
    src: "https://www.youtube.com/watch?v=TSJh88229xQ"
  },
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