
import { evaluate, format } from 'mathjs';

const calcular = (text) => {
    try {
        const result1 = evaluate(text.toString())
        const result = format(result1, { precision: 9 })
        return(result)
      } catch (error) {
        return('Error') // catch
      }
}

export default calcular


