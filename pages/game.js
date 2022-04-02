import Footer from "../components/footer"
import styles from '../styles/Game.module.css'
import { firestore } from "../firebase/clientApp";

import { useRouter } from "next/router";




export default function Game(){
    const router = useRouter()

    return (
        <div>
            <main>
                <div className={styles.content}>

               <div>
               <h1>game screen</h1>
                
               </div>
               <input type="text" name="id" id="" placeholder="enter name"/>
                 <input type="text" name="id" id="" placeholder="enter code"/>
                    <button onClick={(e)=>router.push('/gamescreen')}>play</button>
                    <br />
                <p>or</p>
                <br />
                <button onClick={(e)=>router.push('/gamescreen')}>create new room</button>
                </div>
                
            </main>

            <Footer/>
        </div>
    )
}