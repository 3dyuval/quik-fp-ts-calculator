import { component$, useSignal, $} from '@builder.io/qwik'
import './calculator.scss'
import {calculate} from './calculator-fns'

export const Calculator = component$(() => {
    
    const display = useSignal<[string, string]>(['0', '']);


    const onClick = $((e) => {

        if (e.target.dataset.value) {
            display.value = [display.value[0] + e.target.dataset.value, display.value[1]]
            return
        }
        if (e.target.dataset.operation) {
            if (e.target.dataset.operation !== '=') {
                display.value = ["", display.value[0] + e.target.dataset.operation,]
                    return
            }
            const operation = display.value[1].charAt(display.value[1].length - 1)
            const value1 = +display.value[1].slice(0, -1)
            const value2 = +display.value[0]

            const operations: {[o: string]: Function} = {
                '+': (a: number, b: number) => a + b,
                '-': (a: number, b: number) => a - b,
                '*': (a: number, b: number) => a * b,
                '/': (a: number, b: number) => a / b,
            };

            let result: number | string = operations[operation](value1, value2)
            if (typeof result !== 'number') {
                result = "err"
            } else {
                result = result.toString()
            }
        
            display.value = ["", result]
        }
        if (e.target.dataset.operation === 'ca') {
            display.value = ["", ""]
            return
        }
        if (e.target.dataset.operation === 'c') {
            display.value = [display.value[0].slice(0, -1), display.value[1]]
            return
        }
        
    })

    return (<div class="calculator">
        <div class="display">
            <div class="history">{display.value[1]}</div>
            <div class="value">{display.value[0]}</div>
        </div>
        <div class="controls">
            <div class="numbers">
                <button class="number" data-value="1" onClick$={onClick} >1</button>
                <button class="number" data-value="2" onClick$={onClick} >2</button>
                <button class="number" data-value="3" onClick$={onClick} >3</button>
                <button class="number" data-value="4" onClick$={onClick} >4</button>
                <button class="number" data-value="5" onClick$={onClick} >5</button>
                <button class="number" data-value="6" onClick$={onClick} >6</button>
                <button class="number" data-value="7" onClick$={onClick} >7</button>
                <button class="number" data-value="8" onClick$={onClick} >8</button>
                <button class="number" data-value="9" onClick$={onClick} >9</button>
                <button class="number" data-value="0" onClick$={onClick} >0</button>
            </div>
            <div class="arithmetic">
                <button onClick$={onClick} data-operation="+" >+</button>
                <button onClick$={onClick} data-operation="-">-</button>
                <button onClick$={onClick} data-operation="*">*</button>
                <button onClick$={onClick} data-operation="/">/</button>
            </div>
            <div class="execute">
            <button onClick$={onClick} data-operation="ca">ca</button>
                <button onClick$={onClick} data-operation="c">c</button>
                <button onClick$={onClick} data-operation="=">=</button>
            </div>
        </div>
    </div>)
})