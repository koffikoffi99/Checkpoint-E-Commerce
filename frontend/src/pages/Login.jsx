import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputs(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputs);
        //axios pour connecter le backend

    }
    return (
        <div className='flex items-center justify-center w-full'>
            <form className='p-4 py-3 my-5 bg-white border rounded shadow-md' onSubmit={submitHandler}>
                <h2 className='w-full p-3 text-xl font-bold text-center text-gray-500'>se connecter a son compte</h2>
                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="username">Nom d'utilisateur</label>
                    <input
                        id="username"
                        value={inputs.username}
                        onChange={onChangeHandler}
                        type="text"
                        name="username"
                        placeholder="Nom d'utilisateur"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='mb-2'>
                    <label className='mb-2 font-bold text-gray-500' for="password">Mot de passe</label>
                    <input
                        id="password"
                        type="text"
                        value={inputs.password}
                        onChange={onChangeHandler}
                        name="password"
                        placeholder="Mot de passe"
                        className="w-full px-3 py-2 text-gray-500 border border-gray-500 rounded shadow focus:outline-none focus:shadow-md"
                    />
                </div>

                <div className='flex items-center justify-between my-3 mb-5'>
                    <button className='px-3 py-2 font-bold text-white bg-blue-500 border rounded hover:bg-blue-700'>se connecter</button>
                    {/* <Link to="/login" className="text-blue-500"><p>avez vous deja un compte ?</p></Link> */}
                    <a className='text-blue-500' href="/">mot de passe oublie?</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
