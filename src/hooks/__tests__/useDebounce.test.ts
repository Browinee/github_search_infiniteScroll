import { act, renderHook } from "@testing-library/react-hooks";
import useDebounce from "../useDebounce";

describe("useDebounce", () => {
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
    expect(useDebounce).toBeDefined();
  });
  it("should return debounced value", () => {
    const hook = renderHook(() => useDebounce("test", 5));
    expect(hook.result.current).toEqual("test");
    expect(typeof hook.result.current[0]).toBe("string");
  });
  it("set new value within delay and return correct debounced value after delay", async () => {
    const hook = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: {
        value: "first",
        delay: 50,
      },
    });
    jest.advanceTimersByTime(10);
    hook.rerender({
      value: "second",
      delay: 50,
    });
    expect(hook.result.current).toEqual("first");
    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });
    expect(hook.result.current).toEqual("second");
  });
});
