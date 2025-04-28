import { io, Socket } from 'socket.io-client';
import { StartGameData } from '../handlers/socketHandlers/handleStartGame';

const SOCKET_URL = import.meta.env.VITE_BASE_URL as string;

export class SocketService {
  public socket: Socket;
  public onGameStartedCallback: ((data: StartGameData) => void) | null = null;

  private constructor() {
    const token = sessionStorage.getItem('accessToken');
    this.socket = io(SOCKET_URL, {
      autoConnect: false,
      auth: { token },
    });
  }
  private static instance: SocketService;

  static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
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

  public off<T>(event: string, callback: (...args: T[]) => void) {
    this.socket.off(event, callback); // 👈 ici
  }

  public emit<T>(event: string, data: T): void {
    this.socket.emit(event, data);
  }

  public setOnGameStartedCallback(callback: (data: StartGameData) => void) {
    this.onGameStartedCallback = callback;
  }
}
