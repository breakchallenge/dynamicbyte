import React, { useState } from 'react'
import styles from '../style'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendData = () => {
    axios.post('https://zhulinllc.vercel.app/api/contact', {
      name,
      email,
      phone,
      subject,
      message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => {
      toast.success("Your form submission has been successfully received. Thank you!")
    })
    .catch(error => {
      toast.success("Your form submission has been successfully received. Thank you!")
    });
    setName('')
    setPhone('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
  return (
    <section id='contact' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <ToastContainer />
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Contact Us</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
             Partner with us to transform your digital presence. For inquiries or to schedule a consultation, feel free to reach out. Anytime!
          </p>  
        </div>
      </div>
      <div className='flex gap-x-16 justify-center w-full feedback-contrainer relative z-[1]'>
        <div class="flex flex-col w-1/3 gap-y-8">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-white">Name</label>
            <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} id="first_name" className="border text-white text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="" required />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white">Email Address</label>
            <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} id="email" className="border text-white text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-white">Phone Number</label>
            <input type="text" value={phone} onChange={e => setPhone(e.currentTarget.value)} id="phone" className="border text-white text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="" required />
          </div>
        </div>
        <div class="flex flex-col w-1/3 gap-y-8">
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" value={subject} onChange={e => setSubject(e.currentTarget.value)} id="subject" className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea type="text" value={message} onChange={e => setMessage(e.currentTarget.value)} id="messgae" className="border text-white text-sm rounded-lg min-h-[140px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
          </div>
        </div>
      </div>
      <div class="flex flex-end justify-center mt-8">
        <button type="button" onClick={sendData} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's Talk</button>
      </div>
    </section>
  )
}

export default Contactus
