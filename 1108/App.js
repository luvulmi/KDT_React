// import './App.css';

// import Img from './Img';
// import NationContainer from './NationContainer';
// import NationBox from './NationBox';

// function App() {
//   let nationBox = [];
//   // 배열로 만들기

//   for (let i = 0; i < 5; i++) {
//     nationBox[i] = <NationBox key={`nation${i}`} idx={i + 1} opacity = {i > 0 ? 0.5 : 1}/>;
//     // nationBox.push = <NationBox key={`nation${i}`} idx={i + 1} opacity = {i > 0 ? 0.5 : 1}/>;
//   }
//   // 키 프로퍼티 생성하여야함. 고유 식별자 할당하여야.
//   // push 가장 밑에다가 요소 추가.

//   return (
//     <div id="main_container">
//       <Img src='./img/1.jpg' alt='img'/>
//       <NationContainer>
//         {nationBox}
//       </NationContainer>
//     </div>
//   );
// }


// export default App;

// import Event1 from "./subModule/Event1";
// import Event2 from "./subModule/Event2";

// function App() {
//   const style = {
//     backgroundColor: 'purple',
//     color: 'white',
//     fontSize: '3em',
//     textDecoration: 'none',
//     marginBottom: '10px',
//   }
//   // 한번 지정한 값은 변경 불가.

//   return (
//     <>
//       <Event1 style={style} />
//       <Event2 style={style} />
//     </>
//   );
// }

// export default App;

import Counter from "./subModule/Counter";

function App() {
    const spanStyle = {
        display: 'inline-block',
        margin: '20px 20px',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '2em',

    },
        btnStyle = {
            marginRight: '40px',
        };

    return (
        <Counter spanStyle={spanStyle} btnStyle={btnStyle} />
    );
}

export default App;
