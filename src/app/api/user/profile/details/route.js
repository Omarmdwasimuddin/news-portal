import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"
import {headers} from "next/headers";
export async function GET(req,res){
    try {

        let headerList=headers();
        let id=parseInt(headerList.get('id'));
        console.log(id);
        const prisma=new PrismaClient();
        const result=await prisma.user.findUnique({where:{id:id}})
        return  NextResponse.json({status:"success",data:result})


    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}