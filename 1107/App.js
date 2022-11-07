// export function TestReact() {
//   return <h1>모듈 임포트1</h1>;
// }

// export function TestReact2() {
//   return <h2>모듈 임포트2</h2>;
// }

// 컴포넌트가 2개 이상일 경우 파일명 다르게 작성.

// export default function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// // export default function Appss() {
// //     return <h1>모듈 임포트1</h1>;
// // }

// // export default function () {
// //     return <h1>모듈 임포트1</h1>;
// // }

// export { TestReact, TestReact2 };
// export default App;

// function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact() {
//   return <h1>모듈 임포트2</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트3</h2>;
// }

// /* 
//   export 구문은 아래와 같이 별도로 선언이 가능하며, 선언 위치는 상관이 없음.
//   또한 여러개의 컴포넌트를 동시에 export 하는 경우에는 표현식 블럭{} 을
//   이용하여 객체 형태로 컴포넌트들을 나열함으로써 한꺼번에 export 가능.
// */
// export { TestReact, TestReact2 };
// export default App;

// function TestReact() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트2</h2>;
// }

// export { TestReact, TestReact2 };

// function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact() {
//   return <h1>모듈 임포트2</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트3</h2>;
// }

// /* 
//   export 시에는 * 적용 불가.
// */
// export { App, TestReact, TestReact2 };

import Hello from './Hello';

function App() {
  return (
    /* 
       태그 컴포넌트에 임의 사용자정의 프로퍼티와 값을 지정함으로써 해당 컴포넌트에
       객체 형태로 전달되고, 이를 매개변수(props)의 참조를 통해 태그 컴포넌트에 명시한
       프로퍼티명 그대로 멤버연산자(.)를 통해 필드와 동일한 형태로 참조 가능.
     */
    <Hello students="학생여러분!!" color="blue" />
  );
}

export default App;