import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "cloud", pv: 30, pvMax: 30, mana: 5, manaMax: 5, atk: 6 }
    ,{ name: "tifa", pv: 27, pvMax: 27, mana: 8, manaMax: 8, atk: 5 }
    ,{ name: "link", pv: 22, pvMax: 22, mana: 6, manaMax: 6, atk: 8 }
    ,{ name: "ryu", pv: 17, pvMax: 17, mana: 3, manaMax: 3, atk: 9 }
  ]
  ,monster: { name: "Sephiroth", pv: 55, pvMax: 55, mana: 32, manaMax: 32, atk: 15 }
  , gameStatus: 1 //0 défaite ; 1 en cours ; 2 victoire
  , actionFree: true
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    manageActionFree(state, action){
      state.actionFree = action.payload;
    }
    ,resetState: () => initialState
    ,hitMonster: (state, action) => {
      const player = action.payload;
      if (player.pv > 0) {
        state.monster.pv -= player.atk;
        if (state.monster.pv <= 0)
          state.monster.pv = 0;
      }
    },
    hitPlayer: (state, action) => {
      const player = action.payload;
      if (state.monster.pv>0 && state.players[player.id].pv > 0) {
        state.players[player.id].pv -= state.monster.atk;
        if (state.players[player.id].pv <= 0)
          state.players[player.id].pv = 0;
      }
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    }
  },
});

export const { hitMonster, hitPlayer, setGameStatus, manageActionFree, resetState } = fightSlice.actions;
export default fightSlice.reducer;
