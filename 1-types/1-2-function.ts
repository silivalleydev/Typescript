{
    // 자바스크립트 똥 코드
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // 위코드를 타입스크립트화
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // 자바스크립트
    function jsFetchNum(id) {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // 위 코드 타입스크립트화
    // promise를 리턴하는 함수인데, Promise<자료형>
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    
}