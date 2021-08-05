import React, { useState } from 'react'


const Loginpagespra = ()=>{

    const [Login,setLogin] = useState({
        email:"",
        password:""
    });

    // const [Record,setRecord] = useState([]);

    const handleinput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setLogin({...Login,[name]:value});
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        // console.warn({Login});
        let data={email:'{Login.email}',password:'{Login.password}'}

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // body: JSON.stringify({
            //     email: '{Login.email}',
            //     password: '',
            // }),
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        

        // fetch("http://77.68.74.171/plesk-site-preview/node.workdemo.imfo/https/77.68.74.171/adminlogin",{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(Login)
        // }).then((result)=>{
        //     // console.warn("result",result);
        //     result.json().then((resp)=>{
        //         console.warn("resp",resp);
        //     })
        // })

        // const newRecord ={...Login}        
        // setRecord ([...Record,newRecord]);
    }

    return(
        <>
            
<div className="container">
    <form className="w-25 m-auto"  onSubmit={handlesubmit}>
    <div className="form-group">
        <label for="exampleInputEmail1">Email address:</label>
        <input type="email" className="form-control" name="email"
                value={Login.email} 
                onChange={handleinput}/>
        </div>
    <div className="form-group">
        <label for="exampleInputPassword1">Password:</label>
        <input type="password" className="form-control" name="password"
                value={Login.password}
                onChange={handleinput} />
    </div>
    
    <button type="submit" className="btn btn-primary">Login</button>
    </form>
</div>          

{/* <div>
    {Record.map((currele)=>{
        return(
            <div className="">
                <p>{currele.email}</p>
                <p>{currele.password}</p>
            </div>

        )
    })}
</div> */}

</>
    )
}


export default Loginpagespra;