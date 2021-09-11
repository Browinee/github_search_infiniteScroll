import useRepoSearch, {
  defaultConfig,
  defaultResponse,
} from "../useRepoSearch";
import { server } from "../../../../test-server";
import { act, renderHook } from "@testing-library/react-hooks";
import { genMock, genMockError } from "../../../../utils";

describe("useRepoSearch", function () {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should return correct data", async () => {
    const config = { ...defaultConfig, q: "test1" };
    const hook = renderHook(() => useRepoSearch(config));
    await hook.waitForNextUpdate();
    expect(hook.result.current.totalData).toEqual(genMock(10));
  });
  it("should return default response ", async () => {
    const config = { ...defaultConfig, q: "" };
    const hook = renderHook(() => useRepoSearch(config));
    expect(hook.result.current.totalData).toEqual(defaultResponse);
  });
  it("should return correct total data response ", async () => {
    const config = { ...defaultConfig, q: "test1" };
    const hook = renderHook(({ config }) => useRepoSearch(config), {
      initialProps: { config },
    });
    await hook.waitForNextUpdate();
    expect(hook.result.current.totalData).toEqual(genMock(10));
    const anotherConfig = { ...defaultConfig, q: "test1", page: 2 };
    hook.rerender({ config: anotherConfig });
    await hook.waitForNextUpdate();
    expect(hook.result.current.totalData).toEqual(genMock(20));
  });
  it("should return correct error", async () => {
    const config = { ...defaultConfig, q: "error" };
    const hook = renderHook(({ config }) => useRepoSearch(config), {
      initialProps: { config },
    });
    await hook.waitForNextUpdate();
    expect(hook.result.current.error).toEqual(genMockError(403, "API error"));
  });
});
