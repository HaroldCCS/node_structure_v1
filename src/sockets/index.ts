import { Server as ServerSocket } from 'socket.io';
import socketChat from './chat';

class Socket {
  public io: ServerSocket | null = null;

  constructor() {
    this.io = null
  }


  public instance_sockets(_io: ServerSocket) {
    this.io = _io;
    this.make_sockets()
  }

  private make_sockets(){
    socketChat(this.io as any)
  }
}

const instance_socket = new Socket()
export default instance_socket.instance_sockets;