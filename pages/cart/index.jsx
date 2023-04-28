import Image from 'next/image'
import Title from '../../components/ui/Title'

const Cart = () => {
  return (
    <div className='min-h-[calc(100vh_-_433px)]'>
      <div className='flex justify-between items-center md:flex-row flex-col'>
        <div className='min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full'>
          <table className='w-full text-sm text-center text-gray-500 min-w[1000px]'>
            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6'>Ürün</th>
                <th scope='col' className='py-3 px-6'>Detay</th>
                <th scope='col' className='py-3 px-6'>Fiyat</th>
                <th scope='col' className='py-3 px-6'>Adet</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' bg-secondary border-gray-700 hover:bg-primary hover:cursor-pointer'>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                  <Image alt='' src="/images/pizza.png" width={40} height={40} />
                  <span>Good Pizza</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  <span>mayonez, acı sos, ketçap</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  $20
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-4 md:w-auto w-full md:text-start text-center'>
          <Title addClass="text-[40px] ">Sepet Tutarı</Title>
          <div className='flex flex-col gap-y-2 my-6'>
            <span><b>Ara Toplam: </b>20₺</span>
            <span><b>İndirim: </b>0₺</span>
            <span><b>Toplam: </b>20₺</span>
          </div>
          <div>
          <button className='text-white bg-btnBg rounded-full py-2 px-6 hover:bg-btnBgHover transition-all md:w-auto w-52'>Siparişi Tamamla</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Cart
