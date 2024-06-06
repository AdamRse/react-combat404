import { configureStore } from "@reduxjs/toolkit";
import fightReducer, { setGameStatus } from '../features/fight/fightSlice';

// Middleware pour vérifier les conditions de victoire ou de défaite
// store : Fournit les méthodes getState pour obtenir l'état actuel et dispatch pour envoyer des actions. Le store représente le magasin Redux.
// next : Une fonction qui passe l'action suivante au middleware ou au reducer suivant dans la chaîne de middlewares. C'est comme dire "continuez et faites ce que vous devez faire avec cette action".
// action : L'action Redux qui est actuellement dispatchée. Chaque action passe par tous les middlewares avant d'atteindre les reducers.
const victoryDefeatMiddleware = store => next => action => {
  // Passer l'action au prochain middleware/reducer
  const result = next(action);

  // Ne pas vérifier les conditions pour l'action `setGameStatus`
  if(action.type === setGameStatus.type)
    return result;

  // Vérifier les conditions de victoire ou de défaite après que l'action a été dispatchée
  const state = store.getState().fight;
  
  if(state.monster.pv <= 0)
    store.dispatch(setGameStatus(2)); // Victoire
  else if (state.players.every(player => player.pv <= 0))
    store.dispatch(setGameStatus(0)); // Défaite

  return result;
};

export const store = configureStore({
  reducer: {
    fight: fightReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(victoryDefeatMiddleware),//getDefaultMiddleware() est une fonction redux Toolkit que retourne des middleware. concat ajoute le middleware à la liste des middlewares par défaut. On implémente le middleware de cette façon pour ne pas écraser les autres middleware de redux toolkit
});
