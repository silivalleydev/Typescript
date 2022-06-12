{
    // 타입 앨리어스: 새로운 타입을 정의할 수 있다는 말
    type Text = string;

    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string,
        age: number
    };

    const student: Student = {
        name: 'suhyun',
        age: 29
    }

    // String Literal Types
    type Name = 'name';

    let ellieName: Name;
    ellieName = 'name';

    type JSON = 'json';

    const json: JSON = 'json';

    type Bool = true;

    const isCat: Bool = true;
}