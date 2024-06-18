/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MailOutline, NotificationsOutline, SearchOutline } from "react-ionicons";
import { Input } from "@material-tailwind/react";

const navbar = () => {
  return (
    <navbar
      className="flex flex-row justify-between items-center p-10"
      style={{ height: 80, backgroundColor: "white" }}
    >
      {/* Logo */}
      <Link href={"/home"} className="flex flex-row">
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
      </Link>

      {/* Search */}
      <div>
        <Input
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

      {/* Message, notif, and profile */}
      <div className="flex flex-row gap-10 items-center">
        <MailOutline color="black" height="25px" width="25px" />
        <NotificationsOutline color="black" height="25px" width="25px" />
        <Link
          href={"/profile"}
          style={{
            height: 35,
            width: 35,
            backgroundImage: "url('/profile.jpg')",
            backgroundSize: "cover",
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "#2395FF",
          }}
          className="border border-solid"
        ></Link>
      </div>
    </navbar>
  );
};

export default navbar;
