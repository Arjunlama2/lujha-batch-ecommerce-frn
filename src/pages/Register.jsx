import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://chaitra-ecommerce-backend.onrender.com/api/v1/user/signup`, formData)
      toast.success("user signup successfully")
      navigate("/login")

    } catch (err) {
      console.log(err)
      if(err.message){
        toast.error(err.message)
      }
      toast.error(err.response.data.message)
    }


  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Role</label>
            <select name="role" onChange={handleChange}>
              <option value={"buyer"}>Buyer</option>
              <option value={"seller"}>Seller</option>
            </select>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-secondary hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
