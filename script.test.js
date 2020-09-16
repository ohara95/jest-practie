const googleSearch = require("./script");

dbMock = [
  "temtim.com",
  "kimagurecook.com",
  "bakumatushishi.com",
  "kimagurechannel.com",
  "dog.com",
  "dogPicture.com",
];

// テストをグループ化出来る
describe("googleSearch", () => {
  it("this is a test", () => {
    expect("hello").toBe("hello");
  });

  it("is Searching google", () => {
    // 何か単語が入っていたら動くかのテスト
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    // dogと入れたら期待通りの返り値が返るかのテスト
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogPicture.com"]);
  });

  // 未定義及び入力なしでも動作するかのテスト
  it("work is undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    // 3個までhitするかのテスト
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
