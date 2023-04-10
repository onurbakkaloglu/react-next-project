import { useFormik } from 'formik';
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { loginSchema } from '../../schema/login';
import Link from 'next/link';

const login = () => {
    const onSubmit = async (values, actions) =>{
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues:{
            email: "",
            password: "",
        },
        onSubmit,
        validationSchema: loginSchema,
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Your Email Adress",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ]
  return (
    <div className='container mx-auto'>
      <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
        <Title addClass="text-[40px] mb-6">Login</Title>
        <div className='flex flex-col gap-y-2 w-full'>
            {inputs.map((input)=>(
                 <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
            ))}
            <div className='flex flex-col w-full gap-y-3 mt-6'>
            <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all'>Giriş Yap</button>
            <button className='text-white bg-secondary rounded-full py-2 px-6 hover:bg-btnBgHover transition-all'>
            <i class="fa fa-github mr-2 text-xl"></i>Github
            </button>
            <Link href="/auth/register">
              <span className='text-sm underline cursor-pointer text-secondary'>Yeni Hesap Oluştur</span>
            </Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default login
