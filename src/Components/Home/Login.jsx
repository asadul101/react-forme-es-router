import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('')
    const[email,setEamil]=useState('');
    const [password,setPassword]=useState('');
    const naviget=useNavigate()

    const handleEmail=(item)=>{
        setEamil(item.target.value);
        setEmailError('')
    }

    const haldleClick=(e)=>{
        e.preventDefault();
        if(email== ''){
            setEmailError('Plase Inter you Email')
        }
        if(password== ''){
            setPasswordError('Plase Inter you Password')
        }
        if(password.length<=5){
            toast.warning('password 6 number digit ')
        }
        else{
            setEmailError('')
            setPasswordError('')
            naviget('/ragister')
        }
    }
    return (
        <div className="flex items-center justify-center max-w-7xl mx-auto h-[700px] mt-10 rounded-2xl bg-[#859F3D] mb-24">
            <div className="w-[500px] h-[500px] bg-purple-300 rounded-xl flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold text-black mb-3">Login Frome</h1>
                <div>
                    <form>
                        <h2 className="font-bold">Email</h2>
                        <input onChange={(e)=>handleEmail(e)} className="border-none outline-none w-full h-[35px] bg-lime-100 pl-4" type="email" placeholder="Enter your Email" />
                        <p className="text-red-400">{emailError}</p>
                        <h2 className="font-bold">Password</h2>
                        <input
                        onChange={(e)=>{setPassword(e.target.value),setPasswordError('')}}
                         className="border-none w-full outline-none  h-[35px] bg-lime-100 pl-4" type="number" placeholder="Enter your Password" />
                        <p className="text-red-400 mb-6">{passwordError}</p>
                        <div className="flex items-center gap-4">
                            <p>Your account please? <span className="text-blue-500">Regiter</span></p>
                            <button onClick={haldleClick} className="btn font-bold">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;