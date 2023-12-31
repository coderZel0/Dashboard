import React from 'react';
import { Box,Typography } from '@mui/material';
import { tokens } from '../theme';
import {useTheme} from '@mui/material';

const Header = ({title,subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette. mode);

  return (
    <Box mb='30px'>
        <Typography 
        variant='h2'
        fontWeight='bold'
        color={colors.grey[100]}
        mb='5px'
        >
            {title}
        </Typography>

        <Typography
        variant='h5'
        color={colors.greenAccent[400]}
        >
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header;