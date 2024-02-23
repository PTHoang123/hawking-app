import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

//get All chapterID
export async function GET(req: Request, res: Response){
    try{
        const chapters = await prisma.chapter.findMany({
            select: {
                id: true
            }
        });
        return NextResponse.json(chapters);
    }catch(err){
        return NextResponse.json({error: err});
    }
}