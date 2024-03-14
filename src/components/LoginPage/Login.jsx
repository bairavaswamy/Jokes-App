import { useState } from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const onLogin = async (event) => {
        event.preventDefault();
        
        try {
            if (username === "bairavaswamy" && password === "bairavaswamy123") {
                setErrorMessage("");
                localStorage.setItem("isLoggedIn",true)
                navigate("/home")
                
            } else {
                setErrorMessage("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error.message);
            setErrorMessage("An error occurred during login");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center p-4">
                <div className="col-sm-12 col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-danger">User Details</h1>
                            <p>Username: bairavaswamy</p>
                            <p>Password: bairavaswamy123</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-12 col-md-8 col-lg-6">
                    <div className="card">
                        <form className="card-body d-flex flex-column align-items-start m-2" onSubmit={onLogin}>
                            <h1 className="card-title d-flex align-self-center">User Login</h1>
                            <label className="card-subtitle mt-2" htmlFor="username">Username</label>
                            <input 
                                id="username" 
                                className="form-control" 
                                placeholder="Enter Username" 
                                required 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            <label className="card-subtitle mt-2" htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter Password" 
                                required 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <button type="submit" className="btn btn-primary d-flex align-self-center p-2 m-2">Login</button>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
