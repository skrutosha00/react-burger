import { useLocation } from "react-router-dom";

const defaultActiveNav = 0;
const activeNavByPath = {
  "/orders": 1,
  "/profile": 2
};

export default function useActiveHeaderNav() {
  const { pathname } = useLocation();

  for (let path of Object.keys(activeNavByPath)) {
    if (pathname.includes(path)) {
      return activeNavByPath[path];
    }
  }

  return defaultActiveNav;
}
