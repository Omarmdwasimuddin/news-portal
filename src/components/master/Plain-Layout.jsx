import React from 'react';
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";
import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";

export const dynamic = "force-dynamic";

async function getData(){
    let socials= (await (await fetch(`${process.env.BASE_URL}/api/social`)).json())['data']
    let categories= (await (await fetch(`${process.env.BASE_URL}/api/category`)).json())['data']
    return {socials:socials,categories:categories}
}



const PlainLayout = async (props) => {
    const data=await getData();


    const cookieStore =await cookies()
    const token = cookieStore.get('token')
    let isLogin=false
    isLogin = typeof token !== "undefined";






    return (
        <>
            <AppNavBar isLogin={isLogin} data={data}/>
            {props.children}

            <Toaster position="bottom-center"/>

            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;