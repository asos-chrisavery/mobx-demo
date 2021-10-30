import React from 'react'
import { observer } from 'mobx-react-lite'
import { useCalcStore } from './storeContext'

export const Calculator = observer(() => {
    const calc = useCalcStore()
    return (
        <div>
            <label>Input A
            <input type="number" value={calc.inputA} onChange={(e) => calc.setA(+e.target.value)} />
            </label>

            <label>Input b
            <input type="number" value={calc.inputB} onChange={(e) => calc.setB(+e.target.value)}/>
            </label>

            <h2>Result</h2>
            <text>{calc.result}</text>



            <h2>Emergency Result</h2>
            <h1 style={{color: 'red'}} >{calc.emergencyResult}</h1>
        </div>
    )
})