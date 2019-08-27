import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {Outline,TopRect,TitleNumber,Title,Shake,Answer} from "./style";
import * as actionCreator from "../store/actionCreator";
class QuestionOne extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            redirect:false,
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState(()=>({
            redirect:true
        }))
    }
    render()
    {
        console.log(this.state.redirect);
        console.log(this.props.location.pathname);
        if(this.state.redirect)
        {
            return(<Redirect to='/questionTwo'/>)
        }
        return (
            <Outline>
                <TopRect/>
                <TitleNumber>第一题</TitleNumber>
                <Title>
                    未来应用的官方网址是
                    <Shake>     ?</Shake>
                </Title>
                <Answer>A
                    <p className='content' onClick={(event)=>{this.handleClick();this.props.chooseRightAnswer()}}>H6app.com</p>
                </Answer>
                <Answer className='second'>B
                    <p className='content' onClick={this.handleClick}>H6app.com</p>
                </Answer>
                <Answer className='third'>C
                    <p className='content' onClick={this.handleClick}>H6app.com</p>
                </Answer>
                <Answer className='fourth'>D
                    <p className='content' onClick={this.handleClick}>H6app.com</p>
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
export default connect(null,mapDispatchToProps)(QuestionOne);