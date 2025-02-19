// filepath: /Users/jobvious-pc03/Desktop/test-dev/next-portfolio/src/config/axios-interceptor.ts
import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Access the environment variable
	timeout: 10000, // Request timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		// Log the request
		console.log("Request:", config);
		// You can add headers or other configurations here
		return config;
	},
	(error) => {
		// Handle request error
		console.error("Request error:", error);
		return Promise.reject(error);
	}
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response) => {
		// Log the response
		console.log("Response:", response);
		return response;
	},
	(error) => {
		// Handle response error
		console.error("Response error:", error);
		// You can handle specific status codes here
		if (error.response && error.response.status === 401) {
			// Handle unauthorized error
			console.error("Unauthorized, redirecting to login...");
			// Redirect to login or perform other actions
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
