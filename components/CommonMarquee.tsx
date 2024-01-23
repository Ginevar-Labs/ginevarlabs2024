import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';

interface CommonMarqueeProps {
    text: string
}

export default function CommonMarquee(props: CommonMarqueeProps) {
    const { t } = useTranslation();
    const router = useRouter();
  
    return (
        <div className="relative flex overflow-x-hidden text-black text-[14px] opacity-25">
        <div className="py-2 animate-marquee whitespace-nowrap">
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
        </div>

        <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
            <span className="mx-2 fontedBebas text-[10px]"> - {props.text} </span>
        </div>
    </div>
    )
  }