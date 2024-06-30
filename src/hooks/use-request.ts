import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { StoreSchema } from "../types/store";

export const useRequest = (thunk: any, ...params: any[]) => {
  const [request, setRequest] = useState<any>();
  const status = useSelector((state: StoreSchema) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    console.log(params)
    setRequest(request);

    return () => request.abort();
  }, [dispatch, ...params, thunk]);

  return status;
};
