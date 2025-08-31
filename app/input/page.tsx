'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { addUser } from "@/lib/userSlice"
import { useDispatch } from "react-redux"
import { User,Mail,Save} from "lucide-react"


type dataType={
    name:string;
    email:string
}


const  InputWithLabel=()=> {
  const[data,setData]=useState<dataType>({name:"",email:""});
  const[records,setRecords]=useState<dataType[]>([]);
  const dispatch=useDispatch()
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{ 
   setData({...data,[e.target.name]:e.target.value.trim()})
}
const handleData=()=>{
    if(data.name==="" && data.email===""){
         console.log("Please fill all fields");
         return;
    }
    setRecords([...records,data])
    console.log("Saved Records:", [...records, data]);
    dispatch(addUser(data))
}
  return (
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
     <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✨ User Details
        </h2>
     <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-300">

       <User size={40} className="text-gray-500 mr-3"/>
       <Input type="text" name="name" placeholder="Enter your Name"  onChange={handleChange} className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 border-none"/>

     </div>

      <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-300">
        <Mail size={40} className="text-gray-500 mr-3"/>
        <Input type="email" id="email" name="email" placeholder="Enter your Email"  onChange={handleChange} className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"/>
      </div>

      <div className="flex items-center"> 
        
        <Button onClick={handleData} className="w-full " variant="destructive">
        <Save size={40}/>Save Data</Button>
      </div>
    </div>
   </div>
  )
}

export default InputWithLabel;
