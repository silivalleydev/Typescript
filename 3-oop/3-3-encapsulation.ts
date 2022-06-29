{
    type CoffeeCup = {
        shots: number; 
        hasMilk: boolean; 
    }

    class CoffeeMaker {
        // private으로 선언하면 바깥에서 클래스로 참조할 수 없다.
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level <-- 클래스 레벨로 선언되어 클래스 마다 생성되는것이 아니고 공통으로 사용하게된다.
        // private으로 선언하면 바깥에서 바꿀 수 없다.
        private coffeeBeansGramm: number = 0; // instance (object) level <-- 클래스가 생성할때마다 생성됨

        // constructor를 private으로 선언한 경우는 더이상 new 생성자로 이 객체를 생성할 수 없다.
        // 따라서 new 생성자로 객체를 생성하는 것이 아닌 다른 static 함수를 통해서(이 함수의 경우 makeMachine) 이 객체를 생성할 수 있다고 유추 할 수 있다.
        private constructor(beans: number) {
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

        // public: 모두 참조할 수 있음
        // private: 이클래스 외부에선 접근할 수 없음
        // protected: 이클래스를 상속받는 클래스의 경우 참조할 수 있으나 외부에선 참조 불가능
        // 이 함수를 통해 coffeeBeansGramm의 값을 바꿀수 있게함으로서
        // 음수인지 검증을 해서 클래스의 값을 바꾸기 때문에 안정성이 높아진다.
        fillCoffeeBeans(beans: number) {
            // 만약 beans를 음수로 넣어준 경우
            if (beans < 0) {
                // 에러인것을 정확하게 메세지로 안내해줘야 개발자가 더 명확하게 알 수 있다.
                throw new Error('value for beans should be greater then 0');
            }
            this.coffeeBeansGramm += beans;
        }
    }

    // new는 인스턴스를 생성하는것이고 ()를 해서 클래스 내 생성자를 실행한다.
    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);
    maker.fillCoffeeBeans(55);
    
    // maker.coffeeBeansGramm = -34; // 이런식으로 incapsulation안된 경우 이상한 값으로 세팅할 수 있다.

    class User {
        // private firstName: string;
        // private lastName: string;
        // fullName: string;
        private internalAge = 4;
        // 생성자 내부에 private 키워드로 변수를 선언해주면 해당 변수가 멤버 변수로 선언된다.
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName; <-- private으로 선언해줬기 때문에 이렇게 따로 안넣어줘도 생성될때 바로 전달받은 값이 들어가게된다.
            // this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`;
        }


        // 어떠한 계산을 해야하는 경우 setter와 getter을 사용한다.
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('age value must be a positive number');
            }
            this.internalAge = num;
        }
    }
    const user = new User('Sunny', 'Steve');
    console.log(user.fullName);
    // user.firstName = 'Suhyun';
    console.log(user.fullName);
    
}