// // app/api/products/[id]/route.ts
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import { Product } from "@/models/Product";

// interface Params {
//   params: { id: string };
// }

// export async function GET(request: Request, { params }: Params) {
//   const id=params.id;
//   try {
//     await connectDB();

//     const product = await Product.findById(params.id).lean();

//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     return NextResponse.json({ ...product});
//   } catch (error) {
//     console.error("Failed to fetch product:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch product" },
//       { status: 500 }
//     );
//   }
// }


//********************************* */
// app/api/products/[id]/route.ts
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }  // Next.js expects this
) {
  const { id } = context.params;  // destructure id

  try {
    await connectDB();

    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ ...product });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
