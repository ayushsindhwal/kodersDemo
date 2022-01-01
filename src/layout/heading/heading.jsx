import { Typography } from '@mui/material'
import React from 'react'

const Heading = () => {
    return (
        <div>
             <Typography variant="body1" sx={{marginTop: "2rem", opacity:"0.8"}}>Dashboard</Typography>
             <Typography variant="h5" >Blog Overview</Typography>
        </div>
    )
}

export default Heading
