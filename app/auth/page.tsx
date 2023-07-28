"use client";
import axios from "axios";
import Input from "@/components/Input";
import { useState, useCallback } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log("error");
    }
  }, [email, name, password]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="./images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  label="Username"
                />
              )}

              <Input
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                label="Email"
                type="email"
              />
              <Input
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                label="Password"
                type="password"
              />
            </div>
            <button
              onClick={register}
              className="bg-red-600 py-3 text-white w-full rounded-md mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Register  "}
            </button>
            {variant === "login" ? (
              <p className="text-neutral-500 mt-12">
                First time using Netflix?
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  Create new account
                </span>
              </p>
            ) : (
              <p className="text-neutral-500 mt-12">
                Already have an account?
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
