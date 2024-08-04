import { Post } from "@/lib/models"
import { connectDb } from "@/lib/utils"
import Error from "next/error"
import { NextResponse } from "next/server"





export const GET = async (request , {params}) => {

const {slug} = params;


    try {
        connectDb()
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);
        throw new Error('failed to fetch post')
    }
}