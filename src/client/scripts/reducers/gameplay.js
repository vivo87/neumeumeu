function updateCurrentGame(state, game) {
    return game;
}

export default function games(state = null, action) {
    switch (action.type) {
    case 'UPDATE_CURRENT_GAME':
        return updateCurrentGame(state, action.game);
    case 'CLEAR_CURRENT_GAME':
        return null;
    }

    return state;
}
