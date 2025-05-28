// 3강 -----------------------------------------------------------------------
// // 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:
// id: 고유 ID (숫자)
// name: 이름 (문자열)
// email: 이메일 (문자열, 선택 속성)
interface User {
    id: number;
    name: string;
    email?: string;
}

type UserType = {
    id: number;
    name: string;
    email?: string;
}

// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
// User 타입을 작성하세요.
type UserType2 = {
    id: number;
    name: string;
    address: {
        city: string;
        zipCode: number;
    }
}

// User 타입을 사용하여 아래 객체를 작성하세요.
const user:UserType2 = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
// 1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)
// 2. 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
// 3. 작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.

interface UserInterface {
    id: number;
    name: string;
    email?: string
}

interface AdminInterface extends UserInterface {
    role: string;
}

const user1 : UserInterface = {
    id: 12345,
    name: "Rosa",
    email: "rosa@gmail.com"
}

const user2 : AdminInterface = {
    id: 67890,
    name: "Chris",
    email:"chris@gmail.com",
    role: "admin"
}

// 문제 4. 아래 조건에 따라 type을 확장하세요.
// 1. 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
// 2. 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
// 작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.
type ProductType = {
    id: number;
    name: string;
    price: number;
}

type DiscountedProduct = ProductType & {
    discount: number;
}

const normProduct: ProductType = {
    id: 123,
    name: 'sofa',
    price: 4000,
}

const discountedItem: DiscountedProduct = {
    id: 456,
    name: 'console',
    price: 500,
    discount: 25
}

// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// 1. 상품(Product)은 다음 속성을 가집니다:
//     * id: 숫자
//     * name: 문자열
//     * price: 숫자
// 2. 주문(Order)은 다음 속성을 가집니다:
//     * orderId: 숫자
//     * products: Product 타입 배열
//     * totalPrice: 숫자

interface Product {
    id: number;
    name: string;
    price: number
}

interface Order {
    orderId: number;
    products: Product[];
    totalPrice: number
}

const order: Order = {
    orderId: 789,
    products: [
        {id: 1, name: "mirror", price: 300},
        {id: 2, name: "desk", price: 1000},
        {id: 3, name: "chair", price: 300}
    ],
    totalPrice: 1600
}

// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// 1. BaseUser라는 인터페이스를 작성하세요:
//     * id: 숫자
//     * name: 문자열
// 2. AdminUser라는 타입을 작성하세요:
//     * BaseUser를 확장합니다.
//     * 추가로 role: 문자열을 포함합니다.
// 3. GuestUser라는 타입을 작성하세요:
//     * BaseUser를 확장합니다.
//     * 추가로 visitCount: 숫자를 포함합니다.

interface BaseUser {
    id: number;
    name: string
}

type AdminUser = BaseUser & {
    role: string
}

type GuestUser = BaseUser & {
    visitCount: number
}

const user3: BaseUser = {
    id: 7,
    name: 'BK'
}

const user4: GuestUser = {
    id: 8,
    name: 'Terious',
    visitCount: 1
}

const user5: AdminUser = {
    id: 9,
    name: 'Terious',
    role: 'owner'
}

// 4강 -----------------------------------------------------------------------
// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
enum Status {
    Pending =  "Pending",
    InProgress = "Progress",
    Completed = "Completed"
}

function workingStatus(status: Status):string {
    if(status == Status.Pending) {
        return "작업이 대기 중입니다.";
    } else if(status == Status.InProgress) {
        return "작업이 진행 중입니다.";
    } else {
        return "작업이 완료되었습니다.";
    }
}
// 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 작업 상태를 나타내는 enum
enum  TaskStatus {
    Pending = "pending",
    InProgress = "progress",
    Completed = "completed",
    Failed = "failed"
}

function processTask(status: TaskStatus, input: unknown): string {
    if(typeof input !== "string") {
        throw new Error("입력값은 문자열이어야 합니다.")
    }
   switch(status) {
    case TaskStatus.Pending:
        return input.toUpperCase();
    case TaskStatus.InProgress:
        return input.toLowerCase();
    case TaskStatus.Completed:
        return `완료: ${input}`;
    case TaskStatus.Failed:
        throw new Error('작업이 실패했습니다.');
   }
}

// 문제 3. 아래 조건에 따라 코드를 작성하세요.
enum Level {
    Info = "Info",
    Error = "Error",
    Debug = "Debug",
}

type ErrorLog = (message:string, level:Level) => void;

const logMessage: ErrorLog = (message, level) => {
   switch(level){
    case Level.Info:
        console.log(`[INFO] ${message}`);
        break;
    case Level.Error:
        console.log(`[ERROR] ${message}`);
        break;
    case Level.Debug:
        console.log(`[DEBUG] ${message}`);
        break;
    default :
        throw new Error('Unknown error log..')
   }
};


// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
function processAny(input: any): string {
    return input.toString();
}

function processUnknown(input: unknown): string | number {
  if(typeof input == 'string') {
    return input.toUpperCase();
  } else if(typeof input == 'number') {
    return input * 10;
  } else {
    throw new Error("Type is wrong..")
  }
}