import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendarComponent from './GitHubCalendarComponent';

export const Stats = () => {
    return (
        <Box id="statistics" >
            <Heading data-aos="fade-down" textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]} >My Git  <span  style={{ color: "orangered" }}>Calender</span></Heading>
            <GitHubCalendarComponent />
            <Heading textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]}> My github  <span  style={{ color: "orangered" }}>stats</span></Heading>
            <Box className='stat-container'>
                <Box className='statone' data-aos="fade-up" >
                    <img id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=Poorvi0807&theme=city_light&hide_border=false&include_all_commits=true&count_private=false"
                        alt="GitHub Stats"/>
                </Box>
                <Box className='stattwo' data-aos="fade-down" data-aos-duration="1000" > 
                <img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com/?user=Poorvi0807&theme=city_light&hide_border=false" alt="GitHub Streak Stats" />
                </Box>
                <Box className='statthree' data-aos="fade-up" data-aos-duration="1000" > 
                   <img id="github-top-langs"
                     src="https://github-readme-stats.vercel.app/api/top-langs/?username=Poorvi0807&theme=city_light&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
                     alt="GitHub Top Languages"
                   />
                </Box>
            </Box>
        </Box>
    );
};

