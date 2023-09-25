import { component$, useSignal, $} from '@builder.io/qwik'
import './calculator.scss'

export const Calculator = component$(() => {
    
    const display = useSignal('0');

    const onClickNumber = $((e) => {
        console.log(e.target.dataset.value)
    })

    return (<div class="calculator">
        <div class="display">{display.value}</div>
        <div class="controls">
            <div class="numbers">
            <button class="number" data-value="1" onClick$={onClickNumber} >1</button>
            <button class="number" data-value="2" onClick$={onClickNumber} >2</button>
            <button class="number" data-value="3" onClick$={onClickNumber} >3</button>
            <button class="number" data-value="4" onClick$={onClickNumber} >4</button>
            <button class="number" data-value="5" onClick$={onClickNumber} >5</button>
            <button class="number" data-value="6" onClick$={onClickNumber} >6</button>
            <button class="number" data-value="7" onClick$={onClickNumber} >7</button>
            <button class="number" data-value="8" onClick$={onClickNumber} >8</button>
            <button class="number" data-value="9" onClick$={onClickNumber} >9</button>
            <button class="number" data-value="0" onClick$={onClickNumber} >0</button>
            </div>
        </div>
    </div>)
})