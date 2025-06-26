'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/formSlice';

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.form.dataList);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      dispatch(addData(form));
      setForm({ name: '', email: '' }); // Clear input
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data:</h2>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
