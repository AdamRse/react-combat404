import { configureStore } from "@reduxjs/toolkit";
import fightReducer, { setGameStatus } from '../features/fight/fightSlice';

// Middleware pour vérifier les conditions de victoire ou de défaite
const victoryDefeatMiddleware = store => next => action => {
  // Passer l'action au prochain middleware/reducer
  const result = next(action);

  // Ne pas vérifier les conditions pour l'action `setGameStatus`
  if (action.type === setGameStatus.type) {
    return result;
  }

  // Vérifier les conditions de victoire ou de défaite après que l'action a été dispatchée
  const state = store.getState().fight;
  
  if (state.monster.pv <= 0) {
    store.dispatch(setGameStatus(2)); // Victoire
  } else if (state.players.every(player => player.pv <= 0)) {
    store.dispatch(setGameStatus(0)); // Défaite
  }

  return result;
};

export const store = configureStore({
  reducer: {
    fight: fightReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(victoryDefeatMiddleware),
});
