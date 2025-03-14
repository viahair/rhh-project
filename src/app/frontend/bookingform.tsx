import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/save-data', {
      method: 'POST',
      body: JSON.stringify({ name, phone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('資料已提交！');
      setName('');
      setPhone('');
    } else {
      alert('提交失敗，請再試一次！');
    }
  };

  return (
    <div>
      <h1>填寫資料</h1>
      <form onSubmit={handleSubmit}>
        <label>
          姓名:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          電話:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}
