import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    timeout: 5000,
    headers: { Accept: "*/*", "Content-Type": "application/json" },
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default {
    getOrderList() {
        return instance({
            url: "/order.json",
            method: "get",
            data: {},
        });
    },
};
