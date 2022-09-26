import { Server as ServerSocket } from 'socket.io';
import { msgFormat } from '../utils/formatObjectUtility';


export default function socketChat(_io: ServerSocket) {
  const nameSpaceChat = _io.of('/chat');

  nameSpaceChat.on('connection', function (socket: any) {

    socket.channel = "";
    socket.username = ""

    socket.on("joinChannel", function (_data: any) {
      socket.channel = _data.channel;
      socket.join(_data.channel)
    });


    socket.on("setName", function (_name: string) {
      socket.username = _name;
      socket.to(socket.channel).emit("message", msgFormat('se ha conectado', socket.username, 'connect'));
    });


    socket.on("disconnect", function (_data: any) {
      socket.to(socket.channel).emit("message", msgFormat('se ha desconectado', socket.username, 'connect'));
    });


    socket.on("message", function (_message: string) {
      socket.to(socket.channel).emit("message", msgFormat(_message, socket.username, 'msg'));
    });


    socket.on("draw", function (_data: any) {
      socket.to(socket.channel).emit("draw", _data);
    });
  });
}
