import Image from 'next/image'
import About from '../pages/about';
import panaversePic from '../public/panaverse.png';
//https://beta.nextjs.org/docs/optimizing/images

export default function Page() {
  return (
    
    <div className='bg-slate-300 min-h-screen'>
      <div className='inline-block'>
        <Image src={panaversePic} width={80} height={80} alt='music' />
      </div>
      <div className='inline-block'>
        <h1>Welcome to Panaverse</h1>
        <h2>A Community of Web 3 and Metaverse Developers</h2>
        <button className='bg-red-500 rounded-md ring-1 px-4 py-2 text-yellow-50 mt-4' >Learn More</button>
      </div>
      <About></About>
    </div>
  )
}