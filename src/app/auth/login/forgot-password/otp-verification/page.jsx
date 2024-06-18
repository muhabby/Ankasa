"use client";

import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main className="flex flex-row" style={{ height: "100vh" }}>
        {/* Left Content */}
        <div
          className="flex justify-center items-center"
          style={{
            width: "50%",
            backgroundColor: "#2395FF",
          }}
        >
          <Image alt="" src="/illustration.png" width={400} height={400} />
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
              <Image alt="" src="/logo.png" width={35} height={35} />
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
              OTP Verification
            </span>
            <div className="flex flex-col gap-5">
              <Input
                type="email"
                variant="static"
                placeholder="Email"
                style={{ fontFamily: "poppins" }}
              />
              <Input
                type="text"
                variant="static"
                placeholder="OTP"
                style={{ fontFamily: "poppins" }}
              />
            </div>
            <Link href={"/auth/login"} style={{ width: "100%" }}>
              <Button
                className="mt-5"
                variant="gradient"
                color="blue"
                style={{ height: 50, width: "100%" }}
              >
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                >
                  Verify OTP
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
