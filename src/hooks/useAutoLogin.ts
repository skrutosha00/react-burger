import { useEffect } from "react";

import { getUser } from "services/actions/user";
import { getToken } from "services/actions/token";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

export default function useAutoLogin() {
  const dispatch = useAppDispatch();
  const { user, accessToken, refreshToken } = useAppSelector(
    (store) => store.auth
  );
  const { getUserFailed } = useAppSelector((store) => store.user);

  useEffect(() => {
    if (!accessToken || user) return;
    dispatch(getUser(accessToken));
  }, [accessToken]);

  useEffect(() => {
    if (!getUserFailed || !refreshToken) return;
    dispatch(getToken(JSON.stringify({ token: refreshToken })));
  }, [getUserFailed]);
}
