import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, atk: 5 },
    { name: "Jack", pv: 50, pvMax: 50, mana: 30, manaMax: 30, atk: 10 },
    { name: "Jessy", pv: 75, pvMax: 75, mana: 30, manaMax: 30, atk: 8 },
    { name: "Jenny", pv: 400, pvMax: 400, mana: 30, manaMax: 30, atk: 1 }
  ],
  monster: { name: "Monstre", pv: 400, pvMax: 400, mana: 120, manaMax: 120 }
};

export const fightSlice = createSlice({//createSlice génère un objet fightReducer
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.atk
    }
  },
});

export const { hitMonster } = fightSlice.actions;
export default fightSlice.reducer;