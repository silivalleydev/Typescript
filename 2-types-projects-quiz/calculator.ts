/**
 * Let's make a calculator 🧮
 */
// 유니온 타입으로 따로 타입정의를 해준다.
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

// 함수의 인자에 직접 유니온으로 선언해도되지만 가독성이 떨어지기 때문에 위에 따로 선언함
// 항상 인자의 타입과 함수의 리턴타입도 같이 선언해줄것
function calculate(command: Command, num1: number, num2: number): number {
    switch (command) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'remainder':
            return num1 % num2;
        // default는 모든 케이스에 해당하지 않는 경우 실행하는 것이지만
        // 이 함수에서는 여기에 오는 상황이오면 안되기 떄문에 에러를 발생시켜야함
        default:
            // 정말 이게 에러상황이라면 확실하게 에러를 발생시켜줘야 
            // 다른 개발자에게 실수한 부분을 정확하게 인지 시켜줄 수 있다.
            throw Error('unknown command');
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
