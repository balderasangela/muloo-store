import { useState } from "react";


export const useForm = (itsRewindTime) => {
  const [formData, setFormData] = useState(itsRewindTime);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return {
    formData, 
    setFormData,
    handleChange,
  };
};