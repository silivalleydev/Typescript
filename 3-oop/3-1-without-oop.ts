{
    type CoffeeCup = {
        shots: number; // 커피에 샷이 몇번 들어갔는지
        hasMilk: boolean; // 커피에 우유가 들어갔는지
    }

    // 한샷에 7g의 커피빈이 필요하다고 가정
    const BEANS_GRAMM_PER_SHOT: number = 7;
    // 현재 보유한 커피 그램 수
    let coffeeBeansGramm: number = 3 * BEANS_GRAMM_PER_SHOT;
    function makeCoffee(shots: number): CoffeeCup {
        // 커피빈이 충분하지 않은 경우 에러가 발생하도록 해준다.
        if (coffeeBeansGramm < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        
        coffeeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false
        }
    }

    const coffee = makeCoffee(2);
    console.log(coffee);
}