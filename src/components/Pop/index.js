import React from 'react'
import './index.css'




class Pop extends React.Component {

    constructor() {
        super()
        this.state ={
            isShow: this.props.isShow,
            className: function(){
                (this.state.isShow)?'wrap_hide':'wrap_show'
            }
        }
    } 
    

    render(){
        return(
            <div className={(className===undefined)? 'wrap_show' : this.state.className}>
                I AM POP
            </div>
        )
    }
}


export default Pop