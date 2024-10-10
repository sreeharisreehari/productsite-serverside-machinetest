const { default:mongoose}=require('mongoose')

const connectionstring=process.env.DATABASE

mongoose.connect(connectionstring).then((res)=>{
    console.log('mongodb connected successfully');
    
})
.catch((err)=>{
    console.log(`mongodb connection failed due to ${err}`);
    

})