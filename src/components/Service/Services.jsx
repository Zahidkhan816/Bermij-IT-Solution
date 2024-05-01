import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
    <Slide direction="left">
      <h1>
        Our <span className="green">Services</span>
      </h1>
    </Slide>
    <Cards>
      <Slide direction="left">
        <Card
          Icon={MdDesignServices}
          title={"Full-Stack Web Development"}
          disc={`Full-Stack Web Development: From front-end design to back-end functionality, we offer comprehensive solutions for creating dynamic and responsive web applications tailored to your needs.`}
        />
      </Slide>
      <Slide direction="up">
        <Card
          Icon={FiCodesandbox}
          title={"Android App Development"}
          disc={`Android App Development: Harness the power of the Android platform with our custom app development services, designed to deliver engaging and intuitive mobile experiences.`}
        />
      </Slide>
      <Slide direction="down">
        <Card
          Icon={FiCodesandbox}
          title={"iOS App Development"}
          disc={`iOS App Development: Elevate your presence on Apple devices with our expertise in building high-performance iOS applications that captivate users and drive results.`}
        />
      </Slide>
      <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"Mobile Communication"}
          disc={`Mobile Communication: This introductory course provides an overview of wireless communication technologies and their applications, covering topics such as cellular networks, wireless protocols, and mobile data transmission.`}
        />
      </Slide>
      <Slide direction="left">
        <Card
          Icon={CgWebsite}
          title={"Wireless Communication"}
          disc={`
          Wireless Communication: Gain a solid foundation in wireless communication systems, covering topics such as networks, propagation, modulation, and protocols, to understand and analyze wireless technologies and applications effectively.`}
        />
      </Slide>
      <Slide direction="down">
        <Card
          Icon={CgWebsite}
          title={"Internet of Things (IoT)"}
          disc={`IoT: Explore the world of Internet of Things (IoT) through this course, covering sensor networks, connectivity protocols, data analytics, and security, to develop the skills necessary for designing and managing IoT systems effectively.`}
        />
      </Slide>
      <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"Network Security"}
          disc={`Network Security: Develop expertise in securing computer networks with this course, covering authentication, encryption, intrusion detection, and vulnerability management to protect against cyber threats and ensure network integrity.?`}
        />
      </Slide>
      <Slide direction="left">
        <Card
          Icon={CgWebsite}
          title={"Information Security"}
          disc={`Information Security: Gain expertise in protecting information assets through this course, covering risk management, access control, cryptography, and incident response.`}
        />
      </Slide>
      <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"Data Communication and Network"}
          disc={`Data communication and networking enable the exchange of data and resources between computers and devices over a network.`}
        />
      </Slide>
      <Slide direction="down">
        <Card
          Icon={CgWebsite}
          title={"Cloud Computing"}
          disc={`Cloud computing enables on-demand access to computing resources, such as servers, software, databases, and applications, and services over the internet, offering scalability and flexibility to users.`}
        />
      </Slide>
      <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"Distributed System"}
          disc={`A distributed system is a network of independent computers that work together as a unified system, enabling concurrent processing and resource sharing to achieve a common goal.`}
        />
      </Slide>
      <Slide direction="right">
        <Card
          Icon={CgWebsite}
          title={"Wireless Sensor Network"}
          disc={`A wireless sensor network consists of autonomous sensor nodes that wirelessly communicate to monitor and collect data from the environment.`}
        />
      </Slide>
    </Cards>
  </Container>
  
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
