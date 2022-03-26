import React, { useEffect, useState } from 'react'

import './TinderCard.css';
import TinderCard from 'react-tinder-card';

import axios from '../../apiRequest/axios';




const TinderCaard = () => {

    const [people, setPeople] = useState([]);




    useEffect(() => {

        async function fetchData() {
            try {
                const { data } = await axios.get(`/tinder/cards`);
                setPeople(data)
            } catch (error) {
                console.log(error);
            }

        }

        fetchData()

    }, [])








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
                            style={{ backgroundImage: `url(${pep.imgUrl})` }}
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