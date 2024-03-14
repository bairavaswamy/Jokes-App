import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedin = localStorage.getItem("isLoggedIn");
        if(!isLoggedin){
            navigate("/");
        }else{
            fetchData();
        }
        
    }, [navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10");
            const jsonData = await response.json();
            setData(jsonData.jokes);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const onRefresh = () =>{
        fetchData();
    } 
    const loginDirect = () =>{
        navigate("/")
        localStorage.removeItem("isLoggedIn")
    }

    return (
        <div className="fluid-container p-4" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
        {loading ? (
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            <div className="d-flex flex-column justify-content-center align-items-center p-2" style={{ height: "100vh" }}>
            <ul className="list-group">
            <h1 className="title text-center">Jokes</h1>
                {data.map(item =>
                    (<li className="list-group-item" key={item.joke}>{item.joke}</li>)
                )}
            </ul>
            <div className="d-flex justify-content-center ">
            <button className="btn btn-outline-success m-1" onClick={onRefresh}>Refresh</button>
            <button className="btn btn-outline-primary m-1" onClick={loginDirect}>Logout</button>
            </div>
            </div>
        )}
    </div>
</div>

    );
};

export default Home;
