// BookingForm.tsx
import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // 提交表單數據
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/submit-booking", {
      method: "POST",
      body: JSON.stringify({ name, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("預約資料已成功提交！");
    } else {
      alert("提交失敗，請再試一次！");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-xl font-bold mb-4">填寫預約表單</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block mb-2">姓名</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">電話</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          提交
        </button>
      </form>
    </div>
  );
}
