import Image from 'next/image'
import Title from '../../components/ui/Title'

const Index = () => {
    return (
        <div className='flex items-center h-screen gap-20 py-20 flex-wrap'>
            <div className='relative md:flex-1 w-[80%] h-[80%] mx-20'>
                <Image src="/images/pizza.png" alt='' layout='fill' objectFit='contain' />
            </div>
            <div className='md:flex-1 md:text-start text-center'>
                <Title addClass="text-6xl">Good Pizza</Title>
                <span className='text-primary text-2xl font-bold underline underline-offset-2 my-4 inline-block'>10$</span>
                <p className='text-sm my-4 md:pr-24'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
                    molestiae.
                </p>
                <div>
                    <h4 className='text-xl font-bold'>Choose the size</h4>
                    <div className='flex gap-x-20 items-center md:justify-start justify-center'>
                        <div className='relative w-8 h-8'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                        </div>
                        <div className='relative w-12 h-12'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16'>
                            <Image src="/images/size.png" alt='' layout='fill' />
                            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-4 my-6 md:justify-start justify-center'>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary'/>
                        <span className='text-sm font-semibold'>Ketçap</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary'/>
                        <span className='text-sm font-semibold'>Ketçap</span>
                    </label>
                </div>
                <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Index
