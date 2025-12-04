import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      console.log("Password reset email sent to:", email);
      setIsSubmitted(true);
      // Add your password reset logic here
    }
  };

  const handleReset = () => {
    setEmail("");
    setIsSubmitted(false);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: "url('/src/assets/image.png')" }}
    >
      <div className="text-white m-25 w-100 h-100 bg-white/20 backdrop-blur-lg rounded-2xl p-10 mr-20 flex flex-col gap-4">
        <h1 className="underline text-2xl text-center">Forgot Password</h1>

        {!isSubmitted ? (
          <>
            <p className="text-sm text-center">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button onClick={handleSubmit}>Send Reset Link</Button>

              <div className="text-center mt-2">
                <Link to="/auth/login">
                  <span className="text-xs underline hover:text-gray-200 cursor-pointer">
                    Back to Login
                  </span>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 mt-4 text-center">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-lg font-semibold mb-2">Check your email!</p>
                <p className="text-sm">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
              </div>

              <p className="text-xs">
                Didn't receive the email? Check your spam folder or try another
                email address.
              </p>

              <Button onClick={handleReset}>Try Another Email</Button>

              <div className="text-center">
                <Link to="/auth/login">
                  <span className="text-xs underline hover:text-gray-200 cursor-pointer">
                    Back to Login
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default ForgotPassword;
