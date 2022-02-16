


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BasicTable } from '../src/components/basicTable'


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/users/sms');
  const data = await res.json();

  return {
    props: { data }
  }

}




export default function Home({data}) {
  return (
    
    <div className='text-center text-bermuda-10  text-2xl font-bold'>
      <div className='text-center text-5xl text-green-800 mt-4 font-bold' >
      <h1>Phone Texts</h1>
        </div >
        <div className='w-[35%] h-full text-center mx-auto mt-4 rounded-xl shadow-xl'><BasicTable sendData={data} /> 
        </div> 
    </div>
  )
}
