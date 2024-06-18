"use client";

import {
  Alert,
  Button,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useCustomMutation from "@/helper/hook/useCustomMutation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/helper/validation/loginSchema";
import { z } from "zod";
import { registSchema } from "@/helper/validation/registSchema";

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

type registInput = z.infer<typeof registSchema>;

const Page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubbmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registInput>({
    resolver: zodResolver(registSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubbmitting(true);
      await axios.post("/api/auth/regist", data);
      router.push("/auth/login");
    } catch (error) {
      setSubbmitting(false);
      console.log(error);
      setError("Email already registered");
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
            Register
          </span>
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  variant="static"
                  placeholder="Full Name"
                  style={{ fontFamily: "poppins" }}
                  {...({} as any)}
                  {...field}
                />
              )}
            />
            {/* Name error validation */}
            {errors.name && (
              <span
                style={{
                  color: "red",
                  fontFamily: "poppins",
                  fontSize: "15px",
                }}
              >
                {errors.name?.message}
              </span>
            )}
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
            <div className="" style={{ marginLeft: -11 }}>
              <Checkbox
                required
                ripple={false}
                className="h-5 w-5 border-[#2395FF] bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                label={
                  <Typography
                    color="blue-gray"
                    className="flex font-medium ml-2"
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                    {...({} as any)}
                  >
                    I agree with the
                    <Typography
                      as="a"
                      href="#"
                      color="blue"
                      className="font-medium transition-colors hover:text-blue-700"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                      {...({} as any)}
                    >
                      &nbsp;terms and conditions
                    </Typography>
                    .
                  </Typography>
                }
                {...({} as any)}
              />
            </div>
            <Button
              className="mt-5 flex flex-row justify-center items-center"
              type="submit"
              variant="gradient"
              color="blue"
              style={{ height: 50, width: "100%" }}
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
                  Sign Up
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
            {/* <Link href={"/home"} style={{ width: "100%" }}> */}
            {/* </Link> */}
          </form>
          <div className="border-t border-y-gray-300"></div>
        </div>

        {/* Sign In */}
        <div className="my-4">
          <span
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            Already have an account?
          </span>
        </div>
        <Link href={"/auth/login"} style={{ width: "70%" }}>
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
              Sign In
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
