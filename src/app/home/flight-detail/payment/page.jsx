"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  AlertCircleOutline,
  CheckmarkCircleOutline,
  ChevronDownOutline,
} from "react-ionicons";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Switch,
} from "@material-tailwind/react";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/*Content */}
        <div
          className="flex items-center relative"
          style={{
            height: 600,
            width: "auto",
            backgroundColor: "#2395FF",
          }}
        >
          <div
            className="flex flex-col p-10 absolute items-center justify-center"
            style={{
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              //   backgroundColor: "red",
              //   opacity: 0.5,
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                height: 500,
                width: 1000,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <Image alt="" src="/payment-image.png" width={700} height={700} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
