import Image from 'next/image'
import Title from './ui/Title'

const About = () => {
  return (
    <div className='bg-secondary py-14'>
      <div className='container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse'>
          <div className='flex justify-center'>
          <div className='relative sm:w-[445px] sm:h-[600px] w-[300px] h-[450px] flex justify-center'>
            <Image src="/images/about-img.png" alt='' layout='fill' />
          </div>
          </div>
        <div className='md:w-1/2'>
          <Title addClass="text-[40px]">We Are Feane</Title>
          <p className='my-5 flex- flex-col items-center'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
          </p>
          <button className='text-white bg-btnBg rounded-full hover:bg-btnBgHover transition-all py-2 px-10 grid place-content-center'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
