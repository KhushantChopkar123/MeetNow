
const server = import.meta.env.MODE === "production"
  ? "https://meetnow-gjgc.onrender.com"
  : "http://localhost:8000";


export default server;