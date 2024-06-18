import axios from "axios";
import { cookies } from "next/headers";
import { loginSchema } from "@/helper/validation/loginSchema";

const base_url = process.env.base_url;

export async function POST(req: Request) {
  const data = await req.json();
  const validation = loginSchema.safeParse(data);

  if (!validation.success) {
    return Response.json(validation.error.format(), { status: 400 });
  }

  try {
    const response = await axios.request({
      method: "POST",
      url: `${base_url}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });

    const token = response?.data?.data?.access_token;
    if (data) {
      cookies().set({
        name: "token",
        value: token,
        secure: true,
        httpOnly: false,
        path: "/",
      });
    }
    return Response.json({ ...response?.data }, { status: 200 });
  } catch (error) {
    return Response.json({ error, req }, { status: 400 });
  }
}
