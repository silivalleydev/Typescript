{
    // Array
    const fruits: string[] = ['๐', '๐'];
    const scores: Array<number> = [1, 3, 4];

    // readonly๋ฅผ ์ฌ์ฉํ๋ฉด ์ด ์ธ์๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ค.
    function printArray(fruits: readonly string[]) {
        // fruits.push()
    }

    function pushArr(arr: readonly string[]) {
        // arr.push('c');
    }

    // Tuple <-- ์๋ก๋ค๋ฅธ ํ์์ ๊ฐ์ง์์๋ ๋ฐฐ์ด์ ํํ์ด๋ผ๊ณ ํ๋ค. <-- ์ฌ์ฉํ์ง๋ง์ธ์
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student;

    
}