import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListViewPage.css'; // Import styling for the ListViewPage

const ListViewPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="list-view">
      <h2>Posts List</h2>
      <div className="cards-container">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.body.substring(0, 100)}...</p>
              <Link to={`/detail/${post.id}`} className="card-link">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListViewPage;
