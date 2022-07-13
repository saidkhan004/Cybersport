import styled from "styled-components";
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';

export const IconBtn = styled(IconButton)`
    display: none !important;
    @media (max-width:1030px) {
        display: block !important;
        
    }
`

export const MenuIc = styled(MenuIcon)`
    display: none !important;
    @media (max-width:1030px) {
        display: block !important;
        margin-right: 50px !important;
        width: 50px !important;
        height: 50px !important;
    }
    @media (max-width: 350px) {
        margin-right: 20px !important;
    }
`
