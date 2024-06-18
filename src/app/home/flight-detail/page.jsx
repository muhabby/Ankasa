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
} from "react-ionicons";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Switch,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

const Page = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("Indonesia");
  const [phoneNum, setPhoneNum] = useState("+62");
  const { countries } = useCountries();

  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const sortedCountriesNum = countries.sort((a, b) =>
    a.countryCallingCode.localeCompare(b.countryCallingCode)
  );

  return (
    <>
      <Navbar />
      <main className="flex flex-col" style={{ height: 1420 }}>
        {/*Content */}
        <div
          className="flex items-center relative"
          style={{
            width: "auto",
            backgroundColor: "#2395FF",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Image
            alt=""
            src="/logo-white.png"
            width={200}
            height={35}
            style={{ opacity: 0.1 }}
          />
          <div
            className="flex flex-col gap-10 p-10 absolute"
            style={{
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              // backgroundColor: "red",
              // opacity: 0.5,
            }}
          >
            <div className="flex flex-row justify-between">
              {/* Contact Person Detail */}
              <div className="flex flex-col" style={{ width: "67%" }}>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "22px",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Contact Person Details
                </span>
                <div
                  className="mt-5 p-10"
                  style={{
                    height: "auto",
                    width: "auto",
                    backgroundColor: "white",
                    // borderColor: "black",
                    // borderWidth: 1,
                    borderRadius: 15,
                  }}
                >
                  {/* Full Name */}
                  <div className="mb-7">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Full Name
                    </span>
                    <Input
                      type="text"
                      variant="static"
                      placeholder="Full Name"
                      defaultValue="Nama"
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-7">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
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
                      }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mb-7">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Phone Number
                    </span>
                    <div className="flex flex-row justify-between gap-5">
                      <div className="w-50">
                        <Select
                          variant="static"
                          value={phoneNum}
                          onChange={(val) => setPhoneNum(val)}
                          style={{
                            fontFamily: "poppins",
                            fontSize: "15px",
                          }}
                        >
                          {sortedCountriesNum.map(({ countryCallingCode }) => (
                            <Option
                              key={countryCallingCode}
                              value={countryCallingCode}
                              className="flex items-center gap-2"
                              style={{
                                fontFamily: "poppins",
                                fontSize: "15px",
                              }}
                            >
                              {countryCallingCode}
                            </Option>
                          ))}
                        </Select>
                      </div>
                      <Input
                        type="tel"
                        variant="static"
                        placeholder="Phone Number"
                        defaultValue="8xxx"
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Alert */}
                  <div
                    className="flex flex-row p-2 items-center"
                    style={{
                      backgroundColor: "#F245451A",
                      height: 50,
                      borderRadius: 10,
                    }}
                  >
                    <AlertCircleOutline
                      color="red"
                      height="20px"
                      width="20px"
                      style={{ marginLeft: 5, marginRight: 10 }}
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                      }}
                    >
                      Make sure the customer data is correct.
                    </span>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="flex flex-col" style={{ width: "30%" }}>
                <div className="flex flex-row justify-between items-center">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    Flight Details
                  </span>
                  <Link
                    href={"#"}
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    View Details
                  </Link>
                </div>
                <div
                  className="flex flex-col gap-7 mt-5 p-7"
                  style={{
                    height: "auto",
                    width: "auto",
                    backgroundColor: "white",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    // borderRadius: 15,
                  }}
                >
                  <div className="flex flex-row items-center gap-5">
                    <div>
                      <Image
                        alt=""
                        src="/garuda-indonesia-logo.png"
                        width={70}
                        height={10}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      Garuda Indonesia
                    </span>
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Medan (IDN)
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
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Tokyo (JPN)
                    </span>
                  </div>

                  <div className="flex flex-row items-center gap-5">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                      }}
                    >
                      Sunday, 15 August 2020
                    </span>
                    <div
                      style={{
                        height: 5,
                        width: 5,
                        backgroundColor: "black",
                        borderRadius: 10,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                      }}
                    >
                      12:33 - 15:21
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                      <CheckmarkCircleOutline
                        color="#2395FF"
                        height="20px"
                        width="20px"
                      />
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                          color: "#2395FF",
                        }}
                      >
                        Refundable
                      </span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <CheckmarkCircleOutline
                        color="#2395FF"
                        height="20px"
                        width="20px"
                      />
                      <span
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                          color: "#2395FF",
                        }}
                      >
                        Can reschedule
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-row items-center justify-between gap-7 mt-1 p-7"
                  style={{
                    height: "auto",
                    width: "auto",
                    backgroundColor: "white",
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    // borderRadius: 15,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Total Payment
                  </span>
                  <div className="flex flex-row gap-2 items-center">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#2395FF",
                      }}
                    >
                      $ 145,00
                    </span>
                    <ChevronDownOutline
                      color="#2395FF"
                      height="20px"
                      width="20px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Passanger Details */}
            <div className="flex flex-col" style={{ width: "67%" }}>
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                Passenger Details
              </span>
              <div
                className="flex flex-col mt-5 p-10 gap-7"
                style={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "white",
                  // borderColor: "black",
                  // borderWidth: 1,
                  borderRadius: 15,
                }}
              >
                {/* Alert */}
                <div
                  className="flex flex-row justify-between p-5 items-center"
                  style={{
                    backgroundColor: "#2395FF1A",
                    height: 50,
                    borderRadius: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "12px",
                    }}
                  >
                    Passenger : 1 Adult
                  </span>
                  <div className="flex flex-row gap-4 items-center">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "12px",
                      }}
                    >
                      Same as contact person
                    </span>
                    <Switch
                      id="custom-switch-component"
                      ripple={false}
                      className="h-full w-full checked:bg-[#2395FF]"
                      containerProps={{
                        className: "w-11 h-6",
                      }}
                      circleProps={{
                        className: "before:hidden left-0.5 border-none",
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Title
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
                      Select title
                    </Option>
                    <Option
                      value="Mr."
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      Mr.
                    </Option>
                    <Option
                      value="Mrs."
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      Mrs.
                    </Option>
                  </Select>
                </div>

                {/* Full Name */}
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Full Name
                  </span>
                  <Input
                    type="text"
                    variant="static"
                    placeholder="Full Name"
                    defaultValue="Name"
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  />
                </div>

                {/* Nationality */}
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Nationality
                  </span>
                  <Select
                    variant="static"
                    value={selected}
                    onChange={(val) => setSelected(val)}
                    style={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                    }}
                  >
                    {sortedCountries.map(({ name, flags }) => (
                      <Option
                        key={name}
                        value={name}
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: "poppins",
                          fontSize: "15px",
                        }}
                      >
                        {name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="flex flex-col" style={{ width: "67%" }}>
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "22px",
                  fontWeight: "500",
                }}
              >
                Passenger Details
              </span>
              <div
                className="flex flex-col gap-7 mt-5 py-5 pl-4 pr-7"
                style={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "white",
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  // borderRadius: 15,
                }}
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-1">
                    <Checkbox
                      ripple={false}
                      className="h-5 w-5 border-[#2395FF] bg-gray-900/5 transition-all hover:scale-105 hover:before:opacity-0 checked:bg-[#2395FF] checked:border-[#2395FF]"
                    />
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "15px",
                      }}
                    >
                      Travel Insurance
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <span
                      style={{
                        fontFamily: "poppins",
                        fontSize: "17px",
                        color: "#2395FF",
                        fontWeight: "500",
                      }}
                    >
                      $ 2,00
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
                </div>
              </div>

              <div
                className="flex flex-row items-center justify-between gap-7 mt-1 p-7"
                style={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "white",
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  // borderRadius: 15,
                }}
              >
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                  }}
                >
                  Get travel compensation up to $ 10.000,00
                </span>
              </div>
            </div>
            <Link
              href={"/home/flight-detail/payment"}
              className="flex flex-col"
              style={{ width: "67%" }}
            >
              <Button variant="gradient" color="blue" style={{ height: 50 }}>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                >
                  Proceed To Payment
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
