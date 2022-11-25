import { useState } from "react"

const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm )

    const onChangeForm = ({ target: {name, value} }) => {
        setFormState( data => ({...data, [name]:value }) )
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        setFormState,
        onChangeForm,
        onResetForm
     }
}

export { useForm }