import React, { createContext, useContext } from "react";
import { ContentResource, InternationalString } from "@iiif/presentation-3";

type ItemContextStore = {
  label?: InternationalString;
  summary?: InternationalString;
  thumbnail?: ContentResource[];
};

interface ProviderProps {
  children: React.ReactNode;
  initialState?: ItemContextStore;
}

const defaultState = {
  label: undefined,
  summary: undefined,
  thumbnail: [],
};

const ItemContext = createContext<ItemContextStore>(defaultState);

const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItemContext must be used with a ItemProvider");
  }
  return context;
};

const ItemProvider: React.FC<ProviderProps> = ({
  children,
  initialState = defaultState,
}) => {
  return (
    <ItemContext.Provider value={initialState}>{children}</ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider, useItemContext };
