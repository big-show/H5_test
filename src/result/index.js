import React,{Component} from 'react';
import {Word,Button} from "./style";
import {connect} from 'react-redux';
class Result extends Component{
    constructor(props)
    {
        super(props)
    };
    render()
    {
        let {points} = this.props.data;
        let num;
        if(points<=4)
        {
            num = 'one';
        }
        if(points>4&&points<=8)
        {
            num = 'two';
        }
        if(points>8&&points<=12)
        {
            num = 'three';
        }
        if(points>12)
        {
            num = 'four';
        }
        return(
            <div>
                <img
                    className='img'
                    src={require(`../img/result_${num}.png`)}
                    alt="图片"
                    style={
                        {
                            width:"80%",
                            height:"400px",
                            position:"absolute",
                            left:"50%",
                            top:"20px",
                            transform:"translate(-50%,0)",
                        }
                    }
                />
                <Word>长按图片保存</Word>
                <Button>SHARE</Button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    data:state,
});
export default connect(mapStateToProps,null)(Result);