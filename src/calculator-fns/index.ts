import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/function'

type DisplayValue = [string, string]
export function calculate(
	displayValue: DisplayValue,
	operation: string,
	value = ''
): DisplayValue {
	switch (operation) {
		case 'append':
			return append(displayValue, value)
		case 'add':
            return append(displayValue, value, {
                symbol: '+',
                operation,
                fn: add
            })
		case 'subtract':
            return append(displayValue, value, {
                symbol: '-',
                operation,
                fn: subtract
            })
		case 'multiply':
            return append(displayValue, value, {
                symbol: '*',
                operation,
                fn: multiply
            })
		case 'divide':
            return append(displayValue, value, {
                symbol: '/',
                operation,
                fn: divide
            })
        case 'equals':
            const lastOperation = displayValue[1].split(' ')[1]
            // return [calculate(displayValue, lastOperation), '']
		default:
			break
	}
}

function append(
	displayValue: DisplayValue,
	value: string,
    operation?: {
        s: string,
        operation: string,
        fn: CalculatorFunction
    }
) {
	return pipe(
        O.fromNullable(displayValue),
        O.map(([currentValue, resultValue]) => {
            return operation
                ? ['', `${currentValue} ${operation.symbol}`]
                : [currentValue + value, resultValue]
        }),
		O.getOrElse(() => ['', ''])
	)
}

type CalculatorFunction = (
	currentValue: number,
	value: number
) => number

const add: CalculatorFunction = (currentValue, value) => {
	return currentValue + value
}

const subtract: CalculatorFunction = (currentValue, value) => {
	return currentValue - value
}

const multiply: CalculatorFunction = (currentValue, value) => {
	return currentValue * value
}

const divide: CalculatorFunction = (currentValue, value) => {
	return currentValue / value
}
