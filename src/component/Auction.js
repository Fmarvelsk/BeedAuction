import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const Auction = () => {
    const history = useHistory()
    const [title, setTitle] = useState()
    const [time, setTime] = useState()
    const [endTime, setEndTime] = useState()
    const [image, setImage] = useState()
    const [error, setError] = useState()
    const [loading, isloading] = useState(false)
    const SendAuction = (e) => {
        e.preventDefault()
        if(endTime >= time){

        const data = {
            title : title,
            start_time : time,
            end_time : endTime,
            image : image
        }
        const sendRequest = async () => {
     isloading(true)
     //eslint-disable-next-line
           const request = await axios({
                method: "POST",
                headers: { 'Content-Type' : 'application/json'},
				data : data,	
                url:"https://beed-auction.herokuapp.com/sendAuction"
            }).then( () => {
                setError('')
                history.push('/Auction-product')
            })   
            .catch(err => {
                isloading(false)
               setError('Complete the input form')
                return err
            }
                )
             }
        sendRequest()
            }
        
    else {
        setError('End date is behind')
    }
    }

    return(
        <div>
            <form onSubmit={SendAuction}>
                <div className="form-c">
               <span className="cl"> {error}</span>
                
            <label>Title</label>
            <input 
            type="text"
            className="form-field"
             onChange={ (e) => setTitle(e.target.value)}/>
            <label>Start Time</label>
            <input 
            type="datetime-local"
            className="form-field"
             onChange={ (e) => setTime(e.target.value)}/>
            <label>End Time</label>
            <input 
            type="datetime-local"
            className="form-field"
             onChange={ (e) => setEndTime(e.target.value)}/>
             <label>Product Image</label>
            <input 
            type="file"
            onChange={ (e) => {
                const file = e.target.files[0]
                const reader = new FileReader()
                reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result)  
                   }

            }}/>
             
             <button type="submit" className="button-form"> {loading ? 'loading...' : 'Submit'} </button>
             </div>
             </form>
        </div>
    )
}
export default Auction