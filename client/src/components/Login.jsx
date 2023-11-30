import { useState } from "react";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
      <div className='text-xl text-center mb-10'>Вход в личный кабинет</div>
      <form className='space-y-6' onSubmit={submitHandler}>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              onChange={changeHandler}
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Password
            </label>
          </div>
          <div className='mt-2'>
            <input
              onChange={changeHandler}
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
