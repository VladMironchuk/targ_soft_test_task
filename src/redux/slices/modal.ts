import { createSlice } from '@reduxjs/toolkit';

interface State {
  isAddingTitleModalIsVisible: boolean;
  isSubmitDeletingModalIsVisible: boolean;
  isBackgroundVisible: boolean;
}

const initialState: State = {
  isAddingTitleModalIsVisible: false,
  isSubmitDeletingModalIsVisible: false,
  isBackgroundVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleAddingTitleModal(state) {
      const modalState = state;
      modalState.isAddingTitleModalIsVisible =
        !modalState.isAddingTitleModalIsVisible;
    },
    toggleSubmitDeletingModal(state) {
      const modalState = state;
      modalState.isSubmitDeletingModalIsVisible =
        !modalState.isSubmitDeletingModalIsVisible;
    },
    toggleBackground(state) {
      const backgroundState = state;
      backgroundState.isBackgroundVisible =
        !backgroundState.isBackgroundVisible;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
