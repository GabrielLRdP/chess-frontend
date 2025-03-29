import { io, Socket } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_BASE_URL as string;

export class SocketService {
  private socket: Socket;

  constructor() {
    const token = sessionStorage.getItem('accessToken');
    this.socket = io(SOCKET_URL, {
      autoConnect: false,
      auth: { token },
    });
  }

  public connect(): void {
    const token = sessionStorage.getItem('accessToken');
    this.socket.auth = { token };
    if (!this.socket.connected) {
      this.socket.connect();
    }
  }

  public disconnect(): void {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  }

  public on<T>(event: string, callback: (data: T) => void): void {
    this.socket.on(event, callback);
  }

  public emit<T>(event: string, data: T): void {
    this.socket.emit(event, data);
  }
}
