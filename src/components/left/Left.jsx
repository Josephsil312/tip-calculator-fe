import Right from '../right/Right'
import './left.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../../redux/userSlice';
const Left = () => {
    const dispatch = useDispatch()
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    
    
    const onChangeHandle = (e) => {
        setBill(e.target.value)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit({bill,tip}))
        
    }
    const handleTip = (e) => {
        e.preventDefault();
        let tipamt1= bill * 0.05
        let tipamt2 = bill * 0.1
        let tipamt3 = bill * 0.15
        let tipamt4 = bill * 0.2
        let tipamt5 = bill * 0.25
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
                        <button className="bt1" value={5}  onClick = {handleTip}>5%</button>
                        <button className="bt2" value={10} >10%</button>
                        <button className="bt3" value={15} >15%</button>
                        <button className="bt4" value={20} >20%</button>
                        <button className="bt5" value={25} >25%</button>
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