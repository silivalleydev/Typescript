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
}