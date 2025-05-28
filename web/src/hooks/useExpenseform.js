// web/src/hooks/useExpenseForm.js - Form management hook
import { useState } from 'react';
import { DEFAULT_CATEGORIES } from '../../shared/constants/categories';

export const useExpenseForm = (initialData = null, onSubmit) => {
  const [formData, setFormData] = useState({
    amount: initialData?.amount || '',
    category: initialData?.category || DEFAULT_CATEGORIES[0].id,
    description: initialData?.description || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    currency: initialData?.currency || 'USD',
    receiptUrl: initialData?.receiptUrl || null
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please enter a description';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field changes
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) return false;

    setLoading(true);
    try {
      await onSubmit({
        ...formData,
        amount: parseFloat(formData.amount),
        date: new Date(formData.date)
      });
      
      // Reset form after successful submission (unless editing)
      if (!initialData) {
        setFormData({
          amount: '',
          category: DEFAULT_CATEGORIES[0].id,
          description: '',
          date: new Date().toISOString().split('T')[0],
          currency: 'USD',
          receiptUrl: null
        });
      }
      
      return true;
    } catch (error) {
      setErrors({ submit: error.message });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      amount: '',
      category: DEFAULT_CATEGORIES[0].id,
      description: '',
      date: new Date().toISOString().split('T')[0],
      currency: 'USD',
      receiptUrl: null
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    loading,
    updateField,
    handleSubmit,
    resetForm,
    isValid: Object.keys(errors).length === 0
  };
};