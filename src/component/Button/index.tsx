import React, { FC } from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <MuiButton {...props}>{children}</MuiButton>
}

export default Button