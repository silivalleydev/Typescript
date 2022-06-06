## Typescript

- `tsc`: tsc 명령어는 ts 파일을 컴파일해서 js로 내보내주는 역할을 한다.
```
$ tsc main.ts

=>> output이 main.js
```
- `ts-node` 패키지: ts 파일을 바로 노드로 실행하게 해주는 패키지 이다.
    - 실행은 ts 파일을 js로 변환한 뒤에 node에서 js파일을 실행하는 과정을 한번에 해주는 것 
```
$ ts-node main.ts
```
- `tsc main.ts -w`: `-w` 플래그를 설정하면 main.ts 파일이 변경될 때마다 바로 컴파일 돼서 js로 나오게된다.
