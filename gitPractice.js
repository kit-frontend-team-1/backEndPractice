let medal = {
	usa: {
		gold: 10,
		silver: 5,
		bronze: 3,
	},
	canada: {
		gold: 8,
		silver: 6,
		bronze: 4,
	},
	korea: {
		gold: 7,
		silver: 5,
		bronze: 3,
	},
	germany: {
		gold: 6,
		silver: 4,
		bronze: 6,
	},
	// 다른 국가의 메달 현황을 추가할 수 있습니다.
};

const totalMedals = Object.keys(medal).map((country) => ({
	country,
	total: medal[country].gold + medal[country].silver + medal[country].bronze,
}));

console.log("각 국가의 총 메달 수:", totalMedals);
//국가의 메달 수

const toFind = "usa";
const fCountry = Object.keys(medal).find((country) => country === toFind);

if (fCountry) {
	console.log(`찾은 국가(${toFind})의 메달 현황:`, medal[fCountry]);
} else {
	console.log(`${toFind}은(는) 찾을 수 없는 국가입니다.`);
}
//특정 국가의 메달 현황

const total = Object.keys(medal).filter((country) => medal[country].gold >= 5);

console.log("금메달 5개 이상을 획득한 국가들:", total);
//금메달 5개 이상 국가들
