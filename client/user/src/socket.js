import { io } from 'socket.io-client';

export const socketConnect = () => {
	const URL = 'http://localhost:4000';
	const socket = io(URL, { autoConnect: false });

	// socket.onAny((event, ...args) => {
	// 	console.log(event, args);
	// });

	socket.on('connect_error', (err) => {
		console.error('Error while creating a socket connection:', err);
	});

	socket.connect();
	return socket;
};
