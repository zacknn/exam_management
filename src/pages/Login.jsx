import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
    // Add your login logic here
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end "
      style={{ backgroundImage: "url('/src/assets/image.png')" }}
    >
      <div className=" text-white m-25 w-100 h-100 bg-white/20 backdrop-blur-lg rounded-2xl p-10 mr-20 flex flex-col gap-4">
        <h1 className="underline text-2xl text-center">Login</h1>
        <p>Welcome onboard with us !</p>

        <div className="flex flex-col gap-3 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </main>
  );
}

export default Login;
