import React, { useState, useEffect } from 'react';

async function fetchData() {
    try {
        const response = await fetch("https://0f7e-2409-4081-2c92-b0a9-b4c5-398a-8b19-e29e.ngrok-free.app/trovu/data");
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

function TableBack() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData()
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {data ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Filename</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.Username}</td>
                                <td>{item.Filename}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TableBack;
