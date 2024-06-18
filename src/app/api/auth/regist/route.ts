import { registSchema } from "@/helper/validation/registSchema";
import axios from "axios";

const base_url = process.env.base_url;

export async function POST(req: Request) {
  const data = await req.json();
  const validation = registSchema.safeParse(data);

  if (!validation.success) {
    return Response.json(validation.error.format(), { status: 400 });
  }

  try {
    const response = await axios.request({
      method: "POST",
      url: `${base_url}/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return Response.json({ ...response?.data }, { status: 200 });
  } catch (error) {
    return Response.json({ error, req }, { status: 500 });
  }
}
