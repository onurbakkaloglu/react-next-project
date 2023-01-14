import React from 'react'
import Input from './form/Input'
import Title from './ui/Title'
import { useFormik } from 'formik';
import { resolve } from 'styled-jsx/css';

const Reservation = () => {

    const onSubmit = async (values, actions) =>{
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm()
    }

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues:{
            fullName:"",
            phoneNumber:"",
            email: "",
            persons: "",
            date: ""
        },
        onSubmit,
    });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Adress",
            value: values.email,
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
            value: values.persons,
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            value: values.date,
        },
    ]

    return (
        <div className='container mx-auto py-12'>
            <Title addClass="text-[40px] mb-10">Book A Table</Title>
            <div className='flex justify-between flex-wrap-reverse items-center gap-10'>
                <form className='lg:flex-1 w-full' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-y-3'>
                        {inputs.map((input) =>(
                            <Input key={input.id} {...input} onChange={handleChange} />
                        ))}
                    </div>
                    <button type='submit' className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all mt-4'>BOOK NOW</button>
                </form>
                <div className='lg:flex-1 w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193534.64083049106!2d-74.03736633539893!3d40.7184840057297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1673726722305!5m2!1str!2str"
                        width="600"
                        height="500"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='w-full'>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Reservation