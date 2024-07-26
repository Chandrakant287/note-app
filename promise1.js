// const apple=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("i hate porn");
//     },8000)
// })
// apple.then(()=>{
//     console.log("i hate who masturbate")
// })

 promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        constif(!err)
        {
            resolve({username:"Aayush",password:"123"})
        }else{
            reject("error you masturbade ")
        }
    },1000)
})

async function consumefive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(err){
        console.log("hii")
    }
}
consumefive();

async function app(){
    try{
        const response=await fetch('')
        const data= response.json()
        console(data)
    }catch(err){
            console.log("e",console.error)

    }
}
getapp()