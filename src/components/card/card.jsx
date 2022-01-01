import { Card } from '@mui/material'
import React from 'react'

const CardLayout = ({children}) => {
    return (
        <Card elevation={5}>
            {children}
        </Card>
    )
}

export default CardLayout
