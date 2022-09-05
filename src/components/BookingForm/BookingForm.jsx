import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'

const BookingForm = (props) => {

    const { users } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (values) => {

        console.log('onSubmit', values)

        const response = await axios.post('http://localhost:3006/submit', values);

        console.log(response, 'response')

        // const customEvent = new CustomEvent('message', { detail: values });
        // window.dispatchEvent(customEvent)



    }

    useEffect(() => {

        if(users) {
            console.log('it has users')
        } else {
            console.log('doesnt have users')
        }

    }, [users])

    //console.log(users.user1.name, 'BOOKING FORM')

    return (
        <Formik
            initialValues={{ email: users && users.user1 ? users.user1.name : '' , password: users && users.user1 ? users.user1.password : '' }}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                } else if (!values.password) {
                    errors.password = 'Required'
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address'
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                await onSubmit(values)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", margin: "30px auto", flexDirection: "column", width: "50%" }}>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <label>
                                {'Email: '}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    style={{ width: '300px' }}
                                    placeholder='Please enter email'
                                />
                            </label>
                            {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <label>
                                {'Password: '}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={{ width: '300px' }}
                                    placeholder='Please enter password'
                                />
                            </label>
                            {errors.password && touched.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{ width: "200px", backgroundColor: '#4895d0', color: '#fff', fontWeight: "bold", padding: '5px' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )

}

export default BookingForm
