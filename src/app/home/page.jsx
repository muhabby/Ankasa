/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";

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
              <Image src="/logo-white.png" width={45} height={35} />
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
                    <Image src="/arrow.svg" width={20} height={10} />
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
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Transit
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Direct
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Transit
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Transit 2+
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="border-t border-y-gray-300 scroll pb-5"></div>

              {/* Facilities */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Facilities
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Luggage
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    In-Flight Meal
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Wifi
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="border-t border-y-gray-300 pb-5"></div>

              {/* Departure Time */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Departure Time
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    00:00 - 06:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    06:00 - 12:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    12:00 - 18:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    18:00 - 00:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="border-t border-y-gray-300 pb-5"></div>

              {/* Time Arrived */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Time Arrived
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    00:00 - 06:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    06:00 - 12:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    12:00 - 18:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    18:00 - 00:00
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="border-t border-y-gray-300 pb-5"></div>

              {/* Airlines */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Airlines
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Garuda Indonesia
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Air Asia
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    Lion Air
                  </span>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </div>
              </div>
              <div className="border-t border-y-gray-300 pb-5"></div>

              {/* Ticket Price */}
              <div className="flex flex-col pb-5">
                <div className="flex flex-row justify-between">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Ticket Price
                  </span>
                  <Image src="/btnback.svg" width={20} height={10} />
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
                <input
                  type="range"
                  min={0}
                  max="100"
                  //   value="40"
                  className="range range-xs range-info"
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
                <Image src="/arrow2.svg" width={15} height={10} />
              </div>
            </div>

            {/* Ticket 1 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image
                    src="/garuda-indonesia-logo.png"
                    width={100}
                    height={10}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Garuda Indonesia
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                  <Image src="/wifi.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>

            {/* Ticket 2 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image src="/air-asia.png" width={100} height={10} />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Air Asia
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>

            {/* Ticket 3 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image src="/lion-air.png" width={100} height={10} />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Lion Air
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>

            {/* Ticket 4 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image
                    src="/garuda-indonesia-logo.png"
                    width={100}
                    height={10}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Garuda Indonesia
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                  <Image src="/wifi.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>

            {/* Ticket 5 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image src="/air-asia.png" width={100} height={10} />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Air Asia
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>

            {/* Ticket 6 */}
            <div
              className="flex flex-col gap-10 mt-5 p-7"
              style={{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <div className="flex flex-row items-center gap-10">
                <div>
                  <Image src="/lion-air.png" width={100} height={10} />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "20px",
                  }}
                >
                  Lion Air
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    IDN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    12:33
                  </span>
                </div>
                <div>
                  <Image src="/landing-plane.svg" width={20} height={10} />
                </div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "20px",
                    }}
                  >
                    JPN
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    15:21
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "13px",
                      color: "grey",
                    }}
                  >
                    3 hours 11 minutes
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    (1 transit)
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/koper.svg" width={20} height={10} />
                  <Image src="/burger.svg" width={20} height={10} />
                </div>
                <div className="flex flex-row items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "#2395FF",
                    }}
                  >
                    $214,00
                  </span>
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    /pax
                  </span>
                </div>
                <button
                  className="btn btn-info text-white"
                  style={{ width: 100 }}
                >
                  Select
                </button>
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row gap-5">
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
                  <Image src="/btnbackbottom.svg" width={20} height={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
