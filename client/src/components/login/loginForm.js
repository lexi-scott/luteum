import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // function handleClick() {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // }

    return (
<form className='loginForm'>
        <input 
        className='userName' 
        type='text'
        align='center'
        placeholder='Username'
        />
        <input 
        className='password' 
        type='password'
        align='center'
        placeholder='Password'
        />

</form>
    );
}

