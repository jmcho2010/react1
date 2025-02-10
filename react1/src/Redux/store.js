import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

//어플리케이션이 시작되면 스토어가 생성
// configureStore가 Redux 스토어를 생성해줌.
export const store = configureStore({

    reducer: {
        counter: counterReducer
    }
});