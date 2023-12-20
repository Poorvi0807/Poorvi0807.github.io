import { Box, Button, Divider, Text, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import resume from './resume/Poorvi Singh Thakur.pdf';
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

const handleClick = (url) => {
  const filename = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", filename);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  };

  return (
    <Box id="about" className="about section">
      <Box className='about_left' data-aos="fade-down">
        <img src='https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz' />
      </Box>
      <Box className='about_right'>
        <Box data-aos-duration="1200">
          <Text fontSize={["25px", "25px", "33px", "3xl"]} fontWeight={"700"}>About me</Text>
        </Box>
        <Box>
          <Text fontSize={["20px", "20px", "25px", "2xl"]} fontWeight={"700"}>
            <span style={{ color: "orangered" }}> Full Stack </span>Web Developer
          </Text>
        </Box>
        <Box className='about_me'>
          <Text m={"20px 0px"} id="user-detail-intro">
          I'm a passionate and determined Full Stack Web Developer with more than 1000 hours of hands-on coding experience. I've dedicated over 120+ hours to mastering essential concepts like data structures and algorithms. I'm skilled in both front-end and back-end development, using technologies like ReactJS, Node.js, JavaScript, ExpressJS, and MongoDB. I've successfully recreated popular websites and worked effectively on team projects. I'm disciplined, motivated, and adept at problem-solving.
          </Text>
        </Box>
        <Box>
        <Text data-aos="zoom-out-up" data-aos-duration="1000" mt={"30px"}>
            <Button
              size={["sm", "md", "md", "md"]}
              id="resume-button-2"
              onClick={() => handleClick(resume)}
              href="https://drive.google.com/file/d/1n4Q21LXrqXktQjE6R_pGAIL9Z_X7oX_k/view"
              as={Link}
              target="_blank"
              download={true}
              color={"white"}
              _hover={{ bg: "gray.900", color: "#f3390a", borderRadius: "10px" }}
              bg={"#f8572f"}
            >
            <a   className="nav-link resume"
            id="resume-link-2"
            margin="auto"
            as={Link}
            target="_blank"
            variant="outline"
            color="#f8572f"
            border="1px"
            borderRadius="10px"
            href="https://drive.google.com/file/d/1BGZ34AtS7GM4tpRrdxN3ohsOt-yxC96b/view?usp=sharing"
            download={true}
            onClick={()=>handleClick(resume)}
            
          >
            <DownloadIcon marginRight="5px" />Download Resume
            </a>
              {/* <a id="resume-link-2" >Download Resume</a> */}
              
            </Button>
        
          </Text>
          <Button fontSize={"large"} size={["sm", "lg", "lg", "md"]} color={"white"} _hover={{ bg: "gray.   200", color: "orangered", borderRadius: "10px" }} bg={"orangered"} onClick={handleReadMoreClick}
          mt={"10px"}
          >
          {showMoreDetails ? "Read less" : "Read more"}
          </Button>
    
        </Box>
        {showMoreDetails && (
          <Box className='more-detail' mt={"30px"}>
            <Box>
              <Text mt={"10px"} className='more_detail_text'>
                <span style={{ color: "#03c8d7", fontWeight: "700" }}>
                  <i class="fa-solid fa-graduation-cap fa-xl"></i>
                </span>
                : Shri Shankracharya Institute of Professional Management and Technology,Raipur Chhattisgarh
              </Text>
              <Divider />
              <Text mt={"10px"} className='more_detail_text'>
                <span style={{ color: "#03c8d7", fontWeight: "700" }}>
                  <i class="fa-solid fa-phone fa-lg"></i>
                </span>
                : +91 7987174661
              </Text>
              <Divider />
              <Text mt={"10px"} className='more_detail_text'>
                <span style={{ color: "#03c8d7", fontWeight: "700" }}>
                  <i class="fa-solid fa-envelope fa-lg"></i>
                </span>
                : poorvisinghthakur27@gmail.com
              </Text>
              <Divider />
              <Text mt={"10px"} className='more_detail_text'>
                <span style={{ color: "#03c8d7", fontWeight: "700" }}>
                  <i class="fa-solid fa-location-dot fa-xl"></i>
                </span>
                : Raipur, Chhattisgarh
              </Text>
              <Divider />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
