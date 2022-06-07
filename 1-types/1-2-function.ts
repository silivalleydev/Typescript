{
//     // 자바스크립트 똥 코드
//     function jsAdd(num1, num2) {
//         return num1 + num2;
//     }

//     // 위코드를 타입스크립트화
//     function add(num1: number, num2: number): number {
//         return num1 + num2;
//     }

//     // 자바스크립트
//     function jsFetchNum(id) {
//         // code...
//         // code...
//         return new Promise((resolve, reject) => {
//             resolve(100);
//         })
//     }

//     // 위 코드 타입스크립트화
//     // promise를 리턴하는 함수인데, Promise<자료형>
//     function fetchNum(id: string): Promise<number> {
//         // code...
//         // code...
//         return new Promise((resolve, reject) => {
//             resolve(100);
//         })
//     }

    // 타입이 정해진 함수
    // Optional Parameter
    // 파라메터에 ?를 넣으면 해당 인자는 넣어줘도되고 안되는 파라메터
    function printName(firstname: string, lastName?: string) {
        console.log(firstname);
        console.log(lastName);
    }
    printName("Steve", "Sunny");
    printName("Steve Sunny");

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest Parameter ...변수명으로 하면 여러개를 받을 수 있다.
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((p, c) => p + c);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}