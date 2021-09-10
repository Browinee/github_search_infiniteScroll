import useRepoSearch, { defaultConfig } from "../useRepoSearch";
import { server } from "../../../../test-server";
import { act, renderHook } from "@testing-library/react-hooks";

describe.only("useRepoSearch", function () {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should ", async () => {
    const config = { ...defaultConfig, q: "12" };
    const hook = renderHook(() => useRepoSearch(config));
    await hook.waitForNextUpdate();
    //
    // act(() => jest.runAllTimers());
    //  console.log(result.current.totalData)
    // const a = await http.get(`/search/repositories`)
    // console.log("a", http)
  });
});
