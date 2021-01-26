import React, {useEffect, useState} from 'react'
import moment from 'moment'
const Product = (props) => {
        const [timer, setTimer] = useState()
        const [close, setClosed] = useState(false)
        const [hours, setHours] = useState('')
        const [min, setMinutes] = useState('')
        const [second, setSeconds] = useState('')
        
        
    useEffect( () => {
        const countDown = new Date(`${props.item.start_time}`).getTime()
        const presentDate = new Date('Jan 26, 2021 13:15').getTime()
           
        var x = setInterval( () => {
               const current = new Date().getTime()
                const timeLeft = countDown - current;
                const deadline = presentDate - current;

                var hours = Math.floor(timeLeft / (1000 * 60 * 60));
                var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                    
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
                if (timeLeft < 0) {
                      setClosed(true)
                      setTimer('Auction is Open')
                      if(deadline < 0){
                        clearInterval(x);
                        setTimer('Auction is Closed')
                      }
                  }

               
        }, 1000)
        return () => {
            setHours('')
            setMinutes('')
            setSeconds('')
        }
    }, [])
    return(
         <div className="flex-item">
                <div className="item">
                    <img src={props.item.image} alt="image" className="item-image"/>
                    <p className="time"> 
                    {close ?
                        timer :
                             `${hours} hrs: ${min} Min: ${second} secs left`}</p>
                    <div className="details">
                        <p>Title: {props.item.title}</p>
                        <p className="setTime">Start time: {moment(props.item.start_time).format("MMM Do, YYYY h:mmA")}</p>
                        <p className="setTime">End Time: Nov 02, 2020 08:00AM</p>
                    </div>
                </div>
            </div>
            
    )
}
export default Product