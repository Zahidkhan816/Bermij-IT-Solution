import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Security issues and challenges in MANET,VANET and FANET: A Survey.",
    src: " https://www.slideshare.net/irshadahmed31/security-issues-and-challenges-in-manetvanet-and-fanet-a-survey"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Towards Improving Security in VANET: Some New Possible Attacks and their Possible Solutions",
    src: "https://www.slideshare.net/irshadahmed31/towards-improving-security-in-vanet-some-new-possible-attacks-and-their-possible-solutions"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Using the grades mechanism to differentiate the users in VANET ",
    src: "https://www.slideshare.net/irshadahmed31/using-the-grades-mechanism-to-differentiate-the-users-in-vanet-242581007"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Using Computing Methods to Secure VANET",
    src: " https://www.slideshare.net/irshadahmed31/attacks-on-security-goals-confidentiality-integrity-availability-in-vanet-a-survey"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Attacks on Security Goals (Confidentiality, Integrity, Availability) in VANET: A Survey",
    src: " https://www.slideshare.net/irshadahmed31/effects-of-attackers-and-attacks-on-availability-requirement-in-vehicular-network-a-survey"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Denial of Service (DOS) Attack and Its Possible Solutions in VANET",
    src: " https://www.slideshare.net/irshadahmed31/denial-of-service-dos-attack-and-its-possible-solutions-in-vanet"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Comparative study of security hardware modules in VANET",
    src: " https://www.slideshare.net/irshadahmed31/comparative-study-of-security-hardware-modules-in-vanet"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "An Integrated Multi-level Security Model for Malicious Attacks Resiliency in Vehicular Ad hoc Network (VANET)",
    src: "  https://www.slideshare.net/irshadahmed31/an-integrated-multilevel-security-model-for-malicious-attacks-resiliency-in-vehicular-ad-hoc-network-vanet"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Using Trusted Platform Module (TPM) to Secure Business Communication (SBC) in VANET",
    src: "   https://www.slideshare.net/irshadahmed31/using-trusted-platform-module-tpm-to-secure-business-communication-sbc-in-vanet"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "VANET Security Research and Development Ecosystem",
    src: "https://www.slideshare.net/irshadahmed31/vanet-security-research-and-development-ecosystem"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Behavior of Attacker and Some New Possible Attacks in Vehicular Communication",
    src: "https://www.slideshare.net/irshadahmed31/behavior-of-attacker-and-some-new-possible-attacks-in-vehicular-communication"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: " Timing Attack in Vehicular Network",
    src: " https://www.slideshare.net/irshadahmed31/timing-attack-in-vehicular-network"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "Classes of Attacks in VANET",
    src: " https://www.slideshare.net/irshadahmed31/classes-of-attacks-in-vanet"
  },
  {
    img: "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    disc: "User Requirements Model for VANET Applications",
    src: "https://www.slideshare.net/irshadahmed31/user-requirements-model-for-vanet-applications"
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