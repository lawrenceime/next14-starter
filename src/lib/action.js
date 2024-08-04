'use server'


import { connectDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async(formData) => {
 
  

   
    const {title , desc , slug, userId} = Object.fromEntries(formData);

    try {
      connectDb();
      const newPost = new Post({
        title,
        desc,                                                                                                                                 
        slug,
        userId,
      })
      await newPost.save()
      console.log('Saved to the database');
      revalidatePath('/blog')
      
    } catch (error) {
      console.log(error);
      return {error : 'Something went wrong!'}
      
    }

    console.log(title,desc,slug , userId);
}

export const deletePost = async(formData) => {
 

    const {id} = Object.fromEntries(formData);

    try {
      connectDb();
     await Post.findByIdAndDelete(id)

   
      console.log('Deleted from the datbase');
      revalidatePath('/blog')
      
    } catch (error) {
      console.log(error);
      return {error : 'Something went wrong!'}
      
    }

    
}