import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/form/Input'
import Header from '../components/layout/Header'
import styles from '../styles/Home.module.css'
import Home from "./home"

export default function Index() {
  return (
   <div>
    <Header />
    <Home/>
   </div>
  )
}
