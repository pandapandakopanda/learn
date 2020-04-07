<div className='wrapper'>
                
<div className = 'nav'>
    <ul>{this.components}</ul>
</div>

<div className='main'>

    <Button  
        title='Hey'
        className='button'
        type=''
        size='medium'
        onCLickHolder={buttonFunc.calc}
    />

     <Input 
        type='text'
        disabled
        plaseholder='type any'
        classNames={['red', 'big']}
        />

</div>


</div>