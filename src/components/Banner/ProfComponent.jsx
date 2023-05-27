import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
const ProfComponent = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setShowMore(!showMore);
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Dr. Irshad Ahmed Sumra</h1>
          <h3> A researcher and academic in the field of computer science</h3>
          <div>
            <p>
              Dr. Irshad Ahmed Sumra is a researcher and academic in the field of computer science, particularly in the area of Vehicular Ad Hoc Networks (VANETs)...</p>
            {
              showMore && (
                <p>Im the founder of the VANET Research Group, which focuses on research and development related to VANETs, a type of wireless network that allows communication between vehicles and between vehicles and roadside infrastructure. Dr. Sumra has published numerous research papers in prestigious journals and conferences related to computer science and engineering. He has also worked as a reviewer for several international journals and conferences in the field of wireless networks and distributed systems. Additionally, Dr. Sumra has taught computer science courses at various universities and has been involved in several research projects related to VANETs, wireless sensor networks, and other topics related to computer science and engineering</p>
              )
            }
            <button onClick={toggleReadMoreLess}>
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
          <div>
            <h2>Education:</h2>
            <ul>
              <li>PhD - COMPUTER SCIENCE – Malaysia University of Science and Technology (MUST) Malaysia. [2016-2020]</li>
              <li>MS - COMPUTER SCIENCE – Bahria University Islamabad. [2005-2007]  </li>
              <li>MCS -COMPUTER SCIENCE – Bahria University Islamabad. [2002-2004] </li>
              <li>BCS - COMPUTER SCIENCE – Islamia University Bahawalpur.[1999-2001]</li>
            </ul>
          </div>
          {/* <button>Let's talk</button> */}
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/dr-irshad-ahmed-sumra-aa811140/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      {/* profile picture.... >>>>>>>>>>>>>>>>>>>>>>*/}
      {/* <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile"
          />
        </Profile>
      </Slide> */}
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
