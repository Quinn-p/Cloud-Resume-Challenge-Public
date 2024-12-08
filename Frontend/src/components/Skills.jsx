import React from 'react';
import { List, ListItemText, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';


const Skills = () => {

    return(
        <div id='skills'>
        <Grid container paddingTop={20}>
            <Grid item size={{xs:12}}>
                <Typography variant='h3'>
                    Skills
                </Typography>
                <Typography variant='p'>
                    An outline of skills I have learned through school, internships, and personal projects
                </Typography>
            </Grid>
            <Grid item size={{xs:12}}>
                <br></br>
            </Grid>
            <Grid item size={{xs:0, md:2}}>
                <>
                </>
            </Grid>
            <Grid item size={{xs:12, md:4}}>
                <Typography variant='h5'>
                    <b>Languages</b>
                </Typography>
                <List>
                <ListItemText>
                        Java
                    </ListItemText>
                    <ListItemText>
                        C++
                    </ListItemText>
                    <ListItemText>
                        ReactJS
                    </ListItemText>
                    <ListItemText>
                        HTML
                    </ListItemText>
                    <ListItemText>
                        CSS
                    </ListItemText>
                    <ListItemText>
                        Python
                    </ListItemText>
                </List>
            </Grid>
            <Grid item size={{xs:12, md:4}}>
                <Typography variant='h5'>
                    <b>Tools</b>
                </Typography>
                <List>
                    <ListItemText>
                        Git/GitHub/GitLab
                    </ListItemText>
                    <ListItemText>
                        Jest
                    </ListItemText>
                    <ListItemText>
                        Junit
                    </ListItemText>
                    <ListItemText>
                        Postman
                    </ListItemText>
                    <ListItemText>
                       Zenhub
                    </ListItemText>
                    <ListItemText>
                        ClickUp
                    </ListItemText>
                    <ListItemText>
                        JSON
                    </ListItemText>
                    <ListItemText>
                        Code Climate
                    </ListItemText>
                    <ListItemText>
                        Material UI
                    </ListItemText>
                </List>
            </Grid>
            <Grid item size={{xs:0, md:2}}>
                <>
                </>
            </Grid>
        </Grid>
        </div>
    );
};
export default Skills