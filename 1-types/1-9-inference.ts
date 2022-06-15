{
    /**
     * Type Inference: 타입 추론
     */
    let text = 'hello';// 선언함과 동시에 타입이 스트링으로 할당됨
    // text = 1; <-- 스트링으로 선언했기때문에 number가 할당안됨
    function print(message: string) {
        console.log(message);
    }

    print('hello');
    // print(1);

    function add(x: number, y: number): number {
        return x + y;
    }
    const result = add(1, 2); // add가 숫자를 반환하기 때문에 result 변수는 number
}