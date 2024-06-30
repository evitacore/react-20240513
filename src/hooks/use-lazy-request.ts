import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { StoreSchema } from "../types/store";

export const useLazyRequest = (thunk: any) => {
  const [request, setRequest] = useState<any>();
  const status = useSelector((state: StoreSchema) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback((...params: any) => {
    setRequest(dispatch(thunk(...params)));

  }, [dispatch, thunk]);

  return [status, makeRequest];
};
