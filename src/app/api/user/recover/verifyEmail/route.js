import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"
import {SendEmail} from "@/utility/EmailUtility";
export async function GET(req,res){
    try {
        const prisma=new PrismaClient();
        let {searchParams}=new URL(req.url);
        let email= searchParams.get('email');
        // User Count
        const count=await prisma.user.count({where:{email:email}});
        if(count===1){
            let code=Math.floor(100000+Math.random()*900000);
            let EmailText=`Your OTP Code is=${code}`
            let EmailSubject="Next News Verification Code";
            await SendEmail(email,EmailText,EmailSubject);

            let result= await prisma.user.update({
                where:{email:email},
                data:{otp:code.toString()}
            })
            return  NextResponse.json({status:"success",data:"6 Digit OTP Code has been sent to your email"})
        }
        else{
            return  NextResponse.json({status:"fail",data:"No user found"})
        }
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}