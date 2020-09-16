const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swap to get people", () => {
  expect.assertions(1);
  // returnが付いていると拒否されたらテストが終了する？
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it("calls swap to get people with a promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    // data.results.lengthが5個以上あることを確かめるテスト
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("getPeople returns count result", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      // response.json()としているのと同じ
      json: () =>
        Promise.resolve({
          count: 87,
          // なんで配列に？
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );
  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    // 関数がどのように呼び出されたのか分かる
    // mockFetchは1回だけ呼ばれた
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
