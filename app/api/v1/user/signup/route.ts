import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"

const client=new PrismaClient()

export async  function POST(req:NextRequest){
    const body= await req.json()

    await client.user.create({
        data:{
            email:body.email,
            password:body.password
        }
    })

    return NextResponse.json({
        yourEmail:body.email,
        yourPassword:body.password
    })
}

export function GET(){
    return NextResponse.json({
        msg:"hey buddy"
    })
}