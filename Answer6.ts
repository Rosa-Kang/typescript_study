// 문제은행 15. 타입 활용하기
// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.
type ExtractReturnType<F> = F extends (...args:any) => infer R ? R: never;


// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.
function getValue<T, K extends keyof T>(obj : T, key : K) : T[K] {
    return obj[key] as T[K];
}

// 문제 3. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 
// 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요.
type RequestData<T> =  T extends "text" ? string : T extends "json" ? Record<string, any> : T extends "binary" ? Uint8Array : never;

function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
   switch(type) {
    case "text" :
        return `Processed: ${data}`;
    case "json" :
        return `Processed: ${JSON.stringify(data)}`;
    case "binary" :
        return `Processed: ${data.join(',')}`;
    default :
        throw new Error("Invalid type");
   }
}