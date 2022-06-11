import './right.css'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import { reset } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
const Right = () => {
    const dispatch = useDispatch()
    const bill = useSelector(state =>state.user.bill)
    const tip = useSelector(state =>state.user.tip)
    const [tipamt,setTipAmt] = useState("$0.00")
    const [total,setTotal] = useState("$0.00")
    const handleReset = (e) => {
        e.preventDefault();
        dispatch(reset({bill,tip}))
    }
    return (
        <div className="containerr">
            <div className="maincontent">
                <div className="tip">
                    <h3 className="tipamt">Tip Amount</h3>
                    <h4 className="perperson">/ person</h4>
                    <h4 className='billl1'>${bill}</h4>
                </div>
                
                
                <div className="total">
                <h3 className="totall">Total</h3>
                    <h4 className="perpersonn">/ person</h4>
                    <h4 className='tip111'>${tip}</h4>
                </div>
            </div>
            <button className="reset" onClick = {handleReset}>Reset</button>
        </div>
    )
}

export default Right