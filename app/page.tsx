import LeftHero from './components/LeftHero'
import Animation from './components/Animation'


export default function Home() {
  return (
    <div className='max-w-[1648px] md:relative mainer w-full h-full min-h-screen flex items-start p-5 gap-10 md:gap-0 justify-center md:justify-between' >
      <LeftHero />
      <Animation/>
     
     
      </div>
  );
}