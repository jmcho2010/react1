// 간단한 카운팅 어플

import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, incrementByAmount} from './counterSlice';
function Counter(){

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            {<h2>카운팅 : {count}</h2>}
            <button onClick={() => dispatch(increment())}>증가</button>
            <button onClick={() => dispatch(decrement())}>감소</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>5증가.</button>
        </div>
    );

}

export default Counter;