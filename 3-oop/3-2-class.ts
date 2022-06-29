{
    type CoffeeCup = {
        shots: number; 
        hasMilk: boolean; 
    }

    class CoffeeMaker {
        // static을 참조할땐 Class명.staic변수명 으로 참조한다.
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level <-- 클래스 레벨로 선언되어 클래스 마다 생성되는것이 아니고 공통으로 사용하게된다.
        coffeeBeansGramm: number = 0; // instance (object) level <-- 클래스가 생성할때마다 생성됨

        // 클래스 인스턴스가 생성될때 항상 호출되는 함수
        constructor(beans: number) {
            this.coffeeBeansGramm = beans;
        }

        // 함수를 static으로 만들어서 클래스를 따로 생성하지 않아도 커피메이커를 만들 수 있도록 해준다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeansGramm < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            
            this.coffeeBeansGramm -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    // new는 인스턴스를 생성하는것이고 ()를 해서 클래스 내 생성자를 실행한다.
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    // static으로 선언한 함수의 경우 클래스에서 직접 불러올 수 있게된다.
    const coffeeMaker = CoffeeMaker.makeMachine(3);
    console.log(coffeeMaker);

    // static 함수를 사용하는 경우
    Math.abs(-10); // Math라는 클래스에서 abs함수를 static으로 선언했기 때문에 참조가 가능한거임
    Object.assign({}); // 이 역시 Object라는 클래스에서 assign이라는 함수를 static으로 선언했기 때문에 클래스 레벨에서 참조가 가능한 것
}