import React, { useState } from 'react'

import './TinderCard.css';
import TinderCard from 'react-tinder-card';







const TinderCaard = () => {

    const [people, setPeople] = useState([
        { name: 'Elon-Musk', url: "https://img.etimg.com/thumb/msid-90150323,width-650,imgsize-47522,,resizemode-4,quality-100/elon-musk-grimes-ap.jpg" },
        { name: 'APJ AbdulKalam', url: 'https://images.firstpost.com/wp-content/uploads/2021/07/APJ-Abdul-Kalam_PTI.jpg' }
    ])





    const Swiped = (direction, nameToDelete) => {

        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction)



    }


    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }










    return (
        <div className='tinderCards'>

            <div className="tinderCards__cardContainer">
                {people.map((pep) => (
                    <TinderCard className='swipe'

                        key={pep.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => Swiped(dir, pep.name)}
                        onCardLeftScreen={() => outOfFrame(pep.name)}



                    >


                        <div
                            style={{ backgroundImage: `url(${pep.url})` }}
                            className='card'


                        >

                            <h3>{pep.name}</h3>


                        </div>




                    </TinderCard>
                ))}
            </div>



        </div>
    )
}

export default TinderCaard