import { API_BASE_URL } from '../../services/api';

// Função para realizar o login
export const loginAPI = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Erro ao fazer login');
        }

        const data = await response.json();
        return data; // Pode conter o token ou informações de usuário
    } catch (error) {
        throw new Error('Erro ao fazer login');
    }
};

// Função para realizar o logout
export const logoutAPI = async () => {
    // Lógica para enviar uma requisição de logout para o servidor, se necessário
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
    // Lógica para verificar se o token está presente e não expirou
};

// Função para recuperar o token do armazenamento local
export const getToken = () => {
    // Lógica para recuperar o token do local storage ou cookies
};

// Função para remover o token do armazenamento local
export const removeToken = () => {
    // Lógica para remover o token do local storage ou cookies
};