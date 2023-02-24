import Image from 'next/image'
import panaversePic from '../public/panaverse.png';
//https://beta.nextjs.org/docs/optimizing/images

export default function About() {
  return (
    <div className='bg-slate-600 bg-black'>
      <div className='inline-block'>
        <button className='p-10 mx-10'>one</button>
        <button>two</button>
        <button>three</button>
        <button>four</button>

        <Image src={panaversePic} width={80} height={80} alt='music' />


      </div>
      
    </div>
  )
}