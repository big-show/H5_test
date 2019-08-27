import styled from 'styled-components';
import { keyframes } from 'styled-components';
const breathe_top = keyframes`
  0% {
    width:140px;
    height:140px;
  }
  50% {
    width:160px;
    height:160px;
  }
  100% {
    width:140px;
    height:140px;
  }
`;
const breathe_left = keyframes`
    0% {
    width:220px;
    height:220px;
  }
  50% {
    width:240px;
    height:240px;
  }
  100% {
    width:220px;
    height:220px;
  }
`;const breathe_right = keyframes`
  0% {
    width:420px;
    height:420px;
  }
  50% {
    width:440px;
    height:440px;
  }
  100% {
    width:420px;
    height:420px;
  }
`;

export const Outline = styled.div`
    height:100%;
    width:100%;   
    border:4px solid rgb(39,100,152);
    overflow:hidden;
    box-sizing:border-box;
`;
export const Bubble = styled.div`
    position:absolute;
    &.top
    {
        width:140px;
        height:140px;
        border:4px solid rgb(39,100,152);
        border-radius:50%;
        top: -60px;
        right:-60px;
        background-color:rgb(150,255,56);
        animation: 5s ${breathe_top} ease-out infinite;

    }
    &.left
    {
        width:220px;
        height:220px;
        border:4px solid rgb(39,100,152);
        border-radius:50%;
        top: 50%;
        transform:translate(0,-50%);
        left:-110px;
        background-color:yellow;
        animation: 5s ${breathe_left} ease-out infinite;
   
    }
    &.bottom
    {
        width:420px;
        height:420px;
        border:4px solid rgb(39,100,152);
        border-radius:50%;
        bottom: -30%;
        right:-210px;
        background-color:red; 
        animation: 5s ${breathe_right} ease-out infinite;
    }
`;
export const Title = styled.div`
    width:80%;
    font-size:60px;
    font-weight:bold;
    color:rgb(39,100,152);
    position:absolute;
    top:100px;
    left:50%;
    transform:translate(-50%,0);
    text-align:center;
    .test
    {
        font-size:30px;
        position:relative;
        top:-20px;
    }
`;
export const Button = styled.button`
    position:absolute;
    width:100px;
    height:40px;
    background-color:rgb(39,100,152);
    bottom:40px;
    left:50%;
    transform:translate(-50%,0);
    text-align:center;
    border-radius:10px;
    font-size:20px;
    color:white;
    font-weight:bold;
    outline:none;
    border:none;
    &.one
    {
       left:30%;
       bottom:100px;  
    }
    &.two
    {
        left:60%;
        top:300px;
    }
`;