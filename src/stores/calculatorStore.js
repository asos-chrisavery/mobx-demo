import { makeObservable, observable, computed, action } from "mobx"
class CalculatorStore {
    inputA = 1
    inputB = 2

    constructor () {
        makeObservable(this, {
            inputA: observable,
            inputB: observable,
            setA: action,
            setB: action,
            result: computed,
            emergencyResult: computed
        })
    }
    
    setA(val) {
        this.inputA = val
    }

    setB(val) {
        this.inputB = val
    }

    get result() {
        return this.inputA + this.inputB
    }

    get emergencyResult() {
        return `${this.result}!!!!!!!!`
    }
}

export default CalculatorStore