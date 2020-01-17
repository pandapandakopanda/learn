function onClickHolder(){
    console.log('I WORK!');
}

function openModalWindow(state) {
  (state === true) ? this.setState({show:false}):this.setState({show:true})
}


export {onClickHolder, openModalWindow}