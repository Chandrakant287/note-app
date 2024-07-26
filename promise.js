const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("i love radha");
        resolve()
    },2000)
})
promiseOne.then(()=>{
    console.log("promise consumed ");
    
})

new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i love krishna ");
            resolve()
        },3000)
        
}).then(()=>{
    console.log("i love mahivir ");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Radha",email:"shahayush688@gmail.com"})
    },1000)
}).then((user)=>{
        console.log(user.username);
})

const promiseFour=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error){
                resolve({user:"Aayush",password:"123"});
            }else{
                reject("error something went wrong ");
            }
        },1000)
})

promiseFour.then((user)=>{
        console.log(user);
        return user.user
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log("hii")
}).finally(()=>console.log("i love allah"))

const promiseFive = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error =true;
            if(!error){
                resolve({username:"Allah",password:"123"})
            }else{
                reject("error something went wrong ")
            }
                
        },2000)
})
