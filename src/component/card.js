import React from 'react';
import styled from 'styled-components'

const StyledP = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const StyledDiv = styled.div`
border: 3px solid tomato;
width:425px;


margin:20px auto;



`;
function Card(props){
    console.log('props',props)
    return (
        
            
            
      
    
                <StyledDiv>
                    <StyledP>{props.chars.street}</StyledP>
            <StyledP>{props.chars.city}</StyledP>
            <h2>{props.chars.name}</h2>
            <div>
            <p>{props.chars.website_url}</p>
            <p> {props.chars.brewery_type}</p>
            </div>
            
            
    </StyledDiv>
    
   
        
    )
}
export default Card