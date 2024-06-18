"use client";

import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Flight from "@/components/flight";
import Link from "next/link";
import {
  ChevronUpOutline,
  SwapHorizontalOutline,
  SwapVerticalOutline,
} from "react-ionicons";
import { Button, Checkbox, Slider } from "@material-tailwind/react";

const page = () => {
  return (
    <>
      <main className="flex flex-col" style={{ height: "100vh" }}>
        <Navbar />
        {/* Top Content */}
        <div
          className="flex items-center relative"
          style={{
            height: 100,
            width: "auto",
            backgroundColor: "#2395FF",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Image
            alt="#"
            src="/logo-white.png"
            width={145}
            height={35}
            style={{ opacity: 0.1 }}
          />
          <div
            className="flex flex-row justify-between items-center p-10"
            style={{
              height: 100,
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {/* From Medan ... */}
            <div className="flex flex-row items-center ml-10">
              <Image alt="#" src="/logo-white.png" width={45} height={35} />
              <div className="flex flex-col justify-between">
                <span
                  className="ml-5"
                  style={{
                    fontFamily: "poppins",
                    fontSize: "10px",
                    color: "white",
                  }}
                >
                  From
                </span>

                {/* Medan ... */}
                <div
                  className="flex flex-row items-center justify-between ml-5 py-1"
                  style={{ width: 300 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    Medan (IDN)
                  </span>
                  <div className="flex justify-center items-center">
                    <SwapHorizontalOutline
                      color="white"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    Tokyo (JPN)
                  </span>
                </div>

                {/* Monday */}
                <div
                  className="flex flex-row items-center justify-between ml-5"
                  style={{ width: 300 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    Monday, 20 July 20
                  </span>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      height: 5,
                      width: 5,
                      backgroundColor: "white",
                      borderRadius: 20,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    6 Passenger
                  </span>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      height: 5,
                      width: 5,
                      backgroundColor: "white",
                      borderRadius: 20,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    Economy
                  </span>
                </div>
              </div>
            </div>
            <Link
              href="#"
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                color: "white",
              }}
            >
              Change Search
            </Link>
          </div>
        </div>

        {/* Mid Content */}
        <div
          className="flex flex-row justify-between p-10"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          {/* Filter */}
          <div className="flex flex-col mr-5" style={{ width: "30%" }}>
            <div className="flex flex-row justify-between items-center">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Filter
              </span>
              <Link
                href="#"
                style={{
                  fontFamily: "poppins",
                  fontSize: "17px",
                  color: "#2395FF",
                }}
              >
                Reset
              </Link>
            </div>

            {/* List Filter */}
            <div
              className="mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              {/* Transit */}
              <div className="flex flex-col pb-3">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Transit
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Direct
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Transit
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Transit 2+
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>

              <div className="border-t border-y-gray-300 scroll my-5"></div>

              {/* Facilities */}
              <div className="flex flex-col pb-3">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Facilities
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Luggage
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    In-Flight Meal
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Wifi
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>

              <div className="border-t border-y-gray-300 my-5"></div>

              {/* Departure Time */}
              <div className="flex flex-col pb-3">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Departure Time
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    00:00 - 06:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    06:00 - 12:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    12:00 - 18:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    18:00 - 00:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>

              <div className="border-t border-y-gray-300 my-5"></div>

              {/* Time Arrived */}
              <div className="flex flex-col pb-3">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Time Arrived
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    00:00 - 06:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    06:00 - 12:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    12:00 - 18:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    18:00 - 00:00
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>

              <div className="border-t border-y-gray-300 my-5"></div>

              {/* Airlines */}
              <div className="flex flex-col pb-3">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Airlines
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Garuda Indonesia
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Air Asia
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Lion Air
                  </span>
                  <Checkbox
                    {...({} as any)}
                    ripple={false}
                    className="h-5 w-5 border-gray-900/20 bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    style={{ marginRight: -10, marginLeft: -10 }}
                  />
                </div>
              </div>

              <div className="border-t border-y-gray-300 my-5"></div>

              {/* Ticket Price */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Ticket Price
                  </span>
                  <ChevronUpOutline
                    color="#2395FF"
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                    }}
                  >
                    Lowest
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                    }}
                  >
                    Highest
                  </span>
                </div>
              </div>
              <div className="pb-5">
                <Slider
                  {...({} as any)}
                  defaultValue={50}
                  className="text-[#2395FF]"
                  barClassName="bg-[#2395FF]"
                  thumbClassName="[&::-moz-range-thumb] [&::-webkit-slider-thumb] [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                  trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent !bg-[#2395FF]/10 border border-[#2395FF]/20"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#2395FF",
                    }}
                  >
                    $ 145,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#2395FF",
                    }}
                  >
                    $ 300,00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Select Ticket */}
          <div className="flex flex-col ml-5" style={{ width: "70%" }}>
            <div className="flex flex-row justify-between items-center">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Select Ticket
              </span>
              <div className="flex flex-row gap-5 items-center">
                <Link
                  href="#"
                  style={{
                    fontFamily: "poppins",
                    fontSize: "17px",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  Sort by
                </Link>
                <SwapVerticalOutline color="black" height="20px" width="20px" />
              </div>
            </div>

            {/* Ticket */}
            <Flight />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
