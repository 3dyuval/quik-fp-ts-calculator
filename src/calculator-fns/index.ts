import append  from './append'


export function calculate(displayValue = "", operation: string, value = ""): string {

    switch (operation) {
        case ('append'):
            return append(displayValue, value);    
            break;
        default:
            break;
    }
}