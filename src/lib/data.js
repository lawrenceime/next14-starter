// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

import { Post , User } from "./models"
import { connectDb } from "./utils"

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async() => {
   try {
     await connectDb();
    const posts = await Post.find()
    return posts;
   } catch (error) {
    console.error('Error fetching posts:' ,  error.message)
    throw new Error('Failed to fetch posts')
   }
}

export const getPost = async(slug) => {
     try {
      await connectDb();
      const post = await Post.findOne({slug})
      return post;
     } catch (error) {
      console.error('Error fetching post:' ,  error.message)
      throw new Error('Failed to fetch post')
     }
}

export const getUser = async(id) => {
  try {
    await connectDb();
    const user = await User.findById(id)
    return user;
   } catch (error) {
    console.error('Error fetching user:', error.message);
    throw new Error('Failed to fetch user')
   }
}   

export const getUsers = async() => {
  try {
   await connectDb();
    const users = await User.find()
    return users;
   } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users')
   }
}   