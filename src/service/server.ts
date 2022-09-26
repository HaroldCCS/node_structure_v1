//Librerias
import express, { Application } from "express";
import http from "http";
import { Server as ServerSocket } from 'socket.io'

//Instancias
import instance_middlewares from "../middlewares";
import instance_databases from "./../databases";
import instance_routes from "../router";
import instance_sockets from "../sockets";


class Server {
	private app: Application;
	private app_socket: any;
	private io: ServerSocket;
	private port: string;
	private general_path: string = "/api";


	constructor() {
		this.app = express();
		this.app_socket = http.createServer(this.app);
		this.io = require('socket.io')(this.app_socket, { cors: { origin: "*" } });
		this.port = process.env.PORT || "8000";
		this.app.use(this.general_path, instance_routes);

		instance_sockets(this.io);
		instance_middlewares(this.app)
		instance_databases()
	}


	listen() {
		this.app_socket.listen(this.port, () => { console.log("Servidor corriendo en puerto " + this.port) });
	}
}

export default new Server();
