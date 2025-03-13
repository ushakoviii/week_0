import styled from "styled-components";
import image from "../images/image.jpg"

export function Card() {
    return (
        <StyledCard>
            <StyledImage src={image}/>
        </StyledCard>
    );
}


const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  width: 300px;
  height: 350px;
`
const StyledImage = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
`
