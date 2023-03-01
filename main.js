//1 박스 2개
//2 드랍다운 리스트 만들기
//3 환율 정보 가져오기
//4 드랍다운 리스트에서 아이템을 선택하면 아이템이 바뀜
//5 금액을 입력하면 환전
//6 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전

//7 숫자를 한국어로 읽는법
//8 반대로 밑에 박스에서 수를 바꿔도 위에 박스에 환율이 적용됨

let currencyRatio = {
  // 변수
  USD: {
    //미국 환율
    KRW: 1318.28,
    USD: 1,
    JPY: 136.36,
    unit: "달러",
  },
  KRW: {
    //한국 환율
    KRW: 1,
    USD: 0.00076,
    JPY: 0.1,
    unit: "원",
  },
  JPY: {
    //일본 환율
    KRW: 9.67,
    USD: 0.0073,
    JPY: 1,
    unit: "엔",
  },
};
//1. console.log(currencyRatio.USD.unit);

console.log(currencyRatio["USD"].unit);

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
    //1. 버튼을 가져온다 , 2. 버튼 값을 바꾼다.
    fromCurrency = this.textContent; //3. 선택된 currency값을 변수에 저장해준다.
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    //1. 버튼을 가져온다 , 2. 버튼 값을 바꾼다.
    toCurrency = this.textContent; //3. 선택된 currency값을 변수에 저장해준다.
    convert();
  })
);

//1. 키를 입력하는 순간 "onkeyup"
//2. 환전이 됨
//3. 환전된 값이 보인다.

function convert() {
  //1. 환전
  // 얼마환전, 가진돈, 바꾸는 돈
  // 돈    *    환율  = 환전금액
  let amount = document.getElementById("from-input").value; // input의 값(value)을 가져올 수 있다.
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  document.getElementById("to-input").value = convertedAmount;
}

//1. 드랍다운 리스트에 값이 바뀔 때마다
//2. 환전을 다시
