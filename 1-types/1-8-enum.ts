{
    /**
     * Enum 여러가지 상수를 한번에 모아주는 것
     */
    // Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2
    });

    const dayOfToday = DAYS_ENUM.MONDAY;

    // TS
    enum Days {
        // Monday = 'monday', <-- 이렇게 스트링도 선언가능
        Monday, //0
        Tuesday, //1
        Wednesday, //2 값을 할당하지 않는 경우 순으로 자동으로지정됨
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days.Tuesday);
    const day = Days.Sunday;
    console.log(day)
    
    // Enum을 사용하지 않는 것이좋다. Enum을 사용하는 경우 타입이 보장되지 않는다
    // *** 아래와 같이 변수에 정확한 타입을(유니온 등등) 지정해주는 것이 좋다 ***
    // 변수에 정확한 타입을 할당해줘야하는것, 변수에 타입 값을 넣어주는 것은 타입이 보장되는 것이 아니다.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    const dayOfWeek: DaysOfWeek = 'Monday';
}