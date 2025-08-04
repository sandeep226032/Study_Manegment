"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const logsearchparams=useSearchParams();
  const logrole=logsearchparams.get("role");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ID: ${formData.id}`);
    // Add real login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
           Login here...
        </h2>

        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
           {logrole=="Teacher" && "Teacher  " }
            {logrole=="Student" && "Student " } 
             {logrole=="School" && "School  " }ID
          </label>
          <input
            type="text"
            name="id"
            id="id"
            value={formData.id}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your ID"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
