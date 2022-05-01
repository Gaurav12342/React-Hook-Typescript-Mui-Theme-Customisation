import React, { FC } from 'react'
import { Typography } from '@mui/material';
import Button from './Button/index';

const RootComponent: FC = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div">
                Root Component
            </Typography>

            <Button variant="contained" sx={{ backgroundColor: 'primary.dark' }}>{'Submit'}</Button>
            <Button variant="contained" sx={{ backgroundColor: 'secondary.dark' }}>{'Okay'}</Button>
            <Button variant="contained" sx={{ backgroundColor: (theme) => theme?.status?.danger }}>{'Okay'}</Button>
            <Button variant="contained" sx={{ backgroundColor: (theme) => theme.palette.neutral.main }}>{'Okay'}</Button>
        </div>
    )
}

export default RootComponent