import { useFormik } from 'formik';
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { registerSchema } from '../../schema/register';
import Link from 'next/link';

const Register = () => {
    const onSubmit = async (values, actions) =>{
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues:{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validationSchema: registerSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email Adress",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ]
  return (
    <div className='container mx-auto'>
      <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
        <Title addClass="text-[40px] mb-6">Kaydol</Title>
        <div className='flex flex-col gap-y-3 w-full'>
            {inputs.map((input)=>(
                 <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
            ))}
            <div className='flex flex-col w-full gap-y-3 mt-6'>
            <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all'>Kaydol</button>
            <Link href="/auth/login">
              <span className='text-sm underline cursor-pointer text-secondary'>Bir hesabın var mı? Giriş Yap!</span>
            </Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Register
