{
    /**
     * Type Assertions 쓰지말것
     */
    function jsStrFunc(): any {
        return 2;
    }

    const result = jsStrFunc();
    // 이게 casting(타입 변환) 하는 것이고 이게 type assertion 
    // <-- 그러나 타입이다름에도 assertion을 사용하면 추론되지 않는다.
    console.log((result as string).length);
    console.log((<string>result).length);


    const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1)); <-- 타입이 틀렸음에도 맞다고 생각함

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    // !. 을하는 경우 앞의 자료형이 undefined일 수 있음에도 number[]인것을 장담한다고 선언하는 것이다 <-- 하지만 안쓰는 것이 좋다..
    numbers!.push(1)

    // 뒤에 느낌표를 붙여주면 무조건 저 버튼 돔이 존재한다고 장담하는 것이다. <-- 그러나 안쓰는 것이 좋다
    const button = document.querySelector('class')!;
    
}