import * as yup from 'yup'

const schema1 = (function () {
    const schema = yup.object({
        search: yup
            .string()   
    })

    return {
        schema
    }

})()

export default schema1