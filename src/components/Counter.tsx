import {useState} from "react";
import styles from './Counter.module.scss';
const Counter = () => {
    const [counter, setCounter] = useState(0);


    return <div>
        <h1>{counter}</h1>
        <button className={styles.btn}>rkbrf</button>
        <button>asdasd</button>
    </div>
}


export default Counter;