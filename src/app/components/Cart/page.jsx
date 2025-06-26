'use client';

import { useSelector } from 'react-redux';

export default function Cart() {
  const dataList = useSelector((state) => state.form.dataList);

  return (
    <div>
      <h2>Submitted Entries:</h2>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
