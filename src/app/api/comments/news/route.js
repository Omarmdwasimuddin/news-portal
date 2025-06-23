import {PrismaClient} from "@/generated/prisma";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();

        let {searchParams}=new URL(req.url);
        let postID= parseInt(searchParams.get('postId'));

        const result=await prisma.comment.findMany({
            where: {postId:postID},
            include:{
                user:{select: {firstName: true}}
            }
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}