import { useLocation } from "react-router-dom";
import { TLocation } from "services/types";

type TActiveNavByPath = {
  [key: string]: number;
};

const defaultActiveNav = 0;
const activeNavByPath: TActiveNavByPath = {
  "/orders": 1,
  "/profile": 2
};

export default function useActiveHeaderNav(): number {
  const { pathname }: TLocation = useLocation();

  for (let path of Object.keys(activeNavByPath)) {
    if (pathname.includes(path)) {
      return activeNavByPath[path];
    }
  }

  return defaultActiveNav;
}
