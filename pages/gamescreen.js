import Image from 'next/image'
import Footer from '../components/footer'
import styles from '../styles/Game.module.css'


function begin(){

}

export default function GameScreen(){
  if(2>1){
      return (
<div>
    <main>
<div className={styles.content} id="content" >
<h1>people in the room: 3</h1>
<button onClick={(e)=>begin()}>start</button>
</div>


    </main>

    <Footer/>
</div>
      )

  }
  else{
      return (
<div>
    <main>


<div className={styles.content} id="gamecontent">
<h1>game has started!!!</h1>
</div>
    </main>

    <Footer/>
</div>
      )
  }

}