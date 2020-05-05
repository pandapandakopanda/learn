export default [
    {name:'one',path:'/one'},
    {name:'two',path:'/two'},
    {name:'three',path:'/three', children: [
        {name:'kittens',path:'/kittens'},
        {name:'doggos',path:'/doggos'},
        {name:'pigeon',path:'/pigeon'},
        {name:'pork',path:'/pork'},
        {name:'mice',path:'/mice'},
    ]},
    {name:'four',path:'/four'},
    {name:'five',path:'/five'}, 
]