/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CartShowOrHideContext } from '../contexts/CartShowOrHideContext';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const Cart = () => {
    return (
        <CartShowOrHideContext.Consumer>{(context) => {
            const { cartIsVisible, cart, SubTotal, toggleCartVisibility, SetUpdatedCart, SetSubTotal, RemoveItemFromCart } = context
            return (
                <Transition.Root show={cartIsVisible} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 overflow-hidden z-20" onClose={toggleCartVisibility}>
                        <div className="absolute inset-0 overflow-hidden">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <div className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={toggleCartVisibility}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {Object.keys(cart).map((productKey, index) => {
                                                                return <li key={cart[productKey]._id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={cart[productKey].Image}
                                                                            alt={cart[productKey].Title}
                                                                            className="h-full w-full object-fill object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    {/* <a href={product.href}> {product.Title} </a> */}
                                                                                    {cart[productKey].Title}
                                                                                </h3>
                                                                                <p className="ml-4">{cart[productKey].Price}</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{cart[productKey].ColorVariant}</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-center justify-between text-base">
                                                                            <div className="text-gray-500 flex items-center">
                                                                                <p className='pr-4'>Qty</p>
                                                                                <AiFillMinusCircle className='m-1 text-violet-500 cursor-pointer mx-3' onClick={() => { if (cart[productKey].Quantity > 1) { cart[productKey].Quantity -= 1; SetUpdatedCart(cart); SetSubTotal(); } }} />
                                                                                <p>{cart[productKey].Quantity}</p>
                                                                                <AiFillPlusCircle className='m-1 text-violet-500 cursor-pointer mx-3' onClick={() => { cart[productKey].Quantity += 1; SetUpdatedCart(cart); SetSubTotal(); }} />
                                                                            </div>

                                                                            <div className="flex">
                                                                                <button type="button" onClick={()=>{RemoveItemFromCart(productKey);}} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>{SubTotal}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6" onClick={toggleCartVisibility}>
                                                    <Link href="/checkout">
                                                        <a className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                                            Checkout
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or{' '}
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={toggleCartVisibility}
                                                        >
                                                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )
        }}
        </CartShowOrHideContext.Consumer>
    )
}

export default Cart

