import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UseEffectPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("데이터 불러오기 실패:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>UseEffect Page</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/">Go to Main Page</Link> |{" "}
        <Link to="/axios">Go to Axios Page</Link>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>
            #{post.id} - {post.title}
          </h3>
          <p>{post.body}</p>
          <p>
            <strong>User ID:</strong> {post.userId}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UseEffectPage;