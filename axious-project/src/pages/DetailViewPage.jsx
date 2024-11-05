import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetailViewPage.css'; // Import custom styles for the DetailViewPage

const DetailViewPage = () => {
  const { id } = useParams(); // Get post ID from URL
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Fetch post details from the API
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Function to navigate back to the posts list
  const handleBackToList = () => {
    navigate('/list');
  };

  return (
    <div className="detail-view">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="back-button" onClick={handleBackToList}>
        Back to Posts List
      </button>
    </div>
  );
};

export default DetailViewPage;
