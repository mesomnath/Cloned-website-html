export const getPosts = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method:'GET',})
    if (!response.ok) {
        throw new Error(`Failed to fetch posts`);
    }

    return response.json();
}


export const getPostDetails = async(postId) => {
    const GETURL = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const response = await fetch(GETURL, {method:'GET',})

    if (!response.ok) {
        throw new Error(`Failed to fetch post ${postId}`);
    }

    return response.json();
}