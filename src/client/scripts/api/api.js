let socket,
    store;

function init(_socket, _store) {
    socket = _socket;
    store = _store;
    window.socket = socket;
}

function getAuthToken() {
    return store.getState().authentication.token;
}

function emitAction(action) {
    return new Promise((resolve, reject) => {
        if (!socket) {
            return reject('Api was not initialized');
        }

        socket.emit('action', action, (result) => {
            if (result.errors) {
                return reject(result.errors);
            }

            return resolve(result);
        });
    });
}

function login(username, password) {
    return emitAction({
        type: 'LOGIN',
        username,
        password
    });
}

function logout() {
    return emitAction({
        type: 'LOGOUT',
        token: getAuthToken()
    });
}

function register(newUser) {
    return emitAction({
        type: 'REGISTER',
        user: newUser
    });
}

function associateSocketToPlayer(playerId, socketId) {
    return emitAction({
        type: 'ASSOCIATE_PLAYER_TO_SOCKET',
        playerId,
        socketId
    });
}

function getGame(id) {
    return emitAction({
        type: 'GET_GAME',
        token: getAuthToken(),
        id
    });
}

function fetchGames() {
    return emitAction({
        type: 'UPDATE_GAMES'
    });
}

function createGame(game) {
    return emitAction({
        type: 'CREATE_GAME',
        token: getAuthToken(),
        game
    });
}

function joinGame(id, password) {
    return emitAction({
        type: 'JOIN_GAME',
        token: getAuthToken(),
        id,
        password
    });
}

function startGame(id) {
    return emitAction({
        type: 'START_GAME',
        token: getAuthToken(),
        id
    });
}

function playCard(gameId, cardValue) {
    return emitAction({
        type: 'PLAY_CARD',
        token: getAuthToken(),
        gameId,
        cardValue
    });
}

function joinRoom(id) {
    return emitAction({
        type: 'JOIN_ROOM',
        token: getAuthToken(),
        id
    });
}

function leaveRoom(id) {
    return emitAction({
        type: 'LEAVE_ROOM',
        token: getAuthToken(),
        id
    });
}

export default {
    init,

    login,
    logout,
    register,
    associateSocketToPlayer,

    joinRoom,
    leaveRoom,

    createGame,
    fetchGames,
    getGame,
    joinGame,

    startGame,
    playCard
};
