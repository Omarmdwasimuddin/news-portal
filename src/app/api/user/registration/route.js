import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        reqBody.otp="0";
        const prisma=new PrismaClient();
        const result=await prisma.user.create({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}