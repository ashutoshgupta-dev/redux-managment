"use client";
import React, { useEffect, useState } from "react";
import { User, Mail, Save ,Delete } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector,useDispatch} from "react-redux";
import { RootState } from "@/lib/store";
import { updateUser } from "@/lib/userSlice";
import { useRouter } from "next/navigation";
const Edit = ({params}:{params:Promise<{index:number}>}) => {
  const {index}=React.use(params)
  const [formData, setFormData] = useState({name: "",email: "",country:""});
  const{users,country}=useSelector((state:RootState)=>state.users);
  const dispatch=useDispatch();
  const router=useRouter()
  useEffect(()=>{
        setFormData({
            name:users[index].name,
            email:users[index].email,
            country:country
        })
  },[users, index, country])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser({index,formData}))
    router.push('/show')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✨ Edit User Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-300">
            <User className="text-gray-500 mr-3" size={40} />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-300">
            <Mail className="text-gray-500 mr-3" size={40} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 shadow-lg">
            <Save size={20} /> Save Changes
          </Button>
          
        </form>
        <Button onClick={()=>router.push('/show')}
            className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300 shadow-lg mt-4">
            <Delete size={20} />Cancel
          </Button>
      </div>
    </div>
  );
};

export default Edit;
