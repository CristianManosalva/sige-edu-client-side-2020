import styled, { keyframes } from 'styled-components'
import { fadeIn } from '../../styles_animations/animation'

export const Card = styled.div`
  width: 440px;
  height: 250px;
  background-color: #fff;
  // background: linear-gradient(#5ecbff, #5ecbff);
  box-shadow: 10px 10px 6px 0 #20212447;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;
export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
`;
export const PaddingCard = styled.div`
  padding: 100px;
`;
export const Pointscenter = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  white-space: nowrap;
  position: bottom;
  float: bottom;
`;
export const Additional = styled.div`
  ${Card}:hover & {
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
  position: absolute;
  width: 150px;
  height: 100%;
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
  background: linear-gradient(#006c9f, #5ecbff);
`;
export const Usercard = styled.div`
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  // background: linear-gradient(#5ecbff, #5ecbff);
  border-radius: 100px;
  white-space: nowrap;
  &:after{
    content: "";
  display: block;
  position: absolute;
  top: 10%;
  right: -2px;
  height: 80%;
  border-left: 2px solid rgba(0,0,0,0.025);
  }
`;
export const Level = styled.div`
${Center};
top: 15%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0,0,0,0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;

`;
export const Moreinfo = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  float: left;
  left: 150px;
  color: #fff;
  margin-bottom: 0;
`;
export const Coords = styled.div`
margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
  float: right;
`;
export const General = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  float: left;
  left: 150px;
  color: #006c9f;
  margin-bottom: 0;
`;
export const Titlecard = styled.div`
margin-top: 20px;
margin-rigth: 5px;
font-weight: bold;
font-size: 1.5em;
text-align: center;
color: #006c9f;
margin-bottom: 0;
`;
export const Titlecardmoreinfo = styled.div`
margin-top: 20px;
margin-rigth: 5px;
font-weight: bold;
font-size: 1.5em;
text-align: center;
color: #ffff;
margin-bottom: 0;
`;
export const ButtonTeacher = styled.button`
${Usercard}:hover & {
  background: linear-gradient(#5ecbff, #5ecbff);
}  
font-size: 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.15);
`
