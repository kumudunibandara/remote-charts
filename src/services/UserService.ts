import axios from "axios";
//utils

export const API_URL = "https://heartpace-users.onrender.com/users"; // Mock API URL

export type User = {
    id: number;
    name: string;
    age: number;
    city: string;
    country: string;
};


export const getUsersInfo = async (
): Promise<{ rows: User[]; lastRow: number }> => {
    try {
        // Fetch Data
        const response = await axios.get(API_URL);

        return {
            rows: response.data,
            lastRow: 0,
        };
    } catch (error) {
        throw error;
    }
};
