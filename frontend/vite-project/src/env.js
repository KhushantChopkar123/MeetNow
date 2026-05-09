let IS_PROD = false;
const server = import.meta.env.MODE === "production"
  ? "https://apnacollegebackend.onrender.com"
  : "http://localhost:8000";


export default server;