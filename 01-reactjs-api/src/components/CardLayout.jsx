import { getPosts, getPostDetails } from "../api";
import { useState, useEffect } from "react";
export const CardLayout = () => {
  const [data, setData] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPosts()
      .then((posts) => {
        setData(posts);
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const viewPost = async (id) => {
    const postDetails = await getPostDetails(id);
    setSelectedPost(postDetails);
  };
  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }
  return (
    <div className="grid grid-cols-4 gap-3 relative">
      {data.map((e) => (
        <div
          key={e.id}
          className="mx-auto max-w-sm items-center bg-white p-4 shadow-sm"
        >
          <span className="bg-green-400 rounded-pill py-1 px-2 rounded-sm text-sm text-muted font-mono font-medium">
            {e.id}
          </span>
          <h2 className="font-bold mb-2 text-xl font-sans mt-2 text-stone-800">
            {e.title}
          </h2>
          <p className="text-slate-600 text-sm">
            {e.body.substring(0, 100)}...
          </p>
          <button
            className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 py-1.5 px-2 rounded-md text-white text-sm font-semibold mt-4 cursor-pointer"
            onClick={() => viewPost(e.id)}
          >
            Read More
          </button>
        </div>
      ))}
{selectedPost && (
  <div className="fixed bottom-0 inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center">
    <div className="bg-white border-sm shadow-md p-8 rounded-lg max-w-lg bottom-0">
      <h3 className="text-2xl font-bold mb-4">{selectedPost.title}</h3>
      <p>{selectedPost.body}</p>
      <button
        onClick={() => setSelectedPost(null)}
        className="mt-4 bg-red-500 text-white py-1.5 px-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};
