import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Navigation";

function UseEffectPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data);
        console.log("데이터 받아옴:", response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4">
      <Navigation />
      <h1 className="text-3xl font-bold text-center text-blue-700 my-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="border border-blue-300 p-4 rounded-lg shadow bg-white">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-1">User ID: {post.userId}</p>
            <p className="text-gray-600 text-sm mb-3">Post ID: {post.id}</p>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectPage;


