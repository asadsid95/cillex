'use client'

import Input from "@/components/Input"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"

const Auth = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')
    //
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image
                        width={320}
                        height={275}
                        src="/images/logo.png"
                        alt='logo'
                    />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg: max-w-md rounded-md w-ful">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (


                                <Input
                                    label='Username'
                                    onChange={(e) => setName(e.target.value)}
                                    id='email'
                                    value={name}
                                />
                            )}
                            <Input
                                label='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                id='email'
                                type='email'
                                value={email}
                            />
                            <Input
                                label='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                id='password'
                                type='password'
                                value={password}
                            />
                        </div>
                        <button
                            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                        >
                            {variant === 'register' ? 'Register' : 'Login'}
                        </button>
                        {variant === 'register' ?
                            <p
                                className="text-neutral-500 mt-12"
                            >
                                Already have an account?
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                    {/* <Link href='/signup'> */}
                                    Sign in
                                    {/* </Link> */}
                                </span>
                            </p>
                            :
                            <p
                                className="text-neutral-500 mt-12"
                            >
                                Don&apos;t have an account?
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                    {/* <Link href='/signup'> */}
                                    Create an account
                                    {/* </Link> */}
                                </span>
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth