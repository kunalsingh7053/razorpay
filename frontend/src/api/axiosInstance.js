import axios from 'axios';

const api = axios.create({
baseURL: 'https://razorpay-x28t.onrender.com/api',
withCredentials: true,

})
export default api; 