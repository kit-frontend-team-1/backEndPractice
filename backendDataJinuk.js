let a = {
  country: "K",
  gold: 0,
  silver: 0,
  bronze: 0,
  medalist: [],
  rank: 0,
};

// 모든 국가가 해당 객체의 형태와 같은 형태를 띄므로 국가별 객체 생성을 위한 함수를 생성
function country(countryName) {
  this.countryName = countryName;
  this.gold = 0;
  this.silver = 0;
  this.bronze = 0;
  this.medalist = [];
  this.rank = 0;
}

//국가별 객체 생성 (데이터가 기록되지 않은 상태(초기화 상태))
let Korea = new country("Korea");
// console.log(Korea);
let Japan = new country("Japan");
// console.log(Japan);
let China = new country("China");
// console.log(China);

//메달 정보 업데이트
/*백엔드에서 실시간으로 받아오는 데이터의 예시
    한국 - 김아영 - 금메달    
    일본 - 히쿠라 - 은메달
    중국 - 린자오밍 - 동메달
*/

// 메달 데이터 업데이트
function medalUpdate(medalist, medal, country) {
  country.medalist.push(medalist);
  if (medal == "gold") return (country.gold += 1);
  if (medal == "silver") return (country.silver += 1);
  if (medal == "bronze") return (country.bronze += 1);
}
medalUpdate("김아영", "gold", Korea);
medalUpdate("히쿠라", "silver", Japan);
medalUpdate("린자오밍", "bronze", China);

// // 메달에 따른 국가별 순위 구현하기 ()
let data = [];
data.push(Korea, Japan, China);
console.log(data);

let rankResult = data.sort(function (a, b) {
  if (a.gold > b.gold) return -1;
  if (a.gold == b.gold && a.silver > b.silver) return -1;
  if (a.gold == b.gold && a.silver == b.silver && a.bronze > b.bronze)
    return -1;
  if (a.gold == b.gold && a.silver == b.silver && a.bronze == b.bronze)
    return 0;
  else return 1;
});

console.log(rankResult);

// 국가별 순위 업데이트 (sort는 원본 배열 자체를 바꾸므로 data를 이용해도 됨)
for (let i = 0; i < data.length; i++) {
  data[i].rank = i + 1;
}

console.log(data);

// 데이터의 추가, 삭제, 수정, 조회 구현 후 오거나이제이션에 커밋, 그 외에도 배열과 객체와 관련된 다양한 내장 함수들을 사용해볼 것
// 데이터의 추가와 조회는 구현했지만, 기존 메달 데이터를 삭제하는 것과 수정하는 것을 구현해야 한다.
