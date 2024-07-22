import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await axios.get(`http://0.0.0.0:8055/items/homePage`);

    const itemCount = response.data.data.test.length;

    if (itemCount >= 3) {
      return NextResponse.json(
        {
          error: "Нельзя создавать более 3 элементов в этой коллекции.",
        },
        { status: 400 },
      );
    } else {
      // Если меньше, продолжайте с добавлением элемента
      return NextResponse.json({ message: "Успех" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error checking item count:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
