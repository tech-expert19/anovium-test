import * as yup from 'yup'

const schema1 = (function () {
    const schema = yup.object({
        id: yup
            .string()
            .max(15, 'Must be 15 characters or less')
            .required('ID is required'),
        destinationAddress: yup
            .string()
            .max(20, 'Must be 20 characters or less')
            .required('Destination Address is required'),
        returnAddress: yup
            .string()
            .max(20, 'Must be 20 characters or less')
            .required('Return Address is required'),
    })

    return {
        schema
    }

})()

export default schema1