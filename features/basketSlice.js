import { createSlice } from "@reduxjs/toolkit";
import { memoize } from "proxy-memoize";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.payload.id}) is not in the basket`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = memoize((state) => state.basket.items);

export const selectBasketItemsWithId = memoize((state, id) =>
  state.basket.items.filter((item) => item.id === id)
);

export const selectBasketTotal = memoize((state) =>
  state.basket.items.reduce((total, item) => {
    total += item.price;
    return total;
  }, 0)
);

export default basketSlice.reducer;
