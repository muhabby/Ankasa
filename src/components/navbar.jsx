/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <>
      <main
        className="flex flex-row justify-between items-center p-10"
        style={{height: 80, backgroundColor: 'white' }}
      >
        {/* Logo */}
        <div className="flex flex-row">
          <div className="pr-4">
            <Image src="/logo.png" width={35} height={35} />
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

        {/* Search */}
        <div>
          <label
            className="input input-bordered input-info flex items-center gap-2"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
              height: 45,
              width: 300,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#A3A3A3"
              className="w-6 h-6 opacity-70 mx-1"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Where you want to go?"
              style={{ fontFamily: "poppins", fontSize: "14px" }}
            />
          </label>
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

        {/* Message, notif, and profile */}
        <div className="flex flex-row gap-10">
          <Image src="/mail-outline.svg" width={25} height={25} />
          <Image src="/notifications-outline.svg" width={25} height={25} />
          <div
            style={{
              height: 35,
              width: 35,
              backgroundColor: "white",
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#2395FF",
            }}
          ></div>
        </div>
      </main>
    </>
  );
};

export default navbar;
