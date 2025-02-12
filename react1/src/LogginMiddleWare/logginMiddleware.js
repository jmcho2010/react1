// 요구사항:
// 1. 모든 액션의 발생 시간을 로깅
//    -> 로그 찍기(메서드 흐름 파악)
// 2. 액션 발생 전/후의 상태 변화를 콘솔에 출력
// 3. 특정 액션 타입일 때만 로깅하는 옵션 추가
// 4. 개발 환경에서만 로깅하도록 설정

const createLoggingMiddleware = (options = {}) =>{

    //옵션 디스트럭처링
    const {
        actionTypes = [], // 로깅을 하게될 특정한 액션 타입들을 저장하는 배열
        development = true // 개발환경 여부.
    } = options;

    return store => next => action =>{
        // 프로덕션 환경이거나 특정 액션 타입만 로깅하도록 설정된 경우.
        if(!development || (actionTypes.length 
            && !actionTypes.includes(action.type))){
                return next(action);
            }

        const timestamp = new Date().toISOString();
        const prevState = store.getState();
        
        console.group(`Action: ${action.type} @ ${timestamp}`);
        console.log('이전 상태:', prevState);
        console.log('액션:', action);

    }

}
