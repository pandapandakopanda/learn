function onClickHolder(){
    console.log('I WORK!');
}

function openModalWindow() {
  (this.state.show === true) ? this.setState({show:false}):this.setState({show:true})
}


export {onClickHolder, openModalWindow}