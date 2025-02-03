// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Nếu bạn dùng axios
import './App.js';
function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Thêm trạng thái loading
    const [error, setError] = useState(null);   // Thêm trạng thái error

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('https://fufu-bvg0.onrender.com/api/data'); // Thay đổi URL nếu cần
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Hiển thị thông báo lỗi
    }

    if (!data) {
        return <div>No data found.</div>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.img} alt={data.title} />
        </div>
    );
}

export default App;