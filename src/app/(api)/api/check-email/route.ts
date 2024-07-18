import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required", status: 400 });
  }

  try {
    const { data } = await axios.get("http://0.0.0.0:8055/users", {
      params: {
        "filter[email][_eq]": email,
      },
    });

    if (data.data && data.data.length > 0) {
      return NextResponse.json({ registered: true, status: 200 });
    } else {
      return NextResponse.json({ registered: false, status: 200 });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      error,
      status: 200,
    });
  }
}
