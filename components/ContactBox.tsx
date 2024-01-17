import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';
import { useState } from 'react';
import Button from './Button';

interface ContactBoxProps {
    
}

export default function ContactBox(props: ContactBoxProps) {
    const { t } = useTranslation();
    const [inputFullName, setInputFullName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputServiceRequested, setInputServiceRequested] = useState(0);
    const [inputDescription, setInputDescription] = useState('');
    const [inputTermsAccepted, setInputTermsAccepted] = useState('true');
  
    return (
      <div>
        <div className="relative flex overflow-x-hidden text-[#FAFF00] bg-black">
            <div className="py-2 animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
            </div>

            <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-2 fontedBebas"> info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
                <span className="text-4xl mx-2 fontedBebas">info@ginevar.com </span>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1'>
            <div className='sm:col-span-1 col-span-1 flex items-center p-6 px-12'>
                <h1 className='fontedBebas leading-none text-center w-full my-10'>
                    <p className='text-[124px] tracking-widest'><span className='text-[#FF7878]'>Get</span> <span className='text-[#B3C73E]'>in</span> <br/> <span className='text-[#78A6FF]'>touch</span></p>
                </h1>
            </div>

            <div className='sm:col-span-1 col-span-1 items-center p-6 px-12 w-full lg:pr-[200px] px-12'>
                <div className='flex w-full my-6 mt-10'>
                    <label className='fontedBebas w-[200px]'>Full Name*</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <input className='fontedBebas leading-none w-full appearance-none bg-transparent border-none focus:outline-none focus:outline-non placeholder-gray-500 placeholder-opacity-[0.25]' value={inputFullName} onChange={(e) => setInputFullName(e.target.value)} placeholder='Full Name' />
                    </div>
                </div>
                <div className='flex w-full my-6'>
                    <label className='fontedBebas w-[200px]'>Email*</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <input className={`fontedBebas leading-none w-full appearance-none bg-transparent border-none focus:outline-none placeholder-gray-500 placeholder-opacity-[0.25]`} value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder='Email Address' />
                    </div>
                </div>
                <div className=' w-full my-6'>
                    <label className='fontedBebas w-[200px]'>Service Requested</label>
                    <div className='grid grid-cols-2'>
                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-0' type='radio' value="0" checked={inputServiceRequested == 0} onChange={(e) => setInputServiceRequested(0)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label className={`fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 0 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>Mobile Studio</label>
                            </div>
                        </div>
                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-1' type='radio' value="1" checked={inputServiceRequested == 1} onChange={(e) => setInputServiceRequested(1)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label className={`fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 1 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>Shopify Builders</label>
                            </div>
                        </div>

                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-2' type='radio' value="2" checked={inputServiceRequested == 2} onChange={(e) => setInputServiceRequested(2)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label className={`fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 2 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>Web3 Studio</label>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=' w-full my-6'>
                    <label className='fontedBebas w-[200px]'>Describe your project*</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <textarea rows={4} style={{resize: 'none'}} className={`fontedBebas focus:ring-0 leading-none w-full appearance-none bg-transparent border-none focus:outline-none placeholder-gray-500 placeholder-opacity-[0.25]`} value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} placeholder='' />
                    </div>
                </div>
            </div>

        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 border-dashed border-[2px] border-gray-800 inline-block'>
            <div className='sm:col-span-1 h-full col-span-1 flex items-center p-20 px-12 border-dashed border-r-[2px] border-gray-800'>
                <p className='fontedBebas w-[75%]'>If you need us to sign an nda before telling us about your project, SEND IT AS WELL</p>
            </div>
            <div className='sm:col-span-1 h-full col-span-1 flex items-center p-20 px-12'>
                <p>Load file</p>
            </div>
        </div>
        <div className='w-full my-6'>
            <div className='flex justify-center'>
                                <input id='terms-accepted' type='radio' value="true" checked={inputTermsAccepted == 'true'} onChange={(e) => setInputTermsAccepted(inputTermsAccepted == 'true' ? 'false' : 'true')} name='terms-accepted' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label className={`fontedBebas transition duration-200 ${inputTermsAccepted == 'true' ? 'opacity-[1]' : 'opacity-[0.25]'}`}>I accept privacy policy and cookies</label>
            </div>
            <div className='w-full'>
                <div className='mx-auto w-[200px] my-4'>
                    <Button title='Send now!'/>
                </div>
            </div>
        </div>
      </div>
    )
  }