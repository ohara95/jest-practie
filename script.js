const googleDatabase = [
  "cat.com",
  "animal.com",
  "youtube.com",
  "myFavouritecats.com",
  "catPictures.com",
  "cuteCat.com",
  "onlyCat.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => website.includes(searchInput));
  // slice(0, 3)は0~3までの配列のコピーを返す
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
