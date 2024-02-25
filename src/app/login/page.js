import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
});

export default function loginPage() {
  return (
    <div
      className={`flex justify-center flex-col items-center h-full ${lato.className}`}
      style={{ height: '70vh' }}
    >
      <div className='bg-gradient-to-t from-white to-violet-700 w-full flex justify-center items-center flex-col'>
        <figure>
          <Image
            src='/LOGO.svg'
            alt='chipiLogo'
            className='logo mt-[32px]'
            width={185}
            height={160}
            style={{ height: '250px' }}
          />
        </figure>
        <h3 className='text-5xl font-light text-opacity-50 subpixel-antialiased text-purple-700 mt-[-72px] '>
          Login
        </h3>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center gap-0 divide-y  divide-primary my-[15vh]  border-primary border-2 rounded-lg bg-opacity-25 w-[300px] relative'>
          <input
            type='text'
            className='bg-primary
             bg-opacity-25 h-[44px] p-[9px] text-white placeholder-white w-full'
            placeholder=' Phone'
          />
          <Image className='absolute border-none left-64 bottom-11' src='/phone.svg' width={36} height={36} alt='phone icon'/>
          <input
            type='password'
            className='bg-primary bg-opacity-25 h-[44px] p-[9px] text-white placeholder-white w-full'
            placeholder=' Password'
          />
          
        </div>
        <div className='mt-[-102px] mb-11 flex flex-col justify-end items-center'>
          <h5 className='underline text-purple-700'>Recuperar Contraseña?</h5>
          <h5 className='underline text-purple-700'>Registrate</h5>
        </div>
        <div className='flex justify-center mb-4'>
          <Image src='/Google.svg' width={60} height={60} alt='google icon'/>
          <Image src='/windows.svg' width={60} height={60} alt='google icon'/>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <button className='bg-accent text-white hover:bg-violet-500 font-bold py-2 px-4 mt-3 rounded-full w-[135px] h-[46px] outline outline-black outline-1 shadow-[0_4px_0_0_#8B0E70]'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
