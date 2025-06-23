import {PrismaClient} from "@/generated/prisma";
import {NextResponse} from "next/server";
import {headers} from "next/headers";


export async function GET(req,res) {
    try{
        let headerList=await headers();
        let id=parseInt(headerList.get('id'));

        const prisma=new PrismaClient();
        const result=await prisma.comment.findMany({
            where: {userId:id},
            include:{
                news_list:{select: {title: true}}
            }
        })


        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}



export async function POST(req,res) {
    try{
        let headerList=headers();
        let id=parseInt(headerList.get('id'));

        let reqBody=await req.json();
        reqBody.userId=id;

        const prisma=new PrismaClient();
        const result=await prisma.comment.create({
            data:reqBody
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        console.log(error.message)
        return  NextResponse.json({status:"fail",data:e})
    }
}



export async function DELETE(req,res) {
    try{
        let headerList=headers();
        let user_id=parseInt(headerList.get('id'));

        let reqBody=await req.json();

        const prisma=new PrismaClient();
        const result=await prisma.comment.deleteMany({
            where: {
                AND: [
                    { userId: user_id },
                    { id: parseInt(reqBody['id']) },
                ],
            },
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}