import { ReactNode, createContext, useState } from "react";

export type FavoriteMealContextState = {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
  };

export const FavoritesContext = createContext<FavoriteMealContextState>({
    ids: [],
    addFavorite : (id: string) => {},
    removeFavorite : (id: string) => {},
});

type ContextProps = {
    children: ReactNode
}

function FavoritesContextProvider ({children}: ContextProps)  {

    const [favoriteIds, setFavoriteIds] = useState<string[]>([])

    function addFavorite (id: string) {
        setFavoriteIds((currentIds): string[] => {
            return [...currentIds, id];
        })
    }
    function removeFavorite (id: string) {
        setFavoriteIds((currentIds): string[] => {
            return currentIds.filter((mealId: string) => mealId !== id);
        })
    }

    return <FavoritesContext.Provider value={{
        ids: favoriteIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider

