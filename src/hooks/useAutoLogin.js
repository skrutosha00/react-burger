import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "services/actions/user";
import { getToken } from "services/actions/token";

export default function useAutoLogin() {
  const dispatch = useDispatch();
  const { user, accessToken, refreshToken } = useSelector((store) => store.auth);
  const { getUserFailed } = useSelector((store) => store.user);

  useEffect(() => {
    if (!accessToken || user) return;
    dispatch(getUser(accessToken));
  }, [accessToken]);

  useEffect(() => {
    if (!getUserFailed || !refreshToken) return;
    dispatch(getToken(JSON.stringify({ token: refreshToken })));
  }, [getUserFailed]);
}
