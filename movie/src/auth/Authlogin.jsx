import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Authlogin = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if (isLoading) return; // Wait until Auth0 has finished loading
        
        if (isAuthenticated && user) {
            async function sendData(data) {
                try {
                    const response = await fetch('https://movies-1-ngpz.onrender.com/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });
                    if (!response.ok) {
                        throw new Error('Network Response was not ok');
                    }
                    setLogged(true);
                } catch (error) {
                    console.log('Error sending data', error);
                }
            }
            sendData(user);
        }
    }, [isAuthenticated, isLoading, user]);

    useEffect(() => {
        if (logged) {
            navigate('/', { state: { user: user } });
        }
    }, [logged, navigate, user]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {isAuthenticated ? <div>Welcome, {user.name}</div> : <div>Waiting for login...</div>}
        </div>
    );
};

export default Authlogin;
