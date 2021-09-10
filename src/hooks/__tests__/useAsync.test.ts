import { act, renderHook } from "@testing-library/react-hooks";
import useAsync, { defaultInitialState } from "../useAsync";

describe("useAsync", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should be defined", () => {
    expect(useAsync).toBeDefined();
  });
  it("should correct initial value", async () => {
    const { result } = renderHook(() => useAsync());
    const { status, data, error } = result.current;
    expect({ status, data, error }).toEqual(defaultInitialState);
  });
  it("should have successful response ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync());
    const fake = new Promise((resolve) => resolve("test"));
    act(() => {
      result.current.run(fake);
    });
    await waitForNextUpdate();
    expect(result.current.data).toEqual("test");
    expect(result.current.status).toEqual("success");
    expect(result.current.isSuccess).toBeTruthy();
  });
  it("should have error response ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync());
    const fake = new Promise((resolve, reject) => reject("test"));
    act(() => {
      result.current.run(fake);
    });
    await waitForNextUpdate();
    expect(result.current.data).toEqual(null);
    expect(result.current.status).toEqual("error");
    expect(result.current.error).toEqual("test");
  });
});
