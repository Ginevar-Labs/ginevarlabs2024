import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Button from './Button';

interface ContactBoxProps {
    locale: string
}

export default function ContactBox(props: ContactBoxProps) {
    const { t } = useTranslation();
    const [inputFullName, setInputFullName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputServiceRequested, setInputServiceRequested] = useState(0);
    const [inputDescription, setInputDescription] = useState('');
    const [inputTermsAccepted, setInputTermsAccepted] = useState('true');
    const [fileList, setFileList] = useState<FileList | null>(null);
    const [fileNames, setFileNames] = useState(['']);

    // const subirDocumentos = async(): Promise<string[] | void> => {
    //     if(fileList == undefined || userEmail == "" || !userEmail.includes('@')) {
    //         return [];
    //     }
        
    //     const data = new FormData();
    //     for(var a=0;a<fileList.length;a++) {
    //       data.append('files-'+a, fileList[a], fileList[a].name);
    //     }
    //     data.append('email', userEmail);
    //     data.append('message', userMessage);
    //     data.append('type', 'vj');
        
    //     setIsLoading(true)
    //     let _data = await uploadFileToCF(data);
    //     setIsLoading(false)
    //     if(_data == true) {
    //       alert('Documentos enviados exitosamente! Vas a recibir tu codigo de tracking y link de pago en las proximas horas en tu casilla de correo. Muchas gracias!')
    //     }
    //   }
  
    return (
      <div id='contact'>
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
                <h1 className='fontedBebas leading-none text-center w-full lg:my-10 my-0'>
                    <p className='lg:text-[124px] text-[62px] tracking-widest drop-shadow-[4px_4px_rgba(255,242,56,1)]'><span className='text-[#FF7878]'>Get</span> <span className='text-[#B3C73E]'>in</span> <br/> <span className='text-[#78A6FF]' style={{textDecoration: 'underline', textDecorationColor: '#EE80B7'}}>touch</span></p>
                </h1>
            </div>

            <div className='sm:col-span-1 col-span-1 items-center lg:p-6 p-0 px-12 w-full lg:pr-[200px] px-12'>
                <div className='flex w-full my-6 mt-10'>
                    <label className='fontedBebas w-[200px]'>{t('contact_box_input_full_name', { ns: 'common'})}</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <input className='fontedBebas leading-none w-full appearance-none bg-transparent border-none focus:outline-none focus:outline-non placeholder-gray-500 placeholder-opacity-[0.25]' value={inputFullName} onChange={(e) => setInputFullName(e.target.value)} placeholder={t('contact_box_input_full_name_ph', { ns: 'common'})} />
                    </div>
                </div>
                <div className='flex w-full my-6'>
                    <label className='fontedBebas w-[200px]'>{t('contact_box_input_email', { ns: 'common'})}</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <input className={`fontedBebas leading-none w-full appearance-none bg-transparent border-none focus:outline-none placeholder-gray-500 placeholder-opacity-[0.25]`} value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder={t('contact_box_input_email_ph', { ns: 'common'})} />
                    </div>
                </div>
                <div className=' w-full my-6'>
                    <label className='fontedBebas w-[200px]'>{t('contact_box_service_requested', { ns: 'common'})}</label>
                    <div className='grid grid-cols-2'>
                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-0' type='radio' value="0" checked={inputServiceRequested == 0} onChange={(e) => setInputServiceRequested(0)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label onClick={() => setInputServiceRequested(0)} className={`cursor-pointer fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 0 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>{t('services_menu_item_mobile_studio', { ns: 'common'})}</label>
                            </div>
                        </div>
                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-1' type='radio' value="1" checked={inputServiceRequested == 1} onChange={(e) => setInputServiceRequested(1)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label onClick={() => setInputServiceRequested(1)} className={`cursor-pointer fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 1 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>{t('services_menu_item_shopify_builders', { ns: 'common'})}</label>
                            </div>
                        </div>

                        <div className='sm:col-span-1 col-span-1 items-center'>
                            <div className='flex'>
                                <input id='serv-req-2' type='radio' value="2" checked={inputServiceRequested == 2} onChange={(e) => setInputServiceRequested(2)} name='serv-req-radio' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label onClick={() => setInputServiceRequested(2)} className={`cursor-pointer fontedBebas w-[200px] transition duration-200 ${inputServiceRequested == 2 ? 'opacity-[1]' : 'opacity-[0.25]'}`}>{t('services_menu_item_web3_studio', { ns: 'common'})}</label>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=' w-full my-6'>
                    <label className='fontedBebas w-[200px]'>{t('contact_box_input_describe_project', { ns: 'common'})}</label>
                    <div className='w-full border-b-4 border-black drop-shadow-[4px_4px_rgba(255,242,56,0.25)] '>
                        <textarea rows={4} style={{resize: 'none'}} className={`fontedBebas focus:ring-0 leading-none w-full appearance-none bg-transparent border-none focus:outline-none placeholder-gray-500 placeholder-opacity-[0.25]`} value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} placeholder='' />
                    </div>
                </div>
            </div>

        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 border-dashed lg:border-[2px] border-[0px] border-gray-800 inline-block lg:mx-40'>
            <div className='sm:col-span-1 h-full col-span-1 flex items-center lg:p-20 p-4 px-12 border-dashed lg:border-r-[2px] border-r-[0px] border-gray-800'>
                <p className='fontedBebas lg:w-[75%] w-full lg:text-left text-center'>{t('contact_box_nda_message_pre', { ns: 'common'})} <span className='animation duration-200 opacity-50 hover:opacity-100 text-[#EE80B7]'>{t('contact_box_nda_message_underline', { ns: 'common'})}</span> {t('contact_box_nda_message_post', { ns: 'common'})}</p>
            </div>
            <div className='sm:col-span-1 h-full col-span-1 flex items-center lg:p-20 p-4 px-12'>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full cursor-pointer">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6  transition duration-200 opacity-25 hover:opacity-100">
                                <div className='flex '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='' width="22" height="30" viewBox="0 0 53 60" fill="none">
                                        <g clipPath="url(#clip0_148_716)">
                                            <path d="M42.6797 9.82031C39.8203 6.96094 35.1797 6.96094 32.3203 9.82031L10.7578 31.3828C5.82422 36.3164 5.82422 44.3086 10.7578 49.2422C15.6914 54.1758 23.6836 54.1758 28.6172 49.2422L46.4297 31.4297C47.707 30.1523 49.793 30.1523 51.0703 31.4297C52.3477 32.707 52.3477 34.793 51.0703 36.0703L33.2578 53.8828C25.7578 61.3828 13.6172 61.3828 6.11719 53.8828C-1.38281 46.3828 -1.38281 34.2422 6.11719 26.7422L27.6797 5.17969C33.1055 -0.246094 41.8945 -0.246094 47.3203 5.17969C52.7461 10.6055 52.7461 19.3945 47.3203 24.8203L26.6953 45.4453C23.3438 48.7969 17.9062 48.7969 14.5547 45.4453C11.2031 42.0938 11.2031 36.6563 14.5547 33.3047L31.4297 16.4297C32.707 15.1523 34.793 15.1523 36.0703 16.4297C37.3477 17.707 37.3477 19.793 36.0703 21.0703L19.1953 37.9453C18.4102 38.7305 18.4102 40.0195 19.1953 40.8047C19.9805 41.5898 21.2695 41.5898 22.0547 40.8047L42.6797 20.1797C45.5391 17.3203 45.5391 12.6797 42.6797 9.82031Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_148_716">
                                            <rect width="52.5" height="60" fill="white"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="ml-2 text-black fontedBebas"><span className="font-semibold text-[#78A6FF]">{t('contact_box_files_attach', { ns: 'common'})}</span></p>
                                </div>
                                <p className="text-center text-black fontedBebas">{t('contact_box_files_limits', { ns: 'common'})}</p>
                            </div>
                            <input onChange={(e) => {
                              if(e.target.files == undefined) { return; }
                              for(var x in e.target.files) {
                                var filesize = ((e.target.files[x].size/1024)/1024).toFixed(4); // MB
                                if(!isNaN(parseFloat(filesize))) {
                                  if(parseFloat(filesize) > 5) {
                                    alert(t('contact_box_files_file_too_big'));
                                    return;
                                  }
                                }
                              }
                              setFileList(e.target.files);
                              e.preventDefault();
        
                              var _itemNames:string[] = []
                              for(var i=0;i<e.target.files.length;i++){
                                _itemNames.push(e.target.files[i].name);
                              }
                              setFileNames(_itemNames);
                            }} id="dropzone-file" type="file" className="hidden" multiple/>
                            <p className='fontedBebas text-center opacity-25'>{fileNames.filter(f => f != "").length > 0 ? t('contact_box_files_files_uploaded') : ''} {fileNames.join(', ')}</p>
                </label>
            </div>
        </div>
        <div className='w-full my-6'>
            <div className='flex justify-center mx-20 lg:text-left text-center'>
                                <input id='terms-accepted' type='radio' value="true" checked={inputTermsAccepted == 'true'} onChange={(e) => setInputTermsAccepted(inputTermsAccepted == 'true' ? 'false' : 'true')} name='terms-accepted' className="mt-1 mr-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-green-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"></input>
                                <label className={`fontedBebas transition duration-200 ${inputTermsAccepted == 'true' ? 'opacity-[1]' : 'opacity-[0.25]'}`}>{t('contact_box_files_accept_policies', { ns: 'common'})}</label>
            </div>
            <div className='w-full'>
                <div className='mx-auto w-[200px] my-4 fontedBebas'>
                    <Button title={t('contact_box_send_now', { ns: 'common'})}/>
                </div>
            </div>
        </div>
      </div>
    )
  }