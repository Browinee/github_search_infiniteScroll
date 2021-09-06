import { useState } from "react";

interface State<T> {
  error: Error | null;
  data: T | null;
  status: "idle" | "loading" | "error" | "success";
}
const defaultInitialState: State<null> = {
  status: "idle",
  data: null,
  error: null,
};
;

const useAsync = <T,>(
  initialState?: State<T>,
) => {
  const [state, setState] = useState<State<T>>({
    ...defaultInitialState,
    ...initialState,
  });

  const setData = (data: T) =>
    setState({
      status: "success",
      error: null,
      data,
    });
  const setError = (error: Error) =>
    setState({
      error,
      status: "error",
      data: null,
    });

  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      setError(new Error("Please enter a Promise"));
    }
    setState({
      ...state,
      status: "loading",
    });
    return promise.then(setData).catch((error) => {
      setError(error);
    });
  };
  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    setData,
    setError,
    run,
    ...state,
  };
};

export default useAsync;
