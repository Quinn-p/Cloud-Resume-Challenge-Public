import React from "react";
import {Box, Typography} from "@mui/material"


const Contact = () => {

    return(
        <div id="contact">
            <Box width={"100%"} bgcolor={"lightgrey"} minHeight={400} paddingTop={5}>
                <Typography variant="h4" padding={3}>
                    Contact Me
                </Typography>
                <Typography variant="p" padding={3}>
                    I would love to hear from you so please reach out to me with any questions or comments.
                </Typography>
                
                <p><b>Email: </b>quinn.peterson@colostate.edu</p>
                <br></br>
                <p><b>Github: </b>https://github.com/Quinn-p</p>
                <br></br>
                <p><b>LinkedIn: </b>https://www.linkedin.com/in/quinn-pete/</p>
            </Box>
        </div>
    );
};
export default Contact