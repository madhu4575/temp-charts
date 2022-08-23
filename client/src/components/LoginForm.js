import { withRouter } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { startLogin } from '../actions/userActions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './custom.css'


const LoginForm = (props) => {

    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('email is required')
            .email('Invalid email!'),
        password: Yup.string()
            .required('password is requried')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (formData, { resetForm }) => {
            dispatch(startLogin(formData, resetForm, props))
        }
    })

    return (
        <div className='color-overlay d-flex justify-content-center align-items-center'  >
            <Form onSubmit={formik.handleSubmit} className='rounded p-4 p-sm-5'>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label><br />
                    <Form.Control 
                        type="text"
                        name='email'
                        placeholder='Enter your email'
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    <Form.Text className='text-muted'>
                        <div>
                        {formik.touched.email && Boolean(formik.errors.email) && formik.errors.email}
                        </div>
                        <br />
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label><br />
                    <Form.Control 
                        type="password"
                        name='password'
                        placeholder='Enter your password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <Form.Text>
                        <div>
                        {formik.touched.password && Boolean(formik.errors.password) && formik.errors.password}
                        </div>
                        <br />
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" value='LOGIN'>Login</Button>
                
        </Form>
        </div>
    )
}

export default withRouter(LoginForm)