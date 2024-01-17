import { useTranslation } from 'next-i18next';
import 'flowbite';
import Head from 'next/head';

interface TrustedByBoxProps {
    
}

export default function TrustedByBox(props: TrustedByBoxProps) {
    const { t } = useTranslation();
  
    return (
      <div className='pt-2'>
        <h1 className='fontedBebas text-center'>{t('trusted_by_title')}</h1>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] my-10 mt-4">
                
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img className='h-[40px]' src="/assets/trustedby/CHILTON.png" alt="Chilton" />
                    </li>
                    <li>
                    <img className='h-[50px]' src="/assets/trustedby/CuteCatsGang.png" alt="Cute Cats Gang" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/Icao4Pilots.png" alt="Icao 4 Pilots" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/BlindHarpyStudios.png" alt="Blind Harpy Studios" />
                    </li>
                    <li>
                    <img className='h-[30px]' src="/assets/trustedby/ISOVOX.png" alt="Isovox" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/MagnoCash.png" alt="Magno Cash" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/Korca.png" alt="Korca" />
                    </li>
                </ul>    
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li>
                        <img className='h-[40px]' src="/assets/trustedby/CHILTON.png" alt="Chilton" />
                    </li>
                    <li>
                    <img className='h-[50px]' src="/assets/trustedby/CuteCatsGang.png" alt="Cute Cats Gang" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/Icao4Pilots.png" alt="Icao 4 Pilots" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/BlindHarpyStudios.png" alt="Blind Harpy Studios" />
                    </li>
                    <li>
                    <img className='h-[30px]'src="/assets/trustedby/ISOVOX.png" alt="Isovox" />
                    </li>
                    <li>
                    <img className='h-[40px]' src="/assets/trustedby/MagnoCash.png" alt="Magno Cash" />
                    </li>
                    <li>
                    <img className='h-[80px]' src="/assets/trustedby/Korca.png" alt="Korca" />
                    </li>
                </ul>            
            </div>
      </div>
    )
  }