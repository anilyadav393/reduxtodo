import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/"); // Redirect to jobs page after login
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-black text-white px-5">
      <div className="w-full max-w-md bg-gradient-to-r from-gray-800 to-black p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl text-center mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <a href="/register" className="text-orange-400 hover:underline">Register</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
