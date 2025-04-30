import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <form className='p-4 py-3 my-5 bg-white border rounded shadow-md'>
                <h2 className='w-full p-3 text-xl font-bold text-center text-gray-500'>creer son compte</h2>

                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="firstname">Nom</label>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Nom"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="surname">Prenom</label>
                    <input
                        id="surname"
                        type="text"
                        placeholder="Prenom"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>
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
                    <label className='mb-2 font-bold text-gray-500' for="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
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
                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="confirm_password">Confirmer Mot de passe</label>
                    <input
                        id="confirm_password"
                        type="text"
                        placeholder="Confirmer Mot de passe"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='flex flex-col items-center justify-between my-3 mb-5'>
                    <button className='px-3 py-2 font-bold text-white bg-blue-500 border rounded hover:bg-blue-700'>se connecter</button>
                    {/* <Link to="login" className='text-blue-500'><p>Vous avez déjà un compte ?</p></Link> */}
                </div>
            </form>
        </div>
    )
}

export default Register
