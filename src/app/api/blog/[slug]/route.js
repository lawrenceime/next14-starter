import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectDb();
        const post = await Post.findOne({ slug });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.log('Error fetching post:', error);
        return NextResponse.json({ error: 'Failed to fetch post', details: error.message }, { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectDb();
        const post = await Post.deleteOne({ slug });

        if (post.deletedCount === 0) {
            return NextResponse.json({ error: "Post not found or already deleted" }, { status: 404 });
        }

        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
        console.log('Error deleting post:', error);
        return NextResponse.json({ error: 'Failed to delete post', details: error.message }, { status: 500 });
    }
};
