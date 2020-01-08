import React from 'react'
import './index.css'
import Pop from '../Pop'



class Picture extends React.Component {

    constructor(){
        super()

        this.state = {
            show:true
        }
    }



    render() {

        return (
            <div className='picWrap'>
                <img 
                    className='picture' 
                    onClick={this.props.onClickHolder}
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg'
                />
                <Pop isShow={this.state}/>
            </div>
        )
    }
}
export default Picture