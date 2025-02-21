import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert("Registration Successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="w-full max-w-md bg-gradient-to-r from-gray-800 to-black p-6 rounded-xl shadow-lg mx-5">
        <h2 className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full p-2 bg-orange-500 hover:bg-orange-700 rounded transition">
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-orange-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
