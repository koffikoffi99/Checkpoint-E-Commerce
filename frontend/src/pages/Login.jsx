import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <form className='p-4 py-3 my-5 bg-white border rounded shadow-md'>
                <h2 className='w-full p-3 text-xl font-bold text-center text-gray-500'>se connecter a son compte</h2>
                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="username">Nom d'utilisateur</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Nom d'utilisateur"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="password">Mot de passe</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="Mot de passe"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='flex items-center justify-between my-3 mb-5'>
                    <button className='px-3 py-2 font-bold text-white bg-blue-500 border rounded hover:bg-blue-700'>se connecter</button>
                    <a className='text-blue-500' href="/">mot de passe oublie?</a>
                </div>
            </form>
        </div>
    )
}

export default Login
