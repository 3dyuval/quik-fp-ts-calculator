import { component$, useSignal, $} from '@builder.io/qwik'
import './calculator.scss'
import {calculate} from './calculator-fns'

export const Calculator = component$(() => {
    
    const display = useSignal<[string, string]>(['0', '']);

    const onClick = $((e) => {

        display.value = calculate(
            display.value,
            e.target.dataset.operation,
            e.target.dataset.value
        )
    })

    return (<div class="calculator">
        <div class="display">
            <div class="history">{display.value[1]}</div>
            <div class="value">{display.value[0]}</div>
        </div>
        <div class="controls">
            <div class="numbers">
                <button class="number" data-operation="append" data-value="1" onClick$={onClick} >1</button>
                <button class="number" data-operation="append" data-value="2" onClick$={onClick} >2</button>
                <button class="number" data-operation="append" data-value="3" onClick$={onClick} >3</button>
                <button class="number" data-operation="append" data-value="4" onClick$={onClick} >4</button>
                <button class="number" data-operation="append" data-value="5" onClick$={onClick} >5</button>
                <button class="number" data-operation="append" data-value="6" onClick$={onClick} >6</button>
                <button class="number" data-operation="append" data-value="7" onClick$={onClick} >7</button>
                <button class="number" data-operation="append" data-value="8" onClick$={onClick} >8</button>
                <button class="number" data-operation="append" data-value="9" onClick$={onClick} >9</button>
                <button class="number" data-operation="append" data-value="0" onClick$={onClick} >0</button>
            </div>
            <div class="arithmetic">
                <button onClick$={onClick} data-operation="add" >+</button>
                <button onClick$={onClick} data-operation="subtract">-</button>
                <button onClick$={onClick} data-operation="multiply">*-</button>
                <button onClick$={onClick} data-operation="divide">%</button>
            </div>
            <div class="execute">
            <button onClick$={onClick} data-operation="clear-last">c</button>
                <button onClick$={onClick} data-operation="clear-all">ca</button>
                <button onClick$={onClick} data-operation="equals">=</button>
            </div>
        </div>
    </div>)
})