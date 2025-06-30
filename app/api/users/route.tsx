import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const user = await currentUser();

    if (!user) {
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    try {
        // check if the user already exist
        const users = await db.select().from(usersTable)
            // @ts-ignore
            .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
        // if not then create new user
        if (users?.length == 0) {
            const result = await db.insert(usersTable).values({
                // @ts-ignore
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                credits: 10
                // @ts-ignore
            }).returning({ usersTable });
            return NextResponse.json(result[0].usersTable);
        } else {
            // User already exists, return existing user
            return NextResponse.json(users[0]);
        }
    } catch (e) {
        return NextResponse.json({ error: "Internal server error", details: e }, { status: 500 });
    }
}