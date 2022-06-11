import './right.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { reset } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
const Right = () => {
    const dispatch = useDispatch()
    let bill = Number(useSelector(state => state.user.bill))
    let tip = Number(useSelector(state => state.user.tip))
    let btntip = Number(useSelector(state => state.user.btntip))

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(reset({ bill, tip, btntip }))
    }

    return (
        <>
        <div className="containerr">
            <div className="maincontent">
                <div className="tip">
                    <h3 className="tipamt">Tip Amount</h3>
                    <h4 className="perperson">/ person</h4>
                    <h4 className='billl1'>${(btntip)}</h4>
                </div>
                <div className="total">
                    <h3 className="totall">Total</h3>
                    <h4 className="perpersonn">/ person</h4>
                    <h4 className='tip111'>${bill + btntip}</h4> 
                </div>
            </div>
            <button className="reset" onClick={handleReset}>Reset</button>
            {((tip*0.01) * bill) + bill}
            
        </div>
        {((tip*0.01) * bill)}
        </>
    )
}

export default Right