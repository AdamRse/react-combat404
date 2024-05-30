import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
  ],
  monster: { name: "Monstre", pv: 400, pvMax: 400, mana: 120, manaMax: 120 }
};

export const fightSlice = createSlice({//createSlice génère un objet fightReducer
  name: "fight",
  initialState,
  reducers: {},
});

export default fightSlice.reducer;