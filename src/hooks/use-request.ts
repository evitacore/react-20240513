import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export const useRequest = (thunk: any, ...params: any[]) => {
  const [request, setRequest] = useState<any>();
  const status = useSelector((state: any) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => request.abort();
  }, [dispatch, ...params, thunk]);

  return status;
};
