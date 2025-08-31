'use client'
import { useSelector,useDispatch} from "react-redux";
import React from 'react'
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { LucideEdit,DeleteIcon} from "lucide-react";
import { delUser } from "@/lib/userSlice";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
const Show = () => {
  const{users,country}=useSelector((state:RootState)=>state.users);
  const dispatch=useDispatch()
  const router=useRouter()
  const {isLoaded} = useUser();

  const handledel=(index:number)=>{
      dispatch(delUser(index))
  }
  const handelEdit=(index:number)=>{
      router.push(`/edit/${index}`)
  }

  if(!isLoaded){
    <p>loading...</p>
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-l from-indigo-400 via-purple-700 to-pink-600 w-full">
      <div className="grid lg:grid-cols-4  sm:grid-cols-3  gap-4 p-4 max-w-[1300px] mx-auto">
       {
              users.map((user,ind)=>(
              <div key={ind} className="bg-gray-200 shadow-xl text-[1.2rem] py-5 px-5 rounded-2xl wrap-break-word">
                     <p>Name:{user.name}</p>
                     <p>Email:{user.email}</p>
                     <p>country:{country}</p>
                     <div className="flex gap-2 mt-4">
                          <Button variant={"destructive"} className="flex-1 font-bold  text-white" onClick={()=>handledel(ind)}><DeleteIcon/></Button>
                          <Button variant={"outline"} className="flex-1 bg-amber-600" onClick={()=>handelEdit(ind)}>
                            <span><LucideEdit/></span>Edit
                          </Button>
                     </div>
                </div>
                )
              )
            }
    </div>
    </div>
  )
}

export default Show
