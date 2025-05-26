// 1강
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

// 2강
// 문제 1.아래 객체를 보고 user의 타입을 작성하세요 
let user: {name: string; age?: number; isAdmin: boolean} = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40,
  isAdmin: false,
} 

// 문제2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
let numbers: readonly number[] = [1,2,3]

// 문제3. 주어진 문제 1,2 번을 푸시오 
// 1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
// 2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.
interface Product {
  name: string;
  price: number;
  inventory: boolean
}

function itemsArray(products: Product[]): { name: string; price: number }[] {
    return products.map(product => ({
      name: product.name,
      price: product.price
    }));
}

function inventoryArray(products: Product[]): Product[] {
    return products.filter(product => product.inventory);
}

// 문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요
function updateUser(user:{name: string; age?: number}) : {name: string; age: number} {
   return {...user, age: user.age ?? 18};
}

// 문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.
// proudcts 타입정의  필요 
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category: string): string[] {
   const sortedProducts = products.filter((product) => product.category === category);
  return sortedProducts.map((product) => product.name);
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []


// 제가 시차를 잘못 계산해서 하루치 스터디를 제출 못했습니당 TT : 늦게나마 제출합니다~!