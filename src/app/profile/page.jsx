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
  ChevronForwardOutline,
  EllipsisVertical,
  LocateOutline,
  LocationOutline,
  LogOutOutline,
  PeopleCircle,
  PeopleCircleOutline,
  PersonCircle,
  PersonCircleOutline,
  SettingsOutline,
  StarOutline,
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
              <Link href={"/profile/edit-profile"} style={{ width: "100%" }}>
                <div
                  className="flex flex-row justify-between items-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <PersonCircleOutline
                      color="black"
                      height="25x"
                      width="25px"
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Profile
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
            className="flex flex-col gap-7"
            style={{
              width: "70%",
            }}
          >
            {/* My Booking */}
            <div
              className="flex flex-col justify-center p-7 gap-2"
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
                MY BOOKING
              </span>
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                My Booking
              </span>
            </div>

            {/* Waiting for payment */}
            <div className="flex flex-col gap-1">
              <div
                className="flex flex-col justify-center p-7 gap-3"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                  }}
                >
                  Monday, 20 July ‘20 - 12:33
                </span>
                <div className="flex flex-row gap-10">
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
                    width={25}
                    height={25}
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
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    color: "grey",
                  }}
                >
                  Garuda Indonesia, AB-221
                </span>
              </div>
              <div
                className="flex flex-row justify-between p-7"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <div className="flex flex-row gap-10 items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "grey",
                    }}
                  >
                    Status
                  </span>
                  <div
                    className="flex justify-center items-center p-2"
                    style={{
                      width: 300,
                      borderRadius: 10,
                      backgroundColor: "#FF7F23",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Waiting for payment
                    </span>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#2395FF",
                    }}
                  >
                    View Details
                  </span>
                  <ChevronDownOutline
                    color="#2395FF"
                    height="25x"
                    width="25px"
                  />
                </div>
              </div>
            </div>

            {/* E-ticket Issued */}
            <div className="flex flex-col gap-1">
              <div
                className="flex flex-col justify-center p-7 gap-3"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                  }}
                >
                  Monday, 20 July ‘20 - 12:33
                </span>
                <div className="flex flex-row gap-10">
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
                    width={25}
                    height={25}
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
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    color: "grey",
                  }}
                >
                  Garuda Indonesia, AB-221
                </span>
              </div>
              <div
                className="flex flex-row justify-between p-7"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <div className="flex flex-row gap-10 items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "grey",
                    }}
                  >
                    Status
                  </span>
                  <div
                    className="flex justify-center items-center p-2"
                    style={{
                      width: 300,
                      borderRadius: 10,
                      backgroundColor: "#4FCF4D",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      E-ticket Issued
                    </span>
                  </div>
                </div>

                <Link href={"/profile/booking-pass"}>
                  <div className="flex flex-row items-center gap-5">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2395FF",
                      }}
                    >
                      View Details
                    </span>
                    <ChevronDownOutline
                      color="#2395FF"
                      height="25x"
                      width="25px"
                    />
                  </div>
                </Link>
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
