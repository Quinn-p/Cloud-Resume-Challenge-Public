import React from 'react';
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Portrait from '../img/_MG_2223.jpg'


const About = () => {
    const name = "Quinn Peterson"
    const title = "Software Engineer"

    return(
        <div id='about'>
            <Grid container spacing={2} width={"90%"} justifyContent={'center'} margin="0 auto" paddingTop={10}> 
                <Grid size={{xs:12, md:5}} >
                    <img src={Portrait} style={{ maxWidth: "100%" }} alt="Portrait of Quinn" />
                </Grid>
                <Grid size={{xs:12, md:5}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            textAlign: 'center'
                        }}
                        >
                        <Typography variant="h4">
                            Hi, I'm {name}
                        </Typography>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:0, md:2}}>
                    <></>
                </Grid>
                <Grid item size={{xs:12}} display='flex' justifyContent='center' paddingTop={"10%"}>
                    <Box sx={{ 
                            borderRadius: '16px', 
                            bgcolor:'#007FFF', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            textAlign: 'center',
                            minHeight: 200,
                            width:'90%'}}>
                        <Typography variant="h2" color='white' margin={2} >
                            About Me
                        </Typography>
                        
                        <Typography variant='p' color='white' width={"80%"} padding={1}>
                        I am a full time student at Colorado State University Studying Computer Science with a concentration in 
                        Software Engineering. I have a strong passion for designing and contributing to meaningful work within 
                        the software industry.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    );
};
export default About