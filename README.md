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

# 문제은행 2강-객체 & 배열 & 튜플 타입
## 문제 1.아래 객체를 보고 user의 타입을 작성하세요 
```javascript=
let user = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40
  isAdmin: false,
}
```

## 문제2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.

```javascript=
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.


// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;
```

## 문제3. 주어진 문제 1,2 번을 푸시오 
1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.
```javascript=
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
  products: [string, number, boolean][]
) {
  // 여기에 구현
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
)
  // 여기에 구현


// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]

```


## 문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요

```javascript=
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
  // 나이가 제공되지 않으면 18로 설정

  return user;
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
```

## 문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.
```javascript=
// proudcts 타입정의  필요 
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category) {
  // 여기에 구현
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
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

# 문제은행 4강 - 고급타입

## 문제 1.  작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.

작업의 상태는 다음과 같습니다:

Pending: 대기 중
InProgress: 진행 중
Completed: 완료됨
상태에 따라 다음 메시지를 반환하세요:

Pending: "작업이 대기 중입니다."
InProgress: "작업이 진행 중입니다."
Completed: "작업이 완료되었습니다."

```javascript=
// 작업 상태를 나타내는 enum을 작성하세요.
// 여기에 작성

function getStatusMessage(status: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."

```

## 문제 2. 아래 조건에 따라 함수를 작성하세요.

1. 작업 상태를 나타내는 enum:

    Pending: 작업 대기 중
    InProgress: 작업 진행 중
    Completed: 작업 완료
    Failed: 작업 실패
2. 함수의 요구사항:

    * 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
    * input은 문자열이어야 합니다.
    * 문자열을 작업 상태에 따라 가공합니다:
        Pending: 문자열을 모두 대문자로 변환.
        InProgress: 문자열을 소문자로 변환.
        Completed: 문자열 앞에 "완료: "를 추가.
        Failed: 에러를 발생시킵니다.
    * 작업 상태가 Failed면 에러를 발생시켜야 합니다.
    * 최종 결과로 가공된 문자열 배열을 반환합니다.

* 힌트 : typeof를 사용하면 타입을 알 수 있다.

```javascript
// 작업 상태를 나타내는 enum 작성
// 여기에 작성

function processTask(status: /* 여기에 작성 */, input: unknown): string {
  // 여기에 구현
}

// 테스트 코드
console.log(processTask(TaskStatus.Pending, "task1")); 
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus.InProgress, "TaskA")); 
// 기대 출력: "taska"

console.log(processTask(TaskStatus.Completed, "Report1")); 
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus.Failed, "TaskX")); 
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus.Pending, 42)); 
// 에러: 입력값은 문자열이어야 합니다.

```

## 문제 3. 아래 조건에 따라 코드를 작성하세요.

1. 로그 수준을 나타내는 enum을 작성하세요:

    Info
    Error
    Debug
2. 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

    * message: 로그 메시지 (문자열)
    * level: 로그 수준 (enum 값)
    * 반환값이 없습니다. (void 타입)
3. 작성한 타입과 enum을 사용해 함수를 구현하세요:

    * 로그 수준에 따라 다른 메시지를 출력합니다.
        * Info: [INFO] 메시지 앞에 [INFO] 출력
        * Error:  메시지 앞에 [ERROR] 출력
        * Debug:  메시지 앞에 [DEBUG] 출력

```javascript
// 로그 수준을 나타내는 enum 작성
// 여기에 작성

// 로그 함수 타입을 정의하세요.
// 여기에 작성

// 로그 함수 구현
const logMessage: /* 여기에 작성 */ = (message, level) => {
  // 여기에 구현
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", /* enum 값 입력 */);
logMessage("네트워크 연결 실패!", /* enum 값 입력 */);
logMessage("디버깅 모드 활성화", /* enum 값 입력 */);

```

## 문제 4. 아래 조건을 만족하는 함수를 작성하세요.

1. 두 개의 함수(processAny와 processUnknown)를 작성합니다:

    * processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
    * processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
2. 테스트 코드를 작성하여 두 함수의 차이를 확인하세요.

```javascript!
function processAny(input: any): string {
  // 여기에 구현
}

function processUnknown(input: unknown): string | number {
  // 여기에 구현
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생

```

# 문제은행 6강 교차타입 
## 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
1. Product 타입:
```
id: 숫자
name: 문자열
price: 숫자
```

2.   Discount 타입:
```
discountPercentage: 숫자
```

Product & Discount 타입을 기반으로 할인된 가격을 반환하는 함수를 작성하세요:

3. 함수 이름: calculateDiscountedPrice
    입력: 교차 타입 객체
    출력: 할인된 가격(숫자)
```javascript=
// Product 타입 정의
// 여기에 작성

// Discount 타입 정의
// 여기에 작성

function calculateDiscountedPrice(item: /* 여기에 작성 */): number {
  // 여기에 구현
}

// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800
```

## 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.

1. ContactInfo 타입:
    * phone: 문자열
    * address: 문자열
2. OrderInfo 타입:
    * orderId: 숫자
    * items: 문자열 배열
3. ContactInfo & OrderInfo 타입을 기반으로, 주문 요약 정보를 출력하는 함수를 작성하세요:

    * 함수 이름: printOrderSummary
    * 입력: 교차 타입 객체
    * 출력: 전화번호와 주문 아이디를 포함한 문자열
```javascript=
// ContactInfo 타입 정의
// 여기에 작성

// OrderInfo 타입 정의
// 여기에 작성

function printOrderSummary(order: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"

```

## 문제3. 사용자 프로필과 활동 기록 병합

1. 기본 사용자 정보(Profile):
```
    * id: 사용자 고유 ID (숫자)
    * name: 사용자 이름 (문자열)
    * email: 이메일 주소 (문자열)
```
2. 사용자 활동 기록(Activity):
```
    * lastLogin: 마지막 로그인 시간 (Date 객체)
    * actions: 사용자가 수행한 작업 목록 (문자열 배열)
```
Profile & Activity 타입을 기반으로 다음 요구사항을 만족하는 코드를 작성하세요:

* mergeUserData: 사용자 프로필과 활동 기록을 병합하여 새로운 객체를 반환하는 함수.
* getUserSummary: 병합된 데이터를 입력받아 사용자 요약 정보를 반환하는 함수:
        * 출력 형식: "사용자 [id] - [name] ([email]) - 마지막 로그인: [lastLogin]"
```javascript=
// 기본 사용자 정보 타입 정의
// 여기에 작성

// 사용자 활동 기록 타입 정의
// 여기에 작성

// 사용자 데이터를 병합하는 함수
function mergeUserData(
  profile: /* 여기에 작성 */,
  activity: /* 여기에 작성 */
): /* 여기에 작성 */ {
  // 여기에 구현
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"

```

# 문제은행 9강 - 유니온 타입 
## 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

1. 입력은 다음 세 가지 형태 중 하나입니다:

    * 숫자 배열: 배열의 합계를 반환합니다.
    * 문자열 배열: 배열의 모든 문자열을 연결한 결과를 반환합니다.
    * 객체 { message: string }: message 속성을 대문자로 변환한 문자열을 반환합니다.
```javascript!
// 매개변수, 리턴타입 정의필요 
function processInput(input) {
  // 여기에 작성
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
console.log(processInput(42)); // 에러 발생

```

## 문제2. 다음 조건을 만족하는 코드를 작성하세요.

1. 아래와 같은 두 개의 클래스를 정의합니다:

    * Car 클래스: brand(브랜드 이름, 문자열) 속성을 가집니다.
    * Bike 클래스: type(바이크 종류, 문자열) 속성을 가집니다.
2. 입력값이 Car 또는 Bike의 인스턴스일 수 있는 vehicle을 받아 다음 규칙에 따라 처리하는 함수를 작성하세요:

    * Car이면 브랜드 이름을 대문자로 반환합니다.
    * Bike이면 바이크 종류 앞에 "Bike: "를 추가하여 반환합니다.
```javascript=
// 클래스 정의
// 여기에 작성

function processVehicle(vehicle: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
console.log(processVehicle("unknown")); // 에러 발생

```

## 문제3. in을 활용한 사용자 관리
1. 시스템에는 두 종류의 사용자가 있습니다:

    * Admin 사용자: { type: "admin"; permissions: string[] }
    * User 사용자: { type: "user"; email: string }
2. processUser라는 함수를 작성하세요. 함수는 입력으로 Admin 또는 User 객체를 받아 다음과 같이 처리합니다:

    * Admin: 권한 목록(permissions)을 ,로 연결한 문자열을 반환합니다.
    * User: 이메일 주소(email)을 반환합니다.

```javascript=
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  // 여기에 작성
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
console.log(processUser({ type: "guest" })); // 에러 발생

```


## 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:

* Rectangle 객체: { width: number; height: number }
* Circle 객체: { radius: number }

함수는 다음 규칙에 따라 동작합니다:
* Rectangle이면 넓이를 반환합니다. (가로 × 세로)
* Circle이면 넓이를 반환합니다. (π × 반지름²)

```javascript=
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

```

## 문제5. 유니온 타입의 문제점과 해결 방법
1. 유니온 타입의 문제점
아래와 같은 두 가지 유니온 타입을 처리하는 함수가 있습니다:

    * Square: { type: "square"; side: number }
    * Circle: { type: "circle"; radius: number }
calculateArea라는 함수는 두 타입의 넓이를 계산하려고 하지만, 유니온 타입을 제대로 처리하지 않고 사용할 경우 런타임 에러가 발생할 가능성이 생길 수 있다. 이를 해결 방법을 작성하세요.

2. 해결 방법:

    * 식별 가능한 유니온(type 속성)을 사용하여 타입을 안전하게 좁히는 코드를 작성하세요.
    * exhaustiveness check를 추가하여, 새로운 타입이 추가되더라도 타입 안정성을 유지하도록 구현하세요.

```javascript=
type Shape = { side: number } | { radius: number };

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
  // 여기에 구현
}

// 테스트 코드
console.log(calculateArea({ side: 5 })); // 기대 출력: 25
console.log(calculateArea({ radius: 7 })); // 기대 출력: 153.93804002589985

```
# 문제은행 11강- 제네릭 타입
## 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.

1.함수 이름: getFirstElement
2.입력: 제네릭 배열
3.출력: 배열의 첫 번째 요소

```javascript=
// 매개변수, 리턴타입 정의 필요 
function getFirstElement(array) {
  // 여기에 구현
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

```

## 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.

1. 함수 이름: isNumberArray
2. 입력: 제네릭 배열
3. 출력:
    * 배열이 숫자 배열이면 true.
    * 그렇지 않으면 false.
```javascript=
// 매개변수, 리턴타입 정의 필요 
function isNumberArray(array) {
  // 여기에 구현
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)

```

## 문제3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.

1. 조건부 타입 정의

    * 타입 이름: IsArray<T>
    * 입력 타입 T가 배열 타입이면 true를 반환합니다.
    * 그렇지 않으면 false를 반환합니다.
2. 조건부 타입을 활용하는 함수

    * 함수 이름: checkArrayType
    * 입력: unknown 타입의 값.
    * 출력: 입력값이 배열이면 "This is an array."를, 그렇지 않으면 "This is not an array."를 반환합니다.
    
```javascript=
// 조건부 타입 정의
type IsArray<T> = /* 여기에 작성 */;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  // 여기에 작성
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
```

## 문제4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.

1. 유틸리티 타입 정의:

    * 타입 이름: WithDefault<T>
    * 입력: 객체 타입 T
    * 출력: 모든 속성 값의 타입이 [originalType, defaultType]의 튜플로 변경된 타입.
2. 테스트:

    * WithDefault<T>를 활용하여 객체 타입을 변환하고, 변환된 타입의 객체를 작성하세요.
    
```javascript=
// Mapped Type 정의
type WithDefault<T> = {
  // 여기에 작성
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

    
```

## 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.

1. 함수 이름: createObject
2. 입력:
    * key: 키 (제네릭 타입 K)
    * alue: 값 (제네릭 타입 V)
    * 출력: { key: value } 형태의 객체
```javascript=
function createObject<K, V>(key: K, value: V): /* 여기에 작성 */ {
  // 여기에 구현
}

// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }

```
    
## 문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요.

1. 함수 이름: pluck
2. 입력:
    * 객체 배열: 제네릭 타입 배열
    * 속성 이름: 제네릭 타입 
    * 출력: 속성 값 배열 
    
```javascript=
// 매개변수, 리턴 타입 정의 필요 
function pluck(array, key):  {
  // 여기에 구현
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]

```

# 문제 은행 12. 리터럴 타입 

## 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요.

1. 리터럴 타입 정의:

    버튼 스타일: "primary", "secondary", "danger".
2. 함수 작성:

    * 함수 이름: getButtonClass.
    * 입력: 버튼 스타일(리터럴 타입).
    * 출력: 스타일에 따라 CSS 클래스를 반환.

```javascript=
function getButtonClass(style: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생

```

## 문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요.

1. 리터럴 타입 정의:

    요청 상태: "loading", "success", "error".
2. 함수 작성:

    * 함수 이름: handleRequestState.
    * 입력: 요청 상태(리터럴 타입).
    * 출력: 상태에 따라 메시지를 반환.

```javascript=
function handleRequestState(state: /* 여기에 작성 */): string {
  // 여기에 구현
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생

```

# 문제은행 12. 유틸리티 타입
## 문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.

1. 기본 타입 정의:

    * User: 회원 정보 (이름, 이메일, 비밀번호).
    * Partial을 활용: 모든 속성을 선택 속성으로 변경하는 타입을 생성하세요.
2. 함수 작성:
    * 함수 이름: updateUserForm.
    * 입력: 기존 사용자 데이터와 업데이트된 폼 데이터.
    * 출력: 업데이트된 사용자 데이터.

```javascript=
type User = {
  name: string;
  email: string;
  password: string;
};

// 함수 작성
function updateUserForm(
  user: User,
  updates: /* 여기에 작성 */
): User {
  // 여기에 구현
}

// 테스트 코드
const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

```

## 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.

1. 기본 타입 정의:

    * UserProfile: 사용자 프로필 정보 (아이디, 이름, 이메일, 주소).
2. Pick을 활용:

    * 프로필 페이지에 필요한 데이터(아이디와 이름)만 추출하는 타입을 정의하세요.
3. 함수 작성:

    * 함수 이름: getProfileSummary.
    * 입력: 전체 사용자 정보.
    * 출력: 필요한 속성만 포함된 객체.
```javascript!
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

// 함수 작성
function getProfileSummary(
  user: /* 여기에 작성 */
): /* 여기에 작성 */ {
  // 여기에 구현
}

// 테스트 코드
const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

```

## 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다.

1. 기본 타입 정의:

    * User: 사용자 정보 (이름, 이메일, 비밀번호, 역할).
2. Omit을 활용:

    * 민감한 정보를 제외한 타입을 정의하세요. (비밀번호는 제외)
3. 함수 작성:

    * 함수 이름: filterSensitiveInfo.
    * 입력: 전체 사용자 정보.
    * 출력: 민감한 정보가 제외된 객체.

```javascript!
type User = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// 함수 작성
function filterSensitiveInfo(
  user: /* 여기에 작성 */
): /* 여기에 작성 */ {
  // 여기에 구현
}

// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

```

## 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.
1. 기본 타입 정의:
```javascript!
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

```
2. 함수 요구사항:
* createTeamMember:

   * 새 팀원을 생성하는 함수.
   * Partial을 활용하여 입력 데이터 중 일부만 제공되더라도 기본값으로 초기화합니다.
   * 기본값:
role: "developer".
isActive: true.
* filterTeamMembers:

    * 특정 조건에 맞는 팀원만 필터링하는 함수.
    * Pick을 사용해 필터링 기준을 정의합니다.
    * 예: role: "designer" 또는 isActive: false.
* removeSensitiveInfo:

    * 팀원 목록에서 민감한 정보를 제거하는 함수.
    * Omit을 사용해 이메일 주소를 제외한 데이터를 반환합니다.
```javascript!
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
function createTeamMember(data: /* 여기에 작성 */): TeamMember {
  // 여기에 구현
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(
  members: TeamMember[],
  filter: /* 여기에 작성 */
): TeamMember[] {
  // 여기에 구현
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(
  members: TeamMember[]
): /* 여기에 작성 */[] {
  // 여기에 구현
}

// 테스트 코드
const members: TeamMember[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]

```

# 문제은행 14. -record 타입 
## 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.
1. 요구사항:

    * 각 지역에 대한 고유 코드와 배송비가 주어집니다:
```javascript!
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";
```

* 지역 코드와 배송비를 매핑하는 데이터 구조를 Record 타입으로 정의하세요.
2. 함수 작성:

    * 함수 이름: calculateShippingCost.
    * 입력: 지역 코드(RegionCode)와 배송비 매핑 객체(Record<RegionCode, number>).
    * 출력: 해당 지역의 배송비.
    * 추가 요구사항:

지원되지 않는 지역 코드가 입력되면 에러를 발생시킵니다.

```javascript
// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: /* 여기에 작성 */ = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(
  region: /* 여기에 작성 */,
  costs: /* 여기에 작성 */
): number {
  // 여기에 구현
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생

```

## 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.

1. 요구사항:

    * 학생 이름(string)과 점수(number)를 매핑하는 데이터를 Record 타입으로 정의하세요.
    * 평균 점수를 계산하는 함수를 작성하세요.
2. 함수 작성:

    * 함수 이름: calculateAverageScore.
    * 입력: 학생 점수 데이터(Record<string, number>).
    * 출력: 모든 학생의 평균 점수(number).

```javascript=
// 학생 점수 데이터 정의
const scores: /* 여기에 작성 */ = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: /* 여기에 작성 */): number {
  // 여기에 구현
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85

```

## 문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.

1. 요구사항:

    * 제품 이름(string)과 가격(number)을 매핑하는 데이터를 Record 타입으로 정의하세요.
    * 특정 제품의 가격을 업데이트하는 함수를 작성하세요.
2. 함수 작성:

    * 함수 이름: updateProductPrice.
    * 입력: 제품 가격 데이터(Record<string, number>), 업데이트할 제품 이름과 새로운 가격.
    * 출력: 업데이트된 제품 가격 데이터(Record<string, number>).
```javascript=
// 제품 가격 데이터 정의
const prices: /* 여기에 작성 */ = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(
  prices: /* 여기에 작성 */,
  product: string,
  newPrice: number
): /* 여기에 작성 */ {
  // 여기에 구현
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }

```