import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../config';


const ShareLinkDisplay = () => {
  const { sharelink } = useParams();
  const [shareData, setShareData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${sharelink}`);
        setShareData(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch shared links.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sharelink]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!shareData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Link not found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Shared Links from {shareData.username}</h1>
      {shareData.content.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {shareData.content.map((content) => (
            <div key={content._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '10px' }}>{content.title}</h3>
              <p>
                <strong>Type:</strong> {content.type}
              </p>
              <a href={content.link} target="_blank" rel="noopener noreferrer">
                {content.link}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No links shared.</p>
      )}
    </div>
  );
};

export default ShareLinkDisplay;