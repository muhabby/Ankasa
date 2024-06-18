"use client";

import useCustomMutation from "@/helper/hook/useCustomMutation";
import { loginFn } from "@/helper/server/authServer";
import { Alert, Button, Input, Spinner } from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/helper/validation/loginSchema";
import { z } from "zod";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};

type loginInput = z.infer<typeof loginSchema>;

const Page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubbmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubbmitting(true);
      await axios.post("/api/auth/login", data);
      router.push("/home");
    } catch (error) {
      setSubbmitting(false);
      console.log(error);
      setError("Invalid data, make sure the data is correct.");
    }
  });

  return (
    <main className="flex flex-row" style={{ height: "100vh" }}>
      {/* Left Content */}
      <div
        className="flex justify-center items-center"
        style={{
          width: "50%",
          backgroundColor: "#2395FF",
        }}
      >
        <Image
          alt=""
          src="/illustration.png"
          width={400}
          height={400}
          priority={true}
        />
      </div>

      {/* Right Content */}
      <div
        className="flex flex-col items-center p-10"
        style={{
          width: "50%",
        }}
      >
        {/* Angkasa */}
        <div
          className="flex flex-row justify-start"
          style={{ height: 70, width: "70%" }}
        >
          <div className="pr-4">
            <Image
              alt=""
              src="/logo.png"
              width={35}
              height={35}
              priority={true}
            />
          </div>
          <span
            style={{
              fontFamily: "poppins",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Ankasa
          </span>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5" style={{ width: "70%" }}>
          <span
            style={{
              fontFamily: "poppins",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Login
          </span>
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="email"
                  variant="static"
                  placeholder="Email"
                  style={{ fontFamily: "poppins" }}
                  {...({} as any)}
                  {...field}
                />
              )}
            />
            {/* Email error validation */}
            {errors.email && (
              <span
                style={{
                  color: "red",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
              >
                {errors.email?.message}
              </span>
            )}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="password"
                  variant="static"
                  placeholder="Password"
                  style={{ fontFamily: "poppins" }}
                  {...({} as any)}
                  {...field}
                />
              )}
            />
            {/* Password error validation */}
            {errors.password && (
              <span
                style={{
                  color: "red",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
              >
                {errors.password?.message}
              </span>
            )}
            <Button
              className="mt-5 flex flex-row justify-center items-center"
              type="submit"
              variant="gradient"
              color="blue"
              style={{ height: 50, width: "full", backgroundColor: "red" }}
              {...({} as any)}
            >
              {submitting ? (
                <Spinner color="white" {...({} as any)} />
              ) : (
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                    textTransform: "none",
                  }}
                >
                  Sign In
                </span>
              )}
            </Button>
            {/* Error alert */}
            {error && (
              <Alert
                className="items-center"
                style={{ fontFamily: "poppins" }}
                icon={<Icon />}
                color="red"
              >
                {error}
              </Alert>
            )}
          </form>
          {/* <Link
            href="/auth/login/forgot-password"
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              color: "#2395FF",
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Link> */}
          <div className="border-t border-y-gray-300"></div>
        </div>

        {/* Sign Up */}
        <div className="my-4">
          <span
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            Don&apos;t have an account?
          </span>
        </div>
        <Link href={"/auth/register"} style={{ width: "70%" }}>
          <Button
            variant="outlined"
            color="blue"
            style={{ height: 50, width: "100%" }}
            {...({} as any)}
          >
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                fontWeight: "500",
                textTransform: "none",
              }}
            >
              Sign Up
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
