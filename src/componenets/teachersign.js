
"use client";
import { useState } from "react";
export default function Teachersign() {
      const [formData, setFormData] = useState({
        name: "",
        school: "",
        class: "",
        rollNo: "",
        age: "",
        phone: "",
        password: "",
      });
    const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Signup successful!");
    // Add your signup logic or API call here
  };
  
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          Teacher Signup here...
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your full name"
          />
        </div>

        {/* School */}
        <div>
          <label className="block text-sm font-medium text-gray-700">School</label>
          <input
            name="school"
            type="text"
            required
            value={formData.school}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your school name"
          />
        </div>

        {/* Class and Roll No */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <input
              name="class"
              type="text"
              required
              value={formData.class}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10th"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Roll No</label>
            <input
              name="rollNo"
              type="text"
              required
              value={formData.rollNo}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 23"
            />
          </div>
        </div>

        {/* Age and Phone */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              name="age"
              type="number"
              required
              value={formData.age}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 15"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 9876543210"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Create Password</label>
          <input
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="••••••••"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
        >
          Sign Up
        </button>
      </form>
    </div>
        </>
    )
}