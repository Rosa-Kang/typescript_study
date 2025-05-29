// 11강 -------------------------------------------
// 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소 타입에 관계없이 작동해야 합니다.
function getFirstElement<T>(array:T[]): T {
        return array[0];
}

// 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.
function isNumberArray<T>(array: T[]): boolean {
    return array.every((item) => typeof item === 'number');
}

// 문제3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.
type IsArray<T> = T extends Array<any> ? true : false;


function checkArrayType<T>(value: T): string {
    if(Array.isArray(value)) {
        return "This is an array.";
    } else {
        return "This is not an array.";
    }
}

// 문제4. 객체의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.
type WithDefault<T> = {
    [K in keyof T] : [T[K], T[K]];
}

// 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
function createObject<K extends string | number | symbol, V>(
    key: K, 
    value: V
): { [P in K]: V } {
    return { [key]: value } as { [P in K]: V };
}

// 문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요.

function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => item[key]);
}

// 12강 -----------------------------------------------------------
// 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요.
type ButtonStyle = "primary" | "secondary" | "danger";

function getButtonClass(style:ButtonStyle):string {
        return `btn-${style}`;
}

// 문제 2. 서버에서 데이터를 요청할 때 발생하는 상태를 처리하는 함수를 작성하세요.
type ReqState = "loading" | "success" | "error";

function handleRequestState(state:ReqState) {
    switch(state) {
        case "loading" :
            return "Loading, please wait...";
        case "success" :
            return "Request successful!";
        case "error" :
            return "There was an error processing your request.";
        default :
            throw new Error("Request type is unknown..");
    }

}