import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Outline,TopRect,TitleNumber,Title,Shake,Answer} from "./style";
import * as actionCreator from "../store/actionCreator";
class QuestionThree extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            redirect:false,
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
            return(<Redirect to='/questionFour'/>)
        }
        return (
            <Outline>
                <TopRect/>
                <TitleNumber>第三题</TitleNumber>
                <Title>
                    吉祥物
                    <Shake>     ?</Shake>
                </Title>
                <Answer>A
                    <p className='content' onClick={(event)=>{this.handleClick();this.props.chooseRightAnswer()}}>马</p>
                </Answer>
                <Answer className='second'>B
                    <p className='content' onClick={this.handleClick}>熊猫</p>
                </Answer>
                <Answer className='third'>C
                    <p className='content' onClick={this.handleClick}>花满楼</p>
                </Answer>
                <Answer className='fourth'>D
                    <p className='content' onClick={this.handleClick}>林丽珍</p>
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
export default connect(null,mapDispatchToProps)(QuestionThree);