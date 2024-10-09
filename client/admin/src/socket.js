import { io } from 'socket.io-client';

export const socketConnect = () => {
	const URL = 'http://server-container:4000';
	const socket = io(URL, { autoConnect: false });  // Убираем autoConnect для ручного управления

	socket.on('connect_error', (err) => {
		console.error('Error while creating a socket connection:', err);
	});
	socket.connect();
	return socket;
};
