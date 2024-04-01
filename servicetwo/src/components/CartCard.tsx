import React, { useEffect } from 'react';

// Define the interface for the shape of the 'indi' object
interface IndiValue {
  id: number; name: string; model: string; price: number; discount: number; category: string; instock: number; count: number; image: string;
}

// Define the props interface for the CartCard component
interface CartCardProps {
  singleProduct: IndiValue;
  inc: any;
  dec: any;
  change: React.Dispatch<React.SetStateAction<boolean>>
  itemDispatch: any;
  removeItem: any;
}

const CartCard: React.FC<CartCardProps> = ({ singleProduct, inc, dec, itemDispatch, removeItem, change }) => {

  useEffect(() => {
    change((prev) => !prev)
  }, [singleProduct.count])

  return (
    <div className='flex flex-wrap justify-center bg-slate-300 hover:bg-slate-200 border-1 border-black my-2 py-5' style={{ width: '100%' }} >

      <div className='flex lg:h-40 md:h-40 s:h-auto' style={{ minWidth: '200px' }}>
        <div className='flex lg:md:h-40 s:h-auto '>
          <img src={singleProduct.image} style={{ height: '150px', width: '150px' }} alt="" />
        </div>
        <div key={singleProduct.id} className="flex flex-col lg:md:pl-10 sm:pl-5 justify-evenly h-full">
          <h3 className=" text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {singleProduct.name}
          </h3>
          <p className=" text-lg leading-6 text-gray-900 group-hover:text-gray-600">
            Model :{singleProduct.model}
          </p>
          <p className=" text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-nowrap">
            <s>{singleProduct.price*singleProduct.count} Rs/ </s>{Math.floor(singleProduct.price*singleProduct.count*singleProduct.discount/100)}Rs/-
          </p>
          <div className="text-gray-500">
            Only {singleProduct.instock} stock left !
          </div>
        </div>
      </div>

      <div className='flex flex-col align-middle justify-around ' style={{ height: '150px', width: '320px' }}>

        <div className='flex justify-evenly m-3 text-4xl text-center' >
        <span className='m-auto'>Qty :  </span>

          <button onClick={() => { itemDispatch(dec(singleProduct)) }} className=" block w-full rounded-md text-center text-2xl font-extrabold border-2 bg-zinc-700 text-white  hover:border-black hover:text-black hover:bg-white" style={{ width: '20%' }}>-</button>
          <span className='m-auto'>{singleProduct.count}</span>
          <button onClick={() => { itemDispatch(inc(singleProduct)) }} className=" block w-full rounded-md text-center text-2xl font-extrabold border-2 bg-zinc-700 text-white  hover:border-black hover:text-black hover:bg-white" style={{ width: '20%' }}>+</button>
        </div>  
        <div className='flex p-5'>
          <button className="m-2 block w-full rounded-md px-1 py-2 text-center text-sm font-semibold border-2 bg-red-500 text-white shadow-sm hover:border-red-500 hover:text-red-500 hover:bg-white"
          onClick={() => { 
            itemDispatch(removeItem(singleProduct)) 
            change((prev) => !prev)
          }}>
            Remove Item
          </button>
          <button className=" m-2 block w-full rounded-md px-1 py-2 text-center text-sm font-bold border-2 bg-blue-500 text-white shadow-sm border-blue-500 hover:text-blue-500 hover:bg-white ">
            Save for Later
          </button>
        </div>
      </div>

    </div>
  );
}

export default CartCard;
