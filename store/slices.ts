import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BanksState = {
	banks: null,
};

const banksSlice = createSlice({
	name: 'banks',
	initialState,
	reducers: {
		setBanks: (state, action: PayloadAction<Bank[]>) => {
			state.banks = action.payload;
		},
	},
});

export const { setBanks } = banksSlice.actions;

const rootReducer = banksSlice.reducer;

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
