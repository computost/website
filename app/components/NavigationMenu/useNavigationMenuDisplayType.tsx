import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
} from "react";
import { useMediaQuery } from "usehooks-ts";

export function useNavigationMenuDisplayType(): NavigationMenuDisplayType {
  const displayType = useContext(NavigationMenuDisplayTypeContext);

  if (!displayType) {
    throw new Error(
      "Attempted to call useNavigationMenuDisplayType outside of a NavigationMenuDisplayTypeProvider",
    );
  }

  return displayType;
}

export function NavigationMenuDisplayTypeProvider({
  children,
}: PropsWithChildren): ReactNode {
  const displayType: NavigationMenuDisplayType = useMediaQuery(
    "(min-width: 48rem)",
    {
      defaultValue: false,
      initializeWithValue: false,
    },
  )
    ? "inline"
    : "dropdown";

  return (
    <NavigationMenuDisplayTypeContext.Provider value={displayType}>
      {children}
    </NavigationMenuDisplayTypeContext.Provider>
  );
}

const NavigationMenuDisplayTypeContext =
  createContext<NavigationMenuDisplayType | null>(null);

type NavigationMenuDisplayType = "dropdown" | "inline";
