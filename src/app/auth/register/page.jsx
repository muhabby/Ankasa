/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <main className="flex flex-row" style={{ height: "100vh" }}>
        {/* Left Content */}
        <div
          className="flex justify-center items-center"
          style={{
            width: "50%",
            backgroundColor: "#2395FF",
          }}
        >
          <Image src="/illustration.png" width={400} height={400} />
        </div>

        {/* Right Content */}
        <div
          className="flex flex-col items-center p-10"
          style={{
            width: "50%",
          }}
        >
          {/* Angkasa */}
          <div
            className="flex flex-row justify-start"
            style={{ height: 70, width: "70%" }}
          >
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

          {/* Form */}
          <div className="flex flex-col gap-5" style={{ width: "70%" }}>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "30px",
                fontWeight: "600",
              }}
            >
              Register
            </span>
            <div className="form-control gap-5">
              <label className="input input-bordered input-info flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Full Name"
                  style={{ fontFamily: "poppins" }}
                />
              </label>
              <label className="input input-bordered  input-info flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  style={{ fontFamily: "poppins" }}
                />
              </label>
              <label className="input input-bordered  input-info flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  style={{ fontFamily: "poppins" }}
                />
              </label>
              <label className="flex flex-row">
                <div className="pr-4">
                  <input type="checkbox" className="checkbox" />
                </div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    textAlign: "start",
                  }}
                >
                  Accept terms and conditon
                </span>
              </label>
              <button className="btn btn-info text-white">
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Sign Up
                </span>
              </button>
            </div>
            <div class="border-t border-y-gray-300"></div>
          </div>

          {/* Sign In */}
          <div className="my-4">
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
              }}
            >
              Already have an account?
            </span>
          </div>
          <button
            className="btn bg-transparent border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500"
            style={{ width: "70%" }}
          >
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Sign In
            </span>
          </button>
        </div>
      </main>
    </>
  );
};

export default page;
