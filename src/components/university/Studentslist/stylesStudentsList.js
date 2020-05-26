import styled, {keyframes} from 'styled-components'
import { fadeIn } from '../../styles_animations/animation'


export const CardWrapperMember = styled.div`
display: inline-block;
overflow: hidden;
padding: 0px;
border: 0px solid #eaeaea;
margin: 0 0 30px 0;
background-color: transparent;
margin: 0 0 30px 0;
box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.15);
-webkit-box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.15);
-moz-box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.15);
-o-box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.15);
-ms-box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.15);
`;

export const ImgStudentDiv = styled.div`
  ${fadeIn()}
  padding: 0px; 
`;

export const inicioDiv = styled.div`
 display: flex;
 overflow: scroll;
 width: 100%;
  &.fixed{
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position:fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    
  }
`;