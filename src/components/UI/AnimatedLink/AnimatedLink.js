import React from 'react';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';

const AnimatedLink = styled.div`
        
animation: 3s ${ keyframes`${pulse}`} infinite `;

const animatedLink = (props) =>{
    
return(
<div>
<AnimatedLink><NavLink to = {props.path} > {props.children} </NavLink> </AnimatedLink>
</div>
)

}
export default animatedLink;