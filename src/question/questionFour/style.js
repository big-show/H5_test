import styled from 'styled-components';
import { keyframes } from 'styled-components';
const shake = keyframes`
        0% {right:2px}
        25% {right:0px}
        50% {right:2px}
        75% {right:0px}
        100% {right:2px}
        `;
export const Outline = styled.div`
    height:100%;
    width:100%;   
    border:4px solid rgb(39,100,152);
    overflow:hidden;
    box-sizing:border-box;
`;
export const TopRect = styled.div`
    width:110%;
    height:500px;
    position:absolute;
    top:-300px;
    left:50%;
    transform:translate(-50%,0);
    border:4px solid rgb(39,100,152);
    border-radius:120px;
    background-color:yellow;
`;
export const TitleNumber = styled.div`
    width:250px;
    height:60px;
    line-height:60px;
    position:absolute;
    top:50px;
    left:50%;
    transform:translate(-50%,0);
    background-color:rgb(39,100,152);
    font-size:40px;
    text-align:center;
    color:white;
    border-radius:30px;
`;
export const Title = styled.div`
    width:250px;
    position:absolute;
    top:130px;
    left:50%;
    transform:translate(-50%,0);
    font-size:20px;
    text-align:center;
    color:black;
    font-style: italic ;

`;
export const Shake = styled.span`
    display:inline-block;
    font-size:40px;
    font-weight:bold;
    position:absolute;
    top:-15px;
    right:0px;
    animation:0.5s ${shake} infinite backwards ease-in ;
`;
export const Answer = styled.div`
    position:absolute;
    width: 80%;
    top:300px;
    left:50%;
    transform:translate(-50%,0);
    height:40px;
    font-size:40px;
    line-height:40px;
    font-weight:bold;
    color:rgb(39,100,152);
    &.second
    {
           top:370px;
    }
     &.third
    {
           top:440px;
    }
     &.fourth
    {
           top:510px;
    }
    .content
    {
        width:80%;
        float:right;
        height:40px;
        background-color:rgb(39,100,152);
        margin:0;
        transform:skew(-15deg);
        color:white;
        font-size:30px;
        font-weight:normal;
        text-align:center;
    }
`;