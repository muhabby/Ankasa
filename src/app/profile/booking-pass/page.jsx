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
  EllipsisVertical,
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
              className="flex flex-col justify-center px-20 p-10 gap-10"
              style={{
                height: 500,
                width: 1000,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Booking Pass
                </span>
                <EllipsisVertical color="#2395FF" height="25px" width="25px" />
              </div>

              {/* Ticket */}
              <div className="flex flex-row">
                {/* Left Content */}
                <div
                  className="flex flex-col justify-between gap-5 p-10"
                  style={{
                    height: 300,
                    width: "70%",
                    borderColor: "#E5E5E5",
                    borderWidth: 2,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderRightColor: "white",
                  }}
                >
                  <div
                    className="flex flex-row items-center gap-10"
                    style={{ width: "100%" }}
                  >
                    <Image
                      alt=""
                      src="/garuda-indonesia-logo.png"
                      width={80}
                      height={10}
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "25px",
                        fontWeight: "600",
                      }}
                    >
                      IDN
                    </span>
                    <Image
                      alt=""
                      src="/landing-plane.svg"
                      width={20}
                      height={10}
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "25px",
                        fontWeight: "600",
                      }}
                    >
                      JPN
                    </span>
                  </div>

                  <div
                    className="flex flex-row gap-60"
                    style={{ width: "100%" }}
                  >
                    <div className="flex flex-col">
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        Code
                      </span>
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        AB-221
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        Class
                      </span>
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        Economy
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex flex-row gap-60"
                    style={{ width: "100%" }}
                  >
                    <div className="flex flex-col">
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        Terminal
                      </span>
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        A
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        Gate
                      </span>
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        221
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col" style={{ width: "100%" }}>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                        color: "grey",
                      }}
                    >
                      Departure
                    </span>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      Monday, 20 July ‘20 - 12:33
                    </span>
                  </div>
                </div>

                {/* Style */}
                <div
                  className="absolute"
                  style={{
                    height: 15,
                    width: 20,
                    backgroundColor: "white",
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    borderColor: "#E5E5E5",
                    borderTop: "white solid",
                    borderWidth: 2,
                    marginLeft: 578,
                  }}
                ></div>
                <div
                  className="absolute"
                  style={{
                    height: 15,
                    width: 20,
                    backgroundColor: "white",
                    borderTopRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderColor: "#E5E5E5",
                    borderBottom: "white solid",
                    borderWidth: 2,
                    marginLeft: 578,
                    marginTop: 285,
                  }}
                ></div>
                <div
                  className="absolute"
                  style={{
                    height: 15,
                    width: 20,
                    backgroundColor: "white",
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    borderColor: "#E5E5E5",
                    borderTop: "white solid",
                    borderWidth: 2,
                    marginLeft: 578,
                    paddingTop: 10,
                  }}
                ></div>

                {/* Right Content */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    height: 300,
                    width: "30%",
                    borderColor: "#E5E5E5",
                    borderWidth: 2,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    borderLeftStyle: "dashed",
                  }}
                >
                  <div
                    className="flex flex-col items-center"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <Image alt="" src="/barcode.svg" width={220} height={10} />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                      }}
                    >
                      1234 5678 90AS 6543 21CV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
