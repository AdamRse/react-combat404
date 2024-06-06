import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, atk: 5 }
    ,{ name: "Jack", pv: 50, pvMax: 50, mana: 30, manaMax: 30, atk: 10 }
    ,{ name: "Jessy", pv: 75, pvMax: 75, mana: 30, manaMax: 30, atk: 8 }
    ,{ name: "Jenny", pv: 400, pvMax: 400, mana: 30, manaMax: 30, atk: 1 }
  ]
  ,monster: { name: "Monstre", pv: 400, pvMax: 400, mana: 120, manaMax: 120, atk: 10 }
  , gameStatus: 1 //0 défaite ; 1 en cours ; 2 victoire
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      const player = action.payload;
      if (player.pv > 0) {
        state.monster.pv -= player.atk;
        if (state.monster.pv <= 0)
          state.monster.pv = 0;
      }
    },
    hitPlayer: (state, action) => {
      const player = action.payload;
      if (state.players[player.id].pv > 0) {
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

export const { hitMonster, hitPlayer, setGameStatus } = fightSlice.actions;
export default fightSlice.reducer;
