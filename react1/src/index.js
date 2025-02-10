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


//Hooks 전용 index
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutingQuiz2 />);