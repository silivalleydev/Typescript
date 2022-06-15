{
    // intersaction: & 개념
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    // 다양한 타입을 한번에 묶어서 사용할 수 있다.
    // 학생이면서 일하는 사람인 타입
    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'Steve',
        score: 1,
        employeeId: 12,
        work: () => {}
    });
}