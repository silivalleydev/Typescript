{
    // Array
    const fruits: string[] = ['🍎', '🍌'];
    const scores: Array<number> = [1, 3, 4];

    // readonly를 사용하면 이 인자를 변경할 수 없다.
    function printArray(fruits: readonly string[]) {
        // fruits.push()
    }

    function pushArr(arr: readonly string[]) {
        // arr.push('c');
    }

    // Tuple <-- 서로다른 타입을 가질수있는 배열을 튜플이라고한다. <-- 사용하지마세요
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student;

    
}