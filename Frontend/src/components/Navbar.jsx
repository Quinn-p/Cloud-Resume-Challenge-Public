import AppBar from '@mui/material/AppBar'
import { Button, Toolbar, Typography, Box, Stack } from '@mui/material';
import { getCount } from '../services/VisitorCount';
import { useEffect, useState } from 'react';

export default function Navbar() {
    
    const [count, setCount] = useState("Loading...");

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getCount();
                setCount(result); // Store the data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means it runs once on mount
    
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
          <AppBar position='fixed'>
            <Toolbar>
                <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ width: '100%' }}
                >
                {/* Left-aligned element */}
                <Typography variant='h6' sx={{ flexGrow: { sm: 1 }, textAlign: { xs: 'center', sm: 'left' } }}>
                    View Count: {count}
                </Typography>

                {/* Right-aligned elements */}
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-end' },
                    gap: 2,
                    width: '100%'
                    }}
                >
                    
                    <Button color='inherit' onClick={() => handleScrollToSection('about')}>About</Button>
                    <Button color='inherit' onClick={() => handleScrollToSection('skills')}>Skills</Button>
                    <Button color='inherit' onClick={() => handleScrollToSection('projects')}>Projects</Button>
                    <Button color='inherit' onClick={() => handleScrollToSection('contact')}>Contact</Button>
                </Box>
                </Stack>
            </Toolbar>
        </AppBar>
        </>
    )
}