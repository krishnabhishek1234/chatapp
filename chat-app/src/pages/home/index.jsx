import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [roomCode, setRoomCode] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`, { state: { userName } });
    };

    return (
        <div className="home-page">
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Enter Room Code</label>
                    <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
                </div>
                <br></br>
                <div>
                    <label>Enter Your Name</label>
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <br></br>
                <button type="submit">Enter room</button>
            </form>
        </div>
    );
};

export default HomePage;
