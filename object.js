const medalData = [
  { country: "korea", gold: 3, silver: 2, bronze: 1 },
  { country: "china", gold: 2, silver: 2, bronze: 1 },
  { country: "japan", gold: 1, silver: 2, bronze: 3 },
  { country: "mongolia", gold: 1, silver: 1, bronze: 1 },
  { country: "Kazakhstan", gold: 0, silver: 2, bronze: 1 },
];

const medalRanking = (data) => {
  return data.map((entry, index) => ({
    Country: entry.country,
    Gold: entry.gold,
    Silver: entry.silver,
    Bronze: entry.bronze,
    Rank: index + 1,
  }));
};

console.log(medalRanking(medalData));
