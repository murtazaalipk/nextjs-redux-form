'use client';

import Form from './components/Form/page';
import Cart from './components/Cart/page';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Form App</h1>
      <Form />
      <Cart />
    </div>
  );
}
