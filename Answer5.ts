// 12. 유틸리티 타입 -----------------------------------------------
// 문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.

2. 함수 작성:
    * 함수 이름: updateUserForm.
    * 입력: 기존 사용자 데이터와 업데이트된 폼 데이터.
    * 출력: 업데이트된 사용자 데이터.

type User = {
  name: string;
  email: string;
  password: string;
};


function updateUserForm(
  user: User,
  updates: Partial<User>
): User {
   return {...user, ...updates }
}

// 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.
type UserProfile = {
    id: number;
    name: string;
    email: string;
    address: string;
}

type PickedUserInfo = Pick<UserProfile,  "id" | "name">;

function getProfileSummary(user:PickedUserInfo):PickedUserInfo {
        return { id: user.id, name: user.name};
}

// 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다.
type TUser = {
    name: string;
    email: string;
    password: string;
    role: string;
}

type PublicUser = Omit<TUser, "password">;

function filterSensitiveInfo(user: TUser): PublicUser {
        const {password, ...filteredUser} = user;
        return filteredUser;
}


// 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

function createTeamMember(data: Partial<TeamMember>): TeamMember {
   if (!data.id || !data.name || !data.email) {
        throw new Error("Required fields missing");
    }
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        isActive: data.isActive ?? true,
        role: data.role ?? "developer"
    };
}

function filterTeamMembers(
  members: TeamMember[],
  filter: Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
    return members.filter((member) => member.role === filter.role && member.isActive === filter.isActive);
}

function removeSensitiveInfo(
  members: TeamMember[]
): Omit<TeamMember, "email">[] {
   return members.map(({email, ...rest}) => rest );
}

// 문제은행 14. -record 타입
// 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

function calculateShippingCost(region:RegionCode, costs:Record<RegionCode, number>):number {
        if(!costs[region]) {
            throw new Error(`There is no matching region code with ${region}`)
        }
        return costs[region];
}

// 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.
const scores: Record<string, number> = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

function calculateAverageScore(scores: Record<string, number>): number {
    const results = Object.values(scores);
    return results.reduce((prev, curr) => prev + curr, 0) / results.length;
}

// 문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트하는 기능을 구현하세요.

const prices: Record<string, number> = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

function updateProductPrice(
  prices: Record<string, number> ,
  product: string,
  newPrice: number
): Record<string, number> {
   return { ...prices, [product]: newPrice };
}