// 6강 ------------------------------------------------------------
// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
type Product = {
    id: number;
    name: string;
    price: number;
}

type Discount = {
    discountPercentage: number
}

type ProductDiscount = Product & Discount;

function calculateDiscountedPrice(item: ProductDiscount): number {
    return item.price - (item.price * item.discountPercentage / 100);
}

// 문제2. 아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.
type ContactInfo = {
    phone: string;
    address: string;
}

type OrderInfo = {
    orderId: number;
    items: string[];
}

type OrderDetails =  ContactInfo & OrderInfo;

function printOrderSummary(info:OrderDetails): string {
    return `Order ${info.orderId} (Phone: ${info.phone})`
}

// 문제3. 사용자 프로필과 활동 기록 병합
type Profile = {
    id: number;
    name: string;
    email: string;
}

type Activity = {
    lastLogin: Date;
    actions: string[];
}

 
function mergeUserData( profile: Profile, activity: Activity): Profile & Activity {
    return {...profile, ...activity}
}
 
function getUserSummary(user: Profile & Activity): string {
   return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin}`
}


// 9강 ------------------------------------------------------------
// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.
function processInput(input: number[] | string[] | {message: string}): string | number {

    if (Array.isArray(input)) {
        if (input.length === 0) {
            return 0; 
        }
        
        if (typeof input[0] === 'string') {
            return input.join("");
        } else if (typeof input[0] === "number") {
            return input.reduce((prev, curr) => prev + curr, 0);
        }
    } else if ("message" in input) {
        return input.message.toUpperCase();
    }
    
    throw new Error('Unexpected input type.');
}

// 문제2. 다음 조건을 만족하는 코드를 작성하세요.
class Car {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

class Bike {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
}

function processVehicle(vehicle: Car | Bike): string {
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  } else if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`; 
  } else {
    throw new Error("Invalid type of vehicle.");
  }
} 

// 문제3. in을 활용한 사용자 관리
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
    if("permissions" in user) {
        return user.permissions.join(", ");
    } else if("email" in user) {
        return user.email;
    } else {
        throw new Error('Invalid user type');
    }
}

// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:
type Rectangle = { width: number; height: number };
type Circle = { radius: number };
 
function isRectangle(shape: unknown): shape is Rectangle {
        return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !== undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
    if (isRectangle(shape)) {
        return shape.width * shape.height; 
    } else {
        return Math.PI * shape.radius ** 2;
    }
}

// 문제5. 유니온 타입의 문제점과 해결 방법
type TSquare = { 
    type: "square";
    side: number;
 };

type TCircle = { 
    type: "circle";
    radius: number;
 };

type Shape = TSquare | TCircle;


function calculateSpace(shape: Shape): number {
   switch (shape.type) {
    case "square":
      return shape.side ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      const _exhaustive: never = shape;
      throw new Error(`Unhandled shape type: ${_exhaustive}`);
  }
}