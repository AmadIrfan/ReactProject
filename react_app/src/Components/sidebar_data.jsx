import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';


export const sideBarData = [
    {
        title: 'home',
        icon: <HomeIcon />,
        link: '/',
    },
    {
        title: 'Email',
        icon: <EmailIcon />,
        link: '/email',
    },
    {
        title: 'Register',
        icon: <AddIcon />,
        link: 'register',
    },
];