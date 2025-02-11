import React from 'react';
import ReactDOM from 'react-dom/client';
import Hooks1 from './Hooks/useStateExam.js'
import Hooks2 from './Hooks/useEffectExam.js'
import Hooks3 from './Hooks/useContextExam.js'
import Hooks4 from './Hooks/useRefExam.js'
import Hooks5 from './Hooks/useReducer.js'
import Hooks6 from './Hooks/useReducer2.js'
import Hooks7 from './Hooks/useMemo.js'
import Hooks8 from './Hooks/customHook.js'
import Test from './basic/test.js'
import RoutingApp from './RoutingApp.js';
import RoutingQuiz1 from './routequiz1/App.js'
import RoutingQuiz2 from './routequiz2/App.js'
//import RoutingQuiz3 from './routequiz3/App.js'
// import Redux1 from './Redux/Counter.js';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store.js';
import Redux2 from './ReduxThunk/App.js'


//Hooks 전용 index
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Redux2 />);

// redux를 쓰기위해서는 Provider 컴포넌트가 필요.
// Provider에 store props를 필수로 전달해야함.
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         {/* redux를 사용할때는 최상위 컴포넌트는 반드시 Provider 컴포넌트에 감싸져야함
//             store props 또한 필수적으로 전달해줄 필요가 있음.*/ }
//         <Provider store={store}>
//             <Redux2 />
//         </Provider>
//     </React.StrictMode>
// );