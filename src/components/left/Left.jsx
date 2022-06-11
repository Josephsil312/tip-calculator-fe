import Right from '../right/Right'
import './left.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../../redux/userSlice';
const Left = () => {
    const dispatch = useDispatch()
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [btntip,setBtntip] = useState(0)
    
    const onChangeHandle = (e) => {
        setBill(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit({bill,tip,btntip}))
    }

    const handleTip1 = (e) => {
        e.preventDefault();
        setBtntip(bill*0.05)
        
    }
    const handleTip2 = (e) => {
        e.preventDefault();
        setBtntip(bill*0.1)
    }
    const handleTip3 = (e) => {
        e.preventDefault();
        setBtntip(bill*0.15)
    }
    const handleTip4 = (e) => {
        e.preventDefault();
        setBtntip(bill*0.2)
    }
    const handleTip5 = (e) => {
        e.preventDefault();
        setBtntip(bill*0.25)
    }

    return (
        <>
            <div className="container">
                <div className="maincontent">
                    <h3 className="bill">Bill</h3>
                    <input type = "number" className="billentry" placeholder='Enter amount' value={bill} onChange={onChangeHandle} />

                    <h3 className="percenttip">
                        Select tip %
                    </h3>
                    <div className="boxes">
                        <button className="bt1" value={5}  onClick = {handleTip1}>5%</button>
                        <button className="bt2" value={10} onClick = {handleTip2}>10%</button>
                        <button className="bt3" value={15} onClick = {handleTip3}>15%</button>
                        <button className="bt4" value={20} onClick = {handleTip4}>20%</button>
                        <button className="bt5" value={25} onClick = {handleTip5}>25%</button>
                        <input type="text" className="bt6" placeholder='Enter tip' value = {tip} onChange = {(e) => setTip(e.target.value)}/>
                    </div>
                    <button className="bt7" onClick = {handleSubmit}>Submit</button>
                </div>
            </div>
            {
                <Right />
            }
        </>
    )
}

export default Left