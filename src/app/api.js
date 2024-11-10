import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const registerUser = async user => {
    try {
        const { data } = await axiosInstance.post(`/users/register`, user);

        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const loginUser = async (email, password) => {
    try {
        const { data } = await axiosInstance.post(`/users/login`, {
            email,
            password,
        });

        return data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
};
