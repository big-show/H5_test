import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../store/actionCreator';
import {connect} from 'react-redux';
import {Outline,TopRect,TitleNumber,Title,Shake,Answer} from "./style";
class QuestionFour extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            redirect:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {

        this.setState(()=>({
            redirect:true,
        }));
    }
    render()
    {   console.log(this.state.redirect);
        console.log(this.props.location.pathname);
        if(this.state.redirect)
        {
            return (<Redirect to="/result"/>);
        }
        return (
            <Outline>
                <TopRect/>
                <TitleNumber>第四题</TitleNumber>
                <Title>
                    会议室的个数
                    <Shake>     ?</Shake>
                </Title>
                <Answer>A
                    <p className='content' onClick={(event)=>{this.handleClick();this.props.chooseRightAnswer()}}>2个</p>
                </Answer>
                <Answer className='second'>B
                    <p className='content' onClick={this.handleClick}>3个</p>
                </Answer>
                <Answer className='third'>C
                    <p className='content' onClick={this.handleClick}>4个</p>
                </Answer>
                <Answer className='fourth'>D
                    <p className='content' onClick={this.handleClick}>5个</p>
                </Answer>
            </Outline>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    chooseRightAnswer() {
        dispatch(actionCreator.submitAns());
    },
});
export default connect(null,mapDispatchToProps)(QuestionFour);