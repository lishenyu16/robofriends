import React, {useState,useEffect} from 'react'
import styles from './Card.module.css'

const Card = (props)=>{
    const [name,setName] = useState('janedoe')
    let imgUrl = `https://robohash.org/${name}.png?size=200x200`

    return (
        <div className={styles.Card}>
            <img src={imgUrl}></img>
            <div>
                <h2>Jane Doe</h2>
                <p>your@email.com</p>
            </div>
        </div>
    )
}

export default Card


 
// <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
//     <div>
//         hello world ;)
//     </div>
// </Animated>