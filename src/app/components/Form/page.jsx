'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '@/redux/formSlice';

export default function Form() {
  const [form, setForm] = useState({ name: '', email: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      dispatch(addData(form));
      setForm({ name: '', email: '' }); // Clear form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
