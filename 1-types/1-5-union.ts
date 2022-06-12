{
    // Union Types: OR
    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }
    move('right');
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    type SuccessState = {
        response: {
            body: string
        }
    }
    type FailState = {
        reason: string
    }
    type LoginState = SuccessState | FailState;

    // function login(id: string, password: string): LoginState {
    //     return {
    //         response: {
    //             body: 'logged in!'
    //         }
    //     }
    // }

    // // printLoginState(state)
    // function printLoginState(state: LoginState): void {
    //     if ('response' in state) {
    //         console.log(`${state.response.body}`);
    //     } else {
    //         console.log(`${state.reason}`);
            
    //     }
    // }
}