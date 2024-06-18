"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ChevronDownOutline,
  ChevronForwardOutline,
  LocationOutline,
  LogOutOutline,
  PersonCircleOutline,
  SettingsOutline,
  StarOutline,
} from "react-ionicons";
import { Button, Input, Option, Select } from "@material-tailwind/react";

const Page = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Navbar />
      <main className="flex">
        {/*Content */}
        <div
          className="flex flex-row justify-between p-10 gap-10"
          style={{
            width: "100%",
          }}
        >
          {/* Profile */}
          <div
            className="flex flex-col items-center p-10 gap-7"
            style={{
              width: "30%",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                height: 150,
                width: 150,
                borderRadius: "100%",
                border: "solid #2395FF",
                borderWidth: 2,
              }}
            >
              <Image
                alt=""
                src="/profile.jpg"
                width={140}
                height={140}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="flex flex-col" style={{ width: "60%" }}>
              <Button variant="outlined" color="blue" style={{ height: 50 }}>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    textTransform: "none",
                    fontWeight: "normal",
                  }}
                >
                  Select Photo
                </span>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                Mike Kowalski
              </span>
              <div className="flex flex-row items-center gap-2">
                <LocationOutline color="#2395FF" height="17px" width="17px" />
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                  }}
                >
                  Medan, Indonesia
                </span>
              </div>
            </div>
            <div
              className="flex flex-col items-center gap-3"
              style={{ width: "100%" }}
            >
              <div
                className="flex flex-row justify-between items-center gap-2"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Cards
                </span>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#2395FF",
                  }}
                >
                  + Add
                </span>
              </div>
              <div className="flex flex-col" style={{ width: "100%" }}>
                <Button variant="gradient" color="blue" style={{ height: 80 }}>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        textTransform: "none",
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      4441 1235 5512 5551
                    </span>
                    <div
                      className="flex flex-row justify-between"
                      style={{ width: "100%" }}
                    >
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          textTransform: "none",
                          fontWeight: "normal",
                          color: "white",
                        }}
                      >
                        X Card
                      </span>
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "12px",
                          textTransform: "none",
                          fontWeight: "normal",
                          color: "white",
                        }}
                      >
                        $ 1,440.2
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 mt-5" style={{ width: "100%" }}>
              <Link href={"#"} style={{ width: "100%" }}>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <PersonCircleOutline
                      color="#2395FF"
                      height="25x"
                      width="25px"
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2395FF",
                      }}
                    >
                      Profile
                    </span>
                  </div>
                  <ChevronForwardOutline
                    color="#2395FF"
                    height="25x"
                    width="25px"
                  />
                </div>
              </Link>
              <Link href={"#"} style={{ width: "100%" }}>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <StarOutline color="black" height="25x" width="25px" />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      My Review
                    </span>
                  </div>
                  <ChevronForwardOutline
                    color="black"
                    height="25x"
                    width="25px"
                  />
                </div>
              </Link>
              <Link href={"#"} style={{ width: "100%" }}>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <SettingsOutline color="black" height="25x" width="25px" />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Setting
                    </span>
                  </div>
                  <ChevronForwardOutline
                    color="black"
                    height="25x"
                    width="25px"
                  />
                </div>
              </Link>
              <Link href={"#"} style={{ width: "100%" }}>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <LogOutOutline color="red" height="25x" width="25px" />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "red",
                      }}
                    >
                      Logout
                    </span>
                  </div>
                  <ChevronForwardOutline
                    color="red"
                    height="25x"
                    width="25px"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="flex flex-col"
            style={{
              width: "70%",
            }}
          >
            {/* My Booking */}
            <div
              className="flex flex-col justify-center p-10 gap-2"
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "15px",
                  color: "#2395FF",
                }}
              >
                PROFILE
              </span>
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Profile
              </span>
              <div className="flex flex-row justify-between gap-10 mt-5">
                {/* Contact */}
                <div className="flex flex-col gap-7" style={{ width: "50%" }}>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Contact
                  </span>
                  {/* Email */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      Email
                    </span>
                    <Input
                      type="email"
                      variant="static"
                      placeholder="Email"
                      defaultValue="email@gmail.com"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "black",
                      }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      Phone Number
                    </span>
                    <Input
                      type="tel"
                      variant="static"
                      placeholder="Phone Number"
                      defaultValue="+628xxx"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "black",
                      }}
                    />
                  </div>
                </div>

                {/* Biodata */}
                <div className="flex flex-col gap-7" style={{ width: "50%" }}>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Biodata
                  </span>

                  {/* Full Name */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      Full Name
                    </span>
                    <Input
                      type="text"
                      variant="static"
                      placeholder="Full Name"
                      defaultValue="Mike Kowalski"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "black",
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      City
                    </span>
                    <Select
                      variant="static"
                      value={value}
                      onChange={(val) => setValue(val)}
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      <Option
                        value=""
                        disabled
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        Select city
                      </Option>
                      <Option
                        value="Medan"
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                          color: "black",
                        }}
                      >
                        Medan
                      </Option>
                    </Select>
                  </div>

                  {/* Address */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      Address
                    </span>
                    <Input
                      type="text"
                      variant="static"
                      placeholder="Address"
                      defaultValue="Medan, Indonesia"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "black",
                      }}
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      Post Code
                    </span>
                    <Input
                      type="tel"
                      variant="static"
                      placeholder="Post Code"
                      defaultValue="55555"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "black",
                      }}
                    />
                  </div>

                  <Link href={"/profile"} style={{ width: "100%" }}>
                    <Button
                      variant="filled"
                      color="blue"
                      style={{ width: "100%" }}
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
                        Save
                      </span>
                    </Button>
                  </Link>
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

export default Page;
