import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Myntra from './images/project03.jpg'
import Honey from './images/project.png'
// import Portfolio from './images/Sahil-Portfolio.png'
import Glossier from './images/PT Project.png'
import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box id="projects" >

      <Text data-aos="fade-right" data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]} mb={"30px"}
         fontWeight={"700"} color={"black"} borderRadius={"10px"} border={"4px solid orangered"}
        className='project-title'
        textAlign={"center"}  w={'max-content'} margin={"40px auto"} padding={"0px 40px"}>Projects</Text>

      <Box className='project_main'>
        <ProjectCard  tech="  REACT | CHAKRA | REDUX | JSON | Netlify" github="https://github.com/Poorvi0807/Myntra_Clone" link="https://stately-otter-cbd542.netlify.app/" avatar={Honey} name="Myntra Clone" desc="Shop in style with our Myntra Clone — a sleek and modern shopping website. Experience the latest fashion trends and user-friendly design, all built with HTML, CSS, React JS, JavaScript, and more." />
        <ProjectCard  tech="  HTML | CSS | JavaScript | JSON | Netlify" github="https://github.com/Poorvi0807/Myntra_Clone" link="https://stately-otter-cbd542.netlify.app/" avatar={Glossier} name="Clycle Store" desc="Pedal into the future of cycling with our Cycle Store website. Crafted with HTML, CSS, and JavaScript, we bring you a seamless platform for all things cycling. Explore top-notch bicycles, gear up with ease, and ride into adventure. Your one-stop-shop for cycling enthusiasts, where technology meets the open road." />
        <ProjectCard  tech="  HTML | CSS | JavaScript | JSON | Netlify" github="https://github.com/Poorvi0807/Tour-Travel" link="https://spectacular-khapse-b41a77.netlify.app/" avatar={Myntra} name="Tour-Travel" desc="Embark on unforgettable journeys with our Tour-Travel website. Expertly coded in HTML, CSS, React JS, and JavaScript for a seamless and responsive experience. Explore destinations effortlessly and make your travel dreams a reality. Your adventure starts here." />
        {/* <ProjectCard  tech="  REACT | CHAKRA | REDUX | JSON | GH-PAGES" github="https://github.com/sahilshahu555/sahilshahu555.github.io" link="https://sahilshahu555.github.io/" avatar={Portfolio} name="Portfolio" desc=" Passionate MERN Stack Developer. Worked on various modern technologies such as React, MongoDB, Express.js, and Node.js.Seeking new opportunities to contribute and enhance skills." /> */}
      </Box>
    </Box>
  )
}
