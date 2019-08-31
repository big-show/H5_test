import React,{Component} from 'react';
import {Outline,Bubble,Title,Button} from "./style";
import {Redirect} from 'react-router-dom';
class home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
          times:0
        };
        this.move=this.move.bind(this);
    }
    move()
    {
        this.setState(()=>({
            times:this.state.times%3+1,
        }));
        console.log(this.state.times);
    }
    render()
    {

            if(this.state.times===3)
                return (<Redirect to='/questionOne'/>);
            return(
                <Outline>
                    <Bubble className='top'></Bubble>
                    <Bubble className='left'></Bubble>
                    <Bubble className='bottom'></Bubble>
                    <Title>
                        FutureApp
                        <p className='test'>——大测试——</p>
                    </Title>
                    <Button id="button" className={this.state.times===0?'':this.state.times===1?'button one':'button two'} onClick={this.move}>点击进入</Button>
                </Outline>
            )
        }

    // move(loaction)
    // {
    //     window.onload = function () {
    //         let times = 0;
    //         let flag = 0; //标记是拖曳还是点击
    //         let button = document.getElementById('button');
    //         let disX, disY, moveX, moveY, L, T, starX, starY, starXEnd, starYEnd;
    //         button.addEventListener('touchstart', function (e) {
    //             flag = 0;
    //             e.preventDefault();//阻止触摸时页面的滚动，缩放
    //             disX = e.touches[0].clientX - this.offsetLeft;
    //             disY = e.touches[0].clientY - this.offsetTop;
    //         //手指按下时的坐标
    //             starX = e.touches[0].clientX;
    //             starY = e.touches[0].clientY;
    //         //console.log(disX);
    //         });
    //         button.addEventListener('touchmove', function (e) {
    //             flag = 1;
    //             L = e.touches[0].clientX - disX;
    //             T = e.touches[0].clientY - disY;
    //         //移动时 当前位置与起始位置之间的差值
    //             starXEnd = e.touches[0].clientX - starX;
    //             starYEnd = e.touches[0].clientY - starY;
    //         //console.log(L);
    //             moveX = L + 'px';
    //             moveY = T + 'px';
    //         //console.log(moveX);
    //             this.style.left = moveX;
    //             this.style.top = moveY;
    //         });
    //         window.addEventListener('touchend', function (e) {
    //         //alert(parseInt(moveX))
    //         //判断滑动方向
    //             if (flag === 0) {//点击
    //                 times = 0;
    //             }
    //             else
    //                 times=times%3+1;
    //             if(times===3)
    //             {
    //                 times=0;
    //                 console.log(loaction.props);
    //                 loaction.props.history.push('/questionOne');
    //             }
    //         });
    //     }
    // }
}
export  default  home;