{
    // Javascript
    // old: var
    // var age = 5;
    // age = 1;

    // let
    // let name = 'hello';
    // name = 'hi';

    // const
    // const age = 5;
    // age = 5;

    /**
     * Primitive type(원시타입): number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */
    // number
    const num:number = 2;

    // string
    const str:string = 'hello';

    // boolean
    const bool:boolean = false;

    // undefined: 값이 있는지 없는지 결정되지 않은 상태를 의미
    let name:undefined;
    let age:number | undefined;
    age = undefined;
    age = 23;

    // find 함수가 리턴하는 값이 number 또는 undefined라는 것을 정의
    function find(number): number | undefined {
        return number;
    }

    // null: 비었다라고 결정된 의미 <-- 보통은 undefined를 사용
    let person:null;
    let person2: string | null;

    // unknown <-- 가능하면 쓰지말것: 어떤타입일지 알 수 없다. <-- 자바스크립트 라이브러리를 쓸 때 어떤 것을 반환할지 모르는 경우 사용
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true

    // any <-- 가능하면 쓰지말것
    let anything: any = 0;
    anything = 'hello';

    // void: 아무것도 리턴하지 않는 함수의 경우에 리턴 값으로 사용한다.
    function print(): void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined; //<-- 이렇게 사용안함

    // never
    function throwError(message: string): never {
        // message -> server (log)
        // 에러를 던지고 아무것도 리턴하지 않는경우
        throw new Error(message);

        // while문 무한정 도는경우
        while (true) {}

        // never 타입은 void도아닌 완전히 리턴되지 않는 경우
    }

    let obj: object; // 쓰지말것 <-- object도 명확하게 타입을 지정해줄것 왜냐하면 array가 올지 json이 올지 모르기 때문이다.

    function acceptObject(obj: object) { console.log(obj) }
    acceptObject({ name: 'hello' });
    acceptObject([1, 2, 3, 4]);
}