import { useEffect, useState } from 'react';
import API from '../utils/api';
import FieldForm from '../components/FieldForm';

export default function Fields() {
  const [fields, setFields] = useState([]);

  const fetchFields = async () => {
    try {
      const res = await API.get('/fields');
      setFields(res.data);
    } catch (err) {
      console.error('Error fetching fields:', err);
    }
  };

  const addField = async (newField) => {
    try {
      await API.post('/fields', newField);
      fetchFields(); // refresh list
    } catch (err) {
      console.error('Error adding field:', err);
    }
  };

  useEffect(() => {
    fetchFields();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-6">
      <h2 className="text-2xl font-bold">Manage Fields & Crops</h2>
      <FieldForm onSubmit={addField} />
      <div className="space-y-4 mt-6">
        {fields.map((field) => (
          <div key={field._id} className="border p-4 rounded shadow-sm bg-green-50">
            <h3 className="font-semibold">{field.name}</h3>
            <p><strong>Crop:</strong> {field.crop}</p>
            <p><strong>Planted:</strong> {field.plantedDate?.slice(0, 10)}</p>
            <p><strong>Harvest:</strong> {field.harvestDate?.slice(0, 10)}</p>
            {field.notes && <p><strong>Notes:</strong> {field.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
