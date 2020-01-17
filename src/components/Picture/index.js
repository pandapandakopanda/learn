import React from 'react'
import './index.css'



class Picture extends React.Component {

    render() {

        return (
            <div className='picWrap'>
                <img 
                    className='picture' 
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg'
                />
            </div>
        )
    }
}
export default Picture