# 문제은행 - 1강 원시타입
## 문제 1. 다음 변수들의 타입을 지정해주세요 
```javascript
let userName; // 예: 이름
let userAge; // 예: 나이
let isAdmin; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;
```

## 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.
```javascript
// 변수 선언과 초기값 지정
let productName; // 상품 이름
let productPrice; // 상품 가격
let isAvailable; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

```
 
## 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.
```javascript
console.log(addNumbers(5, 3)); 
```

## 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다 
* 힌트: 한 변수에 타입을 여러개를 받고싶다면 `|` (유니온타입) 을 쓸 수 있다 (예시: 문자열 또는 숫자 : string|number)
```javascript
function stringifyValue(value) {
  // 여기에 구현
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"

```

## 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(`==`)과 엄격 동등성(`===`)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.
* 힌트: unknown타입은 무슨 타입이던 다 받을 수 있는 타입이다. (뒤에서 배울 예정)
```javascript
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
console.log(compareValues(5, "5")); // ?
console.log(compareValues(null, undefined)); // ?
console.log(compareValues(false, 0)); // ?
console.log(compareValues(NaN, NaN)); // ?
console.log(compareValues(42, 42)); // ?

```

## 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요. 
* 힌트: unknown타입은 무슨 타입이던 다 받을 수 있는 타입이다. (뒤에서 배울 예정)
* 힌트: Object() 를 공부해보세요 
```javascript=
function isPrimitive(value: unknown): boolean {
  // 여기에 구현
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

```

# 문제은행 3강- type, interface

## 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:

id: 고유 ID (숫자)
name: 이름 (문자열)
email: 이메일 (문자열, 선택 속성)

```javascript=
// 인터페이스 작성

// 타입 작성

const user = {
  id: 1,
  name: "Alice",
};

const userWithEmail = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

```

## 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.

사용자(User)는 다음 속성을 가집니다:
id: 숫자
name: 문자열
address: 객체 ({city: 문자열,zipCode: 숫자})

```javascript=
// User 타입을 작성하세요.
// 여기에 작성

// User 타입을 사용하여 아래 객체를 작성하세요.
const user = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

```


## 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)
2. 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.

```javascript=
// User 인터페이스 작성
// 여기에 작성

// Admin 인터페이스 작성 (User 확장)
// 여기에 작성

const normalUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

```

## 문제 4. 아래 조건에 따라 type을 확장하세요.

1. 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
2. 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.

```javascript=
// Product 타입 작성
// 여기에 작성

// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성

const normalProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

```

## 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

1. 상품(Product)은 다음 속성을 가집니다:
    * id: 숫자
    * name: 문자열
    * price: 숫자
2. 주문(Order)은 다음 속성을 가집니다:
    * orderId: 숫자
    * products: Product 타입 배열
    * totalPrice: 숫자

```javascript!
// Product 타입 작성
// 여기에 작성

// Order 타입 작성
// 여기에 작성

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

```

## 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

1. BaseUser라는 인터페이스를 작성하세요:
    * id: 숫자
    * name: 문자열
2. AdminUser라는 타입을 작성하세요:
    * BaseUser를 확장합니다.
    * 추가로 role: 문자열을 포함합니다.
3. GuestUser라는 타입을 작성하세요:
    * BaseUser를 확장합니다.
    * 추가로 visitCount: 숫자를 포함합니다.

```javascript!
// BaseUser 인터페이스 작성
// 여기에 작성

// AdminUser 타입 작성
// 여기에 작성

// GuestUser 타입 작성
// 여기에 작성

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};

```

