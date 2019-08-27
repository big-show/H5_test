import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Outline,TopRect,TitleNumber,Title,Shake,Answer} from "./style";
import * as actionCreator from "../store/actionCreator";
class QuestionTwo extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            redirect:false
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState(()=>({
            redirect:true,
        }))
    }
    render()
    {
        console.log(this.state.redirect);
        console.log(this.props.location.pathname);
        if(this.state.redirect)
        {
            return (<Redirect to='/questionThree'/>);
        }
        return (
            <Outline>
                <TopRect/>
                <TitleNumber>第二题</TitleNumber>
                <Title>
                    军装照的PV
                    <Shake>     ?</Shake>
                </Title>
                <Answer>A
                    <p className='content' onClick={(event)=>{this.handleClick();this.props.chooseRightAnswer()}} >10亿</p>
                </Answer>
                <Answer className='second'>B
                    <p className='content' onClick={this.handleClick}>11亿</p>
                </Answer>
                <Answer className='third'>C
                    <p className='content' onClick={this.handleClick}>12亿</p>
                </Answer>
                <Answer className='fourth'>D
                    <p className='content' onClick={this.handleClick}>13亿</p>
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
export default connect(null,mapDispatchToProps)(QuestionTwo);