import { useState } from 'react';

export default function FieldForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    crop: '',
    plantedDate: '',
    harvestDate: '',
    notes: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', crop: '', plantedDate: '', harvestDate: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded bg-white shadow-md">
      <input name="name" placeholder="Field Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="crop" placeholder="Crop Type" value={form.crop} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="date" name="plantedDate" value={form.plantedDate} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="date" name="harvestDate" value={form.harvestDate} onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Save Field</button>
    </form>
  );
}
