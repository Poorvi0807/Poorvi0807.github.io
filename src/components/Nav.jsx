import React from "react";
import { Container, Box, Heading, Link, IconButton, useDisclosure, VStack, Spacer, Button, Divider,} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import './Home.css'
import resume from './resume/poorvi-singh-thakur-resume.pdf'

export const Nav = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
 
 const handleClick = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Container id="nav-menu" h="80px" position="sticky" top="0" zIndex="100" padding="20px"
    maxW="100%"display="flex"justifyContent="space-between"bg="gray.200"color="black"shadow="base"
    >
      <Box  >
        <Heading cursor="pointer" size="lg" marginLeft="20px"> Poorvi Thakur</Heading>
      </Box>
      <Spacer />
      <Box className="nav" display={["none", "none", "none", "flex", "flex"]} w="50%" justifyContent="space-evenly"
      >
    
            <Link className="nav-link home" to={"home"} as={ScrollLink}  spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             Home
            </Link>
            <Link className="nav-link about" to={"about"} as={ScrollLink} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             About
            </Link>
            {/* <a href="#about" className="nav-link about">About</a> */}
            <Link  className="nav-link skills" to={"skills"} as={ScrollLink} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             Skills
            </Link>
            <Link className="nav-link projects" to={"projects"} as={ScrollLink} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             Projects
            </Link>
            <Link className="statistics" to={"statistics"} as={ScrollLink} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             Statistics
            </Link>
            <Link id="nav-link contact" className="nav-link contact" to={"contact"} as={ScrollLink}  spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              _hover={{ bg: "gray.200", color:"#e4512d", borderRadius: "10px" }}
            >
             Contacts
            </Link>
       
      </Box>
      <Link  className="nav-link resume">
        <Button
        id="resume-button-1"
          display={["none", "none", "none", "flex", "flex"]} borderRadius=".8rem" size={["sm", "md"]} margin="auto" as={Link} border="1px solid #e4512d"
          target="_blank" bg="brand_secondary" color="#f8572f" _hover={{bg: "gray.200", color:"#e4512d" }} href="https://drive.google.com/file/d/1BGZ34AtS7GM4tpRrdxN3ohsOt-yxC96b/view?usp=sharing" download={true}
          onClick={()=>handleClick(resume)}
         
        >
          <DownloadIcon marginRight="5px" />
          Resume
        </Button>
       
      </Link>
      {/* <a href="./resume\Abid_resume (3).pdf" download> resume</a> */}
      <Box>
        <IconButton
          float="right"
          variant="outline"
          size={['sm','md','md']}
          colorScheme="black"
          {...buttonProps}
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <HamburgerIcon />
        </IconButton>
        <VStack
          marginTop="40px"
          {...disclosureProps}
          bg="brand_secondary"
          padding="5px"
          borderRadius="5px"
          display={["flex", "flex", "flex", "none", "none"]}
        >
         
              <Link
               className="nav-link homes"
                as={ScrollLink}
              
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Home
                <Divider />
              </Link>
               
              <Link
                as={ScrollLink}
                className="nav-link abouts"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"about"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                About
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="nav-link skill"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"skills"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Skills
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="nav-link project"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Projects
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="statistics" 
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"statistics"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Statistics
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
              className="nav-link contacts"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Contact
                <Divider />
              </Link>
         
           <Button  className="nav-link resumes"
            id="resume-link-1"
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
            <DownloadIcon marginRight="5px" />
            Resume
          </Button>
        </VStack>
      </Box>
    </Container>
  )
}


