import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Box sx={{textAlign:'center', bgcolor:'#1a1a19', color:'white', p: 2}}>
<Box sx= {{my: 3, "& svg": {
    fontSize: "60px", cursor: 'pointer', mr: 2
},
"svg:hover":{
color: 'goldenrod', transform: "translateX(5px)", transition: "all 400ms"
}
}}>
    <InstagramIcon/>
    <TwitterIcon/>
    <GitHubIcon/>
<YouTubeIcon/>
</Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)":{
fontSize:'1em',
        },
         }}>
            All Right Reserved &copy; Slum Child Foundation
        </Typography>
       </Box>
    </div>
  )
}

export default Footer