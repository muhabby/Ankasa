"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ChevronForwardOutline, SearchOutline } from "react-ionicons";
import { Button, Input } from "@material-tailwind/react";

const Landing: React.FC = () => {
  return (
    <main>
      {/* Navbar */}
      <nav
        className="flex flex-row justify-between items-center px-20"
        style={{ height: 100, backgroundColor: "white" }}
      >
        {/* Logo */}
        <Link href={"/home"} className="flex flex-row">
          <div className="pr-4">
            <Image src="/logo.png" width={35} height={35} alt={""} />
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
        </Link>

        {/* Search */}
        <div>
          <Input
            {...({} as any)}
            icon={<SearchOutline color="grey" height="20px" width="20px" />}
            type="text"
            placeholder="Where you want to go?"
            className="!border !border-[#2395FF] bg-gray-100 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#2395FF] focus:!border-t-[#89a3bb] focus:ring-[#2395FF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[300px]" }}
            style={{
              fontFamily: "poppins",
              fontSize: "12px",
              padding: 15,
            }}
          />
        </div>

        {/* Find Ticket */}
        <div className="flex flex-row gap-20">
          <Link
            href="#"
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            Find Ticket
          </Link>
          <Link
            href="#"
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            My Booking
          </Link>
        </div>

        {/* Sign Up button */}
        <div className="flex">
          <Link href={"/auth/register"}>
            <Button
              className="flex flex-row justify-center items-center"
              type="submit"
              variant="gradient"
              color="blue"
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
      </nav>

      {/* Body */}
      <div className="flex flex-col py-10 w-full h-auto bg-white">
        {/* Slide 1 */}
        <div className="flex flex-row" style={{ height: 700 }}>
          {/* Left content */}
          <div className="flex flex-col" style={{ width: "70%" }}>
            <div className="flex flex-col p-20 gap-3">
              <span
                style={{ fontFamily: "poppins", fontSize: 40, fontWeight: 600 }}
              >
                Find your Flight
              </span>
              <span style={{ fontFamily: "poppins", fontSize: 20 }}>
                and explore the world with us
              </span>
            </div>
            <div
              style={{
                height: 400,
                width: "90%",
                backgroundImage: "url(/landing-image-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
              }}
            ></div>
          </div>

          {/* Right content */}
          <div className="flex flex-col" style={{ width: "30%" }}>
            <div
              className=""
              style={{
                height: 300,
                backgroundImage: "url(/landing-image-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
              }}
            ></div>
            <Image
              className="mt-20 self-center"
              width={200}
              height={200}
              src={"/landing-image-2.png"}
              alt={""}
            ></Image>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="flex flex-col items-center justify-center gap-10 p-20"
          style={{ height: 500 }}
        >
          {/* Trending Destination text */}
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col justify-center">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: 15,
                  color: "#2395FF",
                }}
              >
                Trending
              </span>
              <span
                style={{ fontFamily: "poppins", fontSize: 30, fontWeight: 600 }}
              >
                Destinations
              </span>
            </div>
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: 15,
                  color: "#2395FF",
                }}
              >
                View all
              </span>
            </div>
          </div>

          {/* DestinaXtions card */}
          <div className="w-full flex flex-row justify-between">
            {/* Japan */}
            <div
              className="relative"
              style={{
                height: 270,
                width: 200,
                backgroundImage: "url(/landing-image-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
              }}
            >
              <div
                className="absolute flex flex-col justify-between p-5"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                  backgroundImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              >
                <div
                  className="flex justify-center items-center bg-[#aaaaaa71] p-1"
                  style={{ height: 35, width: 100, borderRadius: 10 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 13,
                      color: "white",
                    }}
                  >
                    15 Airlines
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Tokyo,
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Japan
                    </span>
                  </div>
                  <div
                    className="bg-[#aaaaaa71] flex justify-center items-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                    }}
                  >
                    <ChevronForwardOutline
                      height="20px"
                      width="20px"
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spain */}
            <div
              className="relative"
              style={{
                height: 270,
                width: 200,
                backgroundImage: "url(/landing-image-3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
              }}
            >
              <div
                className="absolute flex flex-col justify-between p-5"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                  backgroundImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              >
                <div
                  className="flex justify-center items-center bg-[#aaaaaa71] p-1"
                  style={{ height: 35, width: 100, borderRadius: 10 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 13,
                      color: "white",
                    }}
                  >
                    22 Airlines
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Barcelona,
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Spain
                    </span>
                  </div>
                  <div
                    className="bg-[#aaaaaa71] flex justify-center items-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                    }}
                  >
                    <ChevronForwardOutline
                      height="20px"
                      width="20px"
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Japan */}
            <div
              className="relative"
              style={{
                height: 270,
                width: 200,
                backgroundImage: "url(/landing-image-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
              }}
            >
              <div
                className="absolute flex flex-col justify-between p-5"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                  backgroundImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              >
                <div
                  className="flex justify-center items-center bg-[#aaaaaa71] p-1"
                  style={{ height: 35, width: 100, borderRadius: 10 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 13,
                      color: "white",
                    }}
                  >
                    15 Airlines
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Tokyo,
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Japan
                    </span>
                  </div>
                  <div
                    className="bg-[#aaaaaa71] flex justify-center items-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                    }}
                  >
                    <ChevronForwardOutline
                      height="20px"
                      width="20px"
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spain */}
            <div
              className="relative"
              style={{
                height: 270,
                width: 200,
                backgroundImage: "url(/landing-image-3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
              }}
            >
              <div
                className="absolute flex flex-col justify-between p-5"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                  backgroundImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              >
                <div
                  className="flex justify-center items-center bg-[#aaaaaa71] p-1"
                  style={{ height: 35, width: 100, borderRadius: 10 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 13,
                      color: "white",
                    }}
                  >
                    22 Airlines
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Barcelona,
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Spain
                    </span>
                  </div>
                  <div
                    className="bg-[#aaaaaa71] flex justify-center items-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                    }}
                  >
                    <ChevronForwardOutline
                      height="20px"
                      width="20px"
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Japan */}
            <div
              className="relative"
              style={{
                height: 270,
                width: 200,
                backgroundImage: "url(/landing-image-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 20,
              }}
            >
              <div
                className="absolute flex flex-col justify-between p-5"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 20,
                  backgroundImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              >
                <div
                  className="flex justify-center items-center bg-[#aaaaaa71] p-1"
                  style={{ height: 35, width: 100, borderRadius: 10 }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 13,
                      color: "white",
                    }}
                  >
                    15 Airlines
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Tokyo,
                    </span>
                    <span
                      style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: 500,
                        fontFamily: "poppins",
                      }}
                    >
                      Japan
                    </span>
                  </div>
                  <div
                    className="bg-[#aaaaaa71] flex justify-center items-center"
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: "100%",
                    }}
                  >
                    <ChevronForwardOutline
                      height="20px"
                      width="20px"
                      color={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="flex flex-col items-center justify-center p-20"
          style={{ height: 700 }}
        >
          <div
            className="flex flex-col relative"
            style={{
              height: 600,
              width: "100%",
              backgroundColor: "#2395FF",
              borderRadius: 50,
            }}
          >
            <Image
              className="ml-5 absolute"
              alt="#"
              src="/landing-image-4.png"
              width={500}
              height={500}
              style={{ opacity: 0.5, left: 0, bottom: 0 }}
            />

            {/* Inside box */}
            <div className="absolute flex flex-col justify-center items-center p-20 w-full h-full gap-7">
              {/* Top text */}
              <div className="flex flex-col items-center w-full">
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  Top
                </span>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: 30,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  5 Destinations
                </span>
              </div>

              {/* Destination rounded card */}
              <div className="flex flex-row justify-between w-full">
                {/* Card 1 */}
                <div className="flex flex-col items-center gap-7">
                  {/* Image */}
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{
                      height: 150,
                      width: 150,
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#2395FF",
                        borderRadius: "100%",
                      }}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{
                          height: 125,
                          width: 125,
                          backgroundImage: "url(/landing-image-5.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    PARIS
                  </span>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center gap-7">
                  {/* Image */}
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{
                      height: 150,
                      width: 150,
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#2395FF",
                        borderRadius: "100%",
                      }}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{
                          height: 125,
                          width: 125,
                          backgroundImage: "url(/landing-image-6.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    BALI
                  </span>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center gap-7">
                  {/* Image */}
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{
                      height: 150,
                      width: 150,
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#2395FF",
                        borderRadius: "100%",
                      }}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{
                          height: 125,
                          width: 125,
                          backgroundImage: "url(/landing-image-7.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    SINGAPORE
                  </span>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center gap-7">
                  {/* Image */}
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{
                      height: 150,
                      width: 150,
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#2395FF",
                        borderRadius: "100%",
                      }}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{
                          height: 125,
                          width: 125,
                          backgroundImage: "url(/landing-image-8.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    AGRA
                  </span>
                </div>

                {/* Card 5 */}
                <div className="flex flex-col items-center gap-7">
                  {/* Image */}
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{
                      height: 150,
                      width: 150,
                      backgroundColor: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      className="flex flex-col justify-center items-center"
                      style={{
                        height: 140,
                        width: 140,
                        backgroundColor: "#2395FF",
                        borderRadius: "100%",
                      }}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{
                          height: 125,
                          width: 125,
                          backgroundImage: "url(/landing-image-9.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    SYDNEY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div
          className="flex flex-row justify-between items-center p-20"
          style={{ height: 500, backgroundColor: "white" }}
        >
          {/* 1 */}
          <div
            className="flex flex-col justify-between"
            style={{ height: "100%", width: "30%" }}
          >
            <div className="flex flex-row">
              <div className="pr-4">
                <Image src="/logo.png" width={35} height={35} alt={""} />
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
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              Find your Flight and explore the world with us. We will take care
              of the rest.
            </span>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              &copy; Ankasa. All Rights Reserved.
            </span>
          </div>

          {/* 2 */}
          <div
            className="flex flex-col gap-5"
            style={{ height: "100%", width: "10%" }}
          >
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Features
            </span>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              Find Ticket
            </span>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              My Booking
            </span>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              Chat
            </span>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
              }}
            >
              Notification
            </span>
          </div>

          {/* 3*/}
          <div
            className="flex flex-col gap-5"
            style={{ height: "100%", width: "20%" }}
          >
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Download Ankasa App
            </span>
            <Image src="/app-store.png" width={200} height={35} alt={""} />
            <Image src="/g-play.png" width={200} height={35} alt={""} />
          </div>

          {/* 4 */}
          <div
            className="flex flex-col justify-between"
            style={{ height: "100%", width: "20%" }}
          >
            <div className="flex flex-col gap-5">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                Follow Us
              </span>
              <div className="flex flex-row gap-5">
                <Image src="/facebook.svg" width={25} height={35} alt={""} />
                <Image src="/twitter.svg" width={25} height={35} alt={""} />
                <Image src="/instagram.svg" width={25} height={35} alt={""} />
                <Image src="/youtube.svg" width={30} height={35} alt={""} />
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Image src="/map-pin.svg" width={20} height={35} alt={""} />
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "17px",
                }}
              >
                Jakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
