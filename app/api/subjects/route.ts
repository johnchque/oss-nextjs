import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
//import { isTeacher } from "@/lib/teacher";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { title } = await req.json();

        //if (!userId || !isTeacher(userId)) {
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.subject.create({
            data: {
                userId,
                title,
            }
        });

        console.log(course);
        return NextResponse.json(course);
    } catch (error) {
        console.log("[COURSES]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
