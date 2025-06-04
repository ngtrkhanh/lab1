import React, { useEffect, useState } from 'react';
import './App.scss';
// ...existing code...

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  // Hàm xử lý khi click "Delete"
  const handleDelete = (id) => {
    const updatedData = data.filter(user => user.id !== id);
    setData(updatedData);
  };

  return (
    <div>

      {data.length === 0 ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        data.map((user) => (
          <div
            key={user.id}
            className="user-card"
          >
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>IP Address:</strong> {user.ipAddress || 'Default'}</p>
            <p><strong>Country:</strong> {user.country}</p>

            {user.isDelete && (
              <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
