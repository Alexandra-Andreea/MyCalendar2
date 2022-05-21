import React, { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [datas, setData] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get('/api/data');

        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {datas.map((data) => (
                <div key={data._id}>
                    {data.chatName}
                </div>
            ))}
        </div>
    )
};

export default Home;