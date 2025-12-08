import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const validateEmail = (value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(String(value).toLowerCase());
  };

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    let hasError = false;
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) return;

    // TODO: replace with real login logic (API call)
    console.log("Login attempt:", { email, password });
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
            required
            aria-invalid={!!emailError}
            aria-describedby="email-error"
          />
          {emailError && (
            <p id="email-error" className="text-red-400 text-sm">
              {emailError}
            </p>
          )}

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={!!passwordError}
            aria-describedby="password-error"
          />
          {passwordError && (
            <p id="password-error" className="text-red-400 text-sm">
              {passwordError}
            </p>
          )}
          <Link to="/auth/forgot-password">
            <Button className="underline text-xs text-center">
              forget passowrd
            </Button>
          </Link>
          {generalError && (
            <p className="text-red-400 text-sm">{generalError}</p>
          )}
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </main>
  );
}

export default Login;
