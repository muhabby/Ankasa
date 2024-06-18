/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Link from "next/link";

const footer = () => {
  return (
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
          <span
            style={{
              fontFamily: "poppins",
              fontSize: "17px",
            }}
          >
            Find your Flight and explore the world with us. We will take care of
            the rest.
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
          <Image src="/app-store.png" width={200} height={35} />
          <Image src="/g-play.png" width={200} height={35} />
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
              <Image src="/facebook.svg" width={25} height={35} />
              <Image src="/twitter.svg" width={25} height={35} />
              <Image src="/instagram.svg" width={25} height={35} />
              <Image src="/youtube.svg" width={30} height={35} />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Image src="/map-pin.svg" width={20} height={35} />
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
  );
};

export default footer;
