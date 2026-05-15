import React, { useState, useEffect } from 'react';
import * as api from '../api';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({ company_name: '', employees: 0, location: '', is_active: true });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await api.getCompanies();
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.updateCompany(editingId, formData);
      } else {
        await api.createCompany(formData);
      }
      resetForm();
      fetchCompanies();
    } catch (error) {
      console.error("Error saving company:", error);
    }
  };

  const resetForm = () => {
    setFormData({ company_name: '', employees: 0, location: '', is_active: true });
    setEditingId(null);
  };

  const handleEdit = (company) => {
    setEditingId(company.company_id);
    setFormData({
      company_name: company.company_name,
      employees: company.employees,
      location: company.location,
      is_active: company.is_active
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      await api.deleteCompany(id);
      fetchCompanies();
    }
  };

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4">
          {editingId ? 'Update Company Details' : 'Register New Company'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Company Name</label>
            <input 
              type="text" placeholder="e.g. Acme Corp" required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.company_name}
              onChange={(e) => setFormData({...formData, company_name: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Employees</label>
            <input 
              type="number" placeholder="Total Staff" required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.employees}
              onChange={(e) => setFormData({...formData, employees: parseInt(e.target.value) || 0})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">Location</label>
            <input 
              type="text" placeholder="City" required
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              {editingId ? 'Update' : 'Create'}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase tracking-wider">Staff</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {companies.map(company => (
                <tr key={company.company_id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{company.company_name}</td>
                  <td className="px-6 py-4 text-gray-600">{company.employees.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">{company.location}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${company.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {company.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleEdit(company)} className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Edit</button>
                    <button onClick={() => handleDelete(company.company_id)} className="text-red-600 hover:text-red-800 font-semibold text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Companies;