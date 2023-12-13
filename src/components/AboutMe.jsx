import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <Box id="about" className="about section"  >
        {/* <Text > About me</Text> */}
      <Box className='about_left' data-aos="fade-down" >
        <img  src='https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz' />
      </Box> 
      <Box className='about_right' >
        <Box  data-aos-duration="1200" > <Text  fontSize={["25px", "25px", "33px", "3xl"]} fontWeight={"700"} >About me</Text> </Box>
        <Box >  <Text fontSize={["20px", "20px", "25px", "2xl"]} fontWeight={"700"}> <span style={{ color: "orangered" }}> Full Stack </span>Web Developer </Text></Box>
        <Box className='about_me' > <Text m={"20px 0px"} id="user-detail-intro">Hi, I'm Poorvi Singh Thakur an aspiring and determined Full Stack Web Developer, curious to explore different industry-standard tech stacks and environments. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.</Text></Box>
        <Box ><Button  fontSize={"large"} size={["sm", "lg", "lg", "md"]} color={"white"} _hover={{ bg: "gray.200", color: "orangered", borderRadius: "10px" }} bg={"orangered"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box>
        {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i class="fa-solid fa-graduation-cap fa-xl"></i></span> : Shri Shankracharya Institute of Professional Management and Technology,Raipur Chhattisgarh</Text>
            <Divider />
            <Text   mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-phone fa-lg"></i> </span> : +91 7987174661</Text>
            <Divider />
            <Text  mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-envelope fa-lg"></i></span> : poorvisinghthakur27@gmail.com</Text>
            <Divider />
            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-location-dot fa-xl"></i></span> : Raipur, Chhattisgarh</Text>
            <Divider />
          </Box>
        </Box>}

      </Box>
    </Box>
  )
}