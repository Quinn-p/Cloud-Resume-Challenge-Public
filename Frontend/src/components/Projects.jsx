import React from "react";
import {Box, Typography} from "@mui/material"
import Grid from "@mui/material/Grid2"
import UbehaviorPicture from "../img/Ubehavior-project.png"
import DawnPicture from "../img/Dawn-project.png"
import PersonalWebsitePhoto from "../img/PersonalWebsite-project.png"

const Projects = () => {


    return (
        <div id="projects">
        <Grid container 
            spacing={2} 
            padding={10}
            width={"90%"}
            justifyContent={'center'}
            margin="0 auto"
            >
            <Grid Item size={{xs:12}} display={'flex'} justifyContent={'center'} alignItems={'center'} paddingBottom={10}>
                <Box sx={{ 
                    borderRadius: '16px', 
                    bgcolor:'#007FFF', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    minHeight: 200,
                    width:'100%'
                    }}>
                    <Typography variant="h2" color='white' margin={2} >
                        Projects
                    </Typography>
                    
                    <Typography variant='p' color='white' width={"80%"} padding={1}>
                        A list of projects that I have worked on developing personally or through internships.
                    </Typography>
                </Box>
            </Grid>
            <Grid item size={{xs:12, md:6 }}>
                <img src={UbehaviorPicture} style={{ maxWidth: "100%", height:200 }} alt="Ubehavior Project" />
                <Typography variant="h4">
                    UBehavior
                </Typography>
                <Typography variant="p">
                    A learning tool integrated into canvas that shows students how well they are practicing spacing and mixing methods of learning to keep them on track with repetitive practice.
                </Typography>
                
            </Grid>
            <Grid item size={{xs:12, md:6 }}>
                <img src={DawnPicture} style={{ maxWidth: "100%", height:200 }} alt="DAWN Project" />
                <Typography variant="h4">
                    DAWN Dashboard
                </Typography>
                <Typography variant="p">
                    An agricultural dashboard to help farmers with tools and information that can keep them updated with the information that they need.
                </Typography>
            </Grid>
            <Grid item size={{xs:12, md:6 }}>
                <img src={PersonalWebsitePhoto} style={{ maxWidth: "100%", height:200 }} alt="Personal Project" />
                <Typography variant="h4">
                    Personal Website Portfolio
                </Typography>
                <Typography variant="p">
                    A Personal portfolio website built to showcase skills and abilities that I have learned through my experiences. 
                </Typography>
            </Grid>
        </Grid>
        
        </div>
    );
}
export default Projects;