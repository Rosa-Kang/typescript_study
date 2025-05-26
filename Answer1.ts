// 문제 1. 다음 변수들의 타입을 지정해주세요
let userName:string;
let userAge:number;
let isAdmin:boolean;


// 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.
let productName:string = 'bed'; 
let productPrice:number = 1200; 
let isAvailable:boolean = true; 

// 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.
function addNumbers(a:number, b:number):number {
    return a + b;
}

// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다
function stringifyValue(value:null | undefined | string) : string {
    if(value === null ||value === undefined) {
        return '값이 없습니다'
    }
    return value;
}

// 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(`==`)과 엄격 동등성(`===`)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); //느슨한 동등성
console.log(compareValues(null, undefined)); //느슨한 동등성
console.log(compareValues(false, 0)); //느슨한 동등성
console.log(compareValues(NaN, NaN)); //동등하지 않음
console.log(compareValues(42, 42)); //엄격한 동등성

// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
function isPrimitive(value: unknown): boolean {
   return value === null ||
   typeof value === 'string' ||
   typeof value === 'number' ||
   typeof value === 'boolean' ||
   typeof value === 'undefined' ||
   typeof value === 'symbol' ||
   typeof value === 'bigint'
}

// 제가 시차를 잘못 계산해서 하루치 스터디를 제출 못했습니당 TT : 늦게나마 제출합니다~!