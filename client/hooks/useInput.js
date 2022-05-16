import {useState, useCallback} from 'react';


//custom hook
export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => { //Component의 props로 넘겨주는 함수를 usecallback사용!
        setValue(e.target.value);
    }, []);
    return [value,handler,setValue];
}