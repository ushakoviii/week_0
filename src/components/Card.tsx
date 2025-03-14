import styled, {css} from "styled-components";
import image from "../images/image.jpg"

export function Card() {
    return (
        <StyledCard>
            <StyledImage src={image}/>
            <StyledHeadText>HeadLine</StyledHeadText>
            <StyledText>Faucibus. Faucibus. Sit sit sapien <br/>sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
            <StyledBtn primary>See more</StyledBtn>
            <StyledBtn outlined>Save</StyledBtn>
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
const StyledHeadText = styled.h1 `
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  margin-left: 20px;
  margin-top: 20px;
  color: #000000;
`
const StyledText = styled.p `
  font-size: 12px;
  font-weight: 500;
  font-family: Inter;
  line-height: 20px;
  margin-left: 20px;
  margin-top: 20px;
  color: #ABB3BA;
  width: 260px;
`
type StyledBtnPropsType = {
    primary?: boolean
    outlined?: boolean
}
const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  font-family: Inter;
  font-weight: 700;
  font-size: 10px;
  border-radius: 5px;
  border: 2px solid;
  border-color: #4E71FE;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: #4E71FE;
    color: #FFFFFF;
  `}
  ${props => props.outlined && css<StyledBtnPropsType>`
    background-color: #FFFFFF;
    color: #4E71FE;
    margin-left: 12px;
    `}
`