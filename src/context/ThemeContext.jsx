import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "CHANGE_GAME":
      return { ...state, game: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, {
    mode: "Start",
    game: false,
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  const gameMode = (game) => {
    dispatch({ type: "CHANGE_GAME", payload: game });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode, gameMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
