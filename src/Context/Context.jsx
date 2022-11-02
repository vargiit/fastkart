import React, { useContext, useReducer, createContext } from "react";

import { productReducer } from "./Reducer";

const ProductList = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    cart: [
      {
        id: 6,
        name: "SnackAmor Combo Pack of Jowar Stick and Jowar Chips",
        weight: "570 G",
        price: 12.89,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/4.png",
      },
      {
        id: 6,
        name: "SnackAmor Combo Pack of Jowar Stick and Jowar Chips",
        weight: "570 G",
        price: 12.89,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/4.png",
      },
      {
        id: 1,
        name: "Yumitos Chilli Sprinkled Potato Chips",
        weight: "100 G",
        price: 80,
        image:
          "https://themes.pixelstrap.com/fastkart/assets/images/cake/product/5.png",
      },
    ],
    wishlist: [],
  });
  return (
    <ProductList.Provider value={{ state, dispatch }}>
      {children}
    </ProductList.Provider>
  );
};

export default Context;

export const ProductState = () => {
  return useContext(ProductList);
};
