import { io } from 'socket.io-client';

export const socketConnect = () => {
	const URL = 'https://exchange-app-prj.ru';
	const socket = io(URL, {
		secure: true,
		transports: ['websocket', 'polling'],
	  });
	socket.on('connect_error', (err) => {
		console.error('Error while creating a socket connection:', err);
	});
	socket.connect();
	return socket;
};
