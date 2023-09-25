import { component$, useSignal } from '@builder.io/qwik'
import './app.css'
import { Calculator } from './calculator'
export const App = component$(() => {
  const count = useSignal(0)

  return (
    <>
      <h1>Calculator</h1>
        <Calculator />
      <p class="read-the-docs">
        Using Quik and FP-TS
      </p>
    </>
  )
})
