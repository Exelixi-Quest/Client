import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Simulate an error response
    setErrorMessage("Invalid username or password");
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
              <input
                id="username"
                placeholder=""
                type="text"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                disabled={isLoading}
                required
                className="bg-gray-900 border border-gray-800 rounded-md p-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                type="password"
                disabled={isLoading}
                required
                className="bg-gray-900 border border-gray-800 rounded-md p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-local rounded-md p-2"
              disabled={isLoading}
            >
             <span className="flex items-center justify-center"> {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </span>
            </button>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
          </form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="/join" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
