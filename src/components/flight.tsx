import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronDownOutline } from "react-ionicons";

// Define the types for the data structure
interface Airline {
  photo: string;
  name: string;
  from: {
    code: string;
  };
  to: {
    code: string;
  };
  transit: number;
  price: number;
}

const getData = async (): Promise<Airline[]> => {
  const res = await fetch("http://147.139.210.135:3000/airlines/flight");

  if (!res.ok) {
    throw new Error("Failed get data");
  }

  const result = await res.json();
  const airlines: Airline[] = result.data;
  return airlines;
};

const Flight: React.FC = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setAirlines(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {airlines.map((item, index) => (
        <div
          key={index}
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
              <Image src={item.photo} alt={item.name} width={100} height={10} />
            </div>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "20px",
              }}
            >
              {item.name}
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
                {item.from.code}
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
            <Image alt="" src="/landing-plane.svg" width={20} height={10} />
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                }}
              >
                {item.to.code}
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
                ({item.transit} transit)
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <Image alt="" src="/koper.svg" width={20} height={10} />
              <Image alt="" src="/burger.svg" width={20} height={10} />
              <Image alt="" src="/wifi.svg" width={20} height={10} />
            </div>
            <div className="flex flex-row items-center">
              <span
                style={{
                  fontFamily: "poppins",
                  fontSize: "15px",
                  color: "#2395FF",
                }}
              >
                ${item.price}
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
            <Link href={"/home/flight-detail"}>
              <Button
                variant="filled"
                color="blue"
                style={{ height: 50, width: 100 }}
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
                  Select
                </span>
              </Button>
            </Link>
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
              <ChevronDownOutline color="#2395FF" height="20px" width="20px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flight;
