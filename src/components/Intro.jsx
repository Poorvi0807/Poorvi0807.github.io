import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { TypedText } from './TypedText';
import Poorvi from './images/Profile.JPG'
import resume from './resume/poorvi-singh-thakur-resume.pdf'

const handleclick = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};
export const Intro = () => {


    return (
        <Box className='intro_box'  >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box data-aos="fade-right" data-aos-duration="1000"> <Text fontSize={["18px", "20px", "22px", "2xl"]} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box data-aos="fade-left" data-aos-duration="1000">   <Text fontSize={["23px", "20px", "25px", "4xl"]} fontWeight={"700"} id="user-detail-name">Poorvi Singh Thakur</Text></Box>
                <Box data-aos="fade-right" data-aos-duration="1000">   <Text fontSize={["17px", "13px", "17px", "2xl"]} fontWeight={"700"}>And I'm a   <TypedText /> </Text></Box>
                <Box data-aos="fade-up-right">  <Text className='into_myself' mt={"16px"}
                    id="user-detail-intro">Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text>

                    <Box data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <Text mt={"20px"} letterSpacing={15}>
                            <Link href='https://github.com/Poorvi0807'  target="_blank" className='soco_icon' color={"#f3390a"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link href='https://www.linkedin.com/in/poorvi-thakur-5203b21a3/'  target="_blank" className='soco_icon' color={"#f3390a"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
{/*                             <Link href='https://www.instagram.com/poorvi0807/'  target="_blank" className='soco_icon' color={"#f3390a"} ><i class="fa-brands fa-instagram fa-xl"></i></Link> */}
                        </Text>
                        </Box>

                    <Text data-aos="zoom-out-up" data-aos-duration="1000" mt={"30px"} >
                        <Button size={["sm", "md", "md", "md"]} id="resume-button-2" onClick={() => handleclick(resume)}
                            href="https://drive.google.com/file/d/1BGZ34AtS7GM4tpRrdxN3ohsOt-yxC96b/view?usp=sharing" as={Link}
                            target="_blank" download={true}
                            color={"white"}

                            _hover={{ bg: "gray.900", color: "#f3390a", borderRadius: "10px" }}
                            bg={"#f8572f"} >
                            Download Resume</Button></Text>

                </Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down" data-aos-duration="1000">
                <img className='home-img' src={Poorvi} alt="" />
            </Box>

        </Box>
    )
}
