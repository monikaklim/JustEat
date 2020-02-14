import React from 'react';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';



const animatedLink = (props) =>{

    const AnimatedLink = styled.div`
        
    animation: 3s ${ keyframes`${pulse}`} infinite `;
    
return(

<AnimatedLink><NavLink className = "LinkOrder" to = {props.path} > {props.children} </NavLink> </AnimatedLink>

)

}
export default animatedLink;