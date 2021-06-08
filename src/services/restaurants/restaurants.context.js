import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";
//create global context for us
export const RestaurantsContext = createContext();
//provider for the above context
export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};