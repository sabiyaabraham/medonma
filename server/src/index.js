const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const axios = require("axios");
const localtunnel = require("localtunnel");

dotenv.config({ path: "./config.env" });

require("./lib/account");
require("@ajayos/nodelog");

const app = require("./src/server");

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const { promisify } = require("util");

const { User } = require("./src/Models");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

const startLocalTunnel = async (subdomain) => {
  try {
    const tunnel = await localtunnel({ port, subdomain });
    console.log(`LocalTunnel URL: ${tunnel.url}`);
    console.log(tunnel.url);
  } catch (err) {
    console.error(err);
  }
};

const checkSubdomainAvailability = async (subdomain) => {
  try {
    const response = await axios.get(`https://${subdomain}.loca.lt/available`);
	if(response.data.available) {
		console.log(`Subdomain "${subdomain}" is not available. Waiting for it to stop...`);
    		await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay

    		return await checkSubdomainAvailability(subdomain);
	}
    return await startLocalTunnel(subdomain);
  } catch (error) {
	console.log(error.message)
	return await startLocalTunnel(subdomain);
   };
}

server.listen(port, async () => {
  log(`App running on port = ${port} ...`);

  try {
    // Fetch public IP using an external service
    const { data: { ip } } = await axios.get("https://api64.ipify.org?format=json");
    console.log(`Public IP Address: ${ip}`);
  } catch (err) {
    console.error("Error fetching public IP:", err.message);
  }

  const subdomain = "keerthana-backend-server";
  await checkSubdomainAvailability(subdomain);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT Exception! Shutting down ...");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});