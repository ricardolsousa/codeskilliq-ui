import { useEffect, useState } from 'react';
import { loginAPI } from '../services/authService';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginAPI(username, password);
            // Lógica para armazenar o token e redirecionar o usuário
            debugger
            // Armazenar o token no localStorage
            // localStorage.setItem('token', token);
        } catch (error) {
            setError('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className="App">
            <div>
                <h1>Login</h1>
                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
