'use client';
import React, { Children } from 'react';
import '../css/card.css';
import InvalidForm from './InvalidForm';

interface FormData {
  Name: string;
  LastName: string;
  Email: string;
  Confirm: boolean;
  Gender: string;
  Hobby: string[];
  Status: string;
  Note: string;
}
export default function Cardtool ({ formData }: { formData: FormData }) {
  return (
    <div>
      <h3>Form Profile</h3>
      <p>Name: {formData.Name}</p>
      <p>Lastname: {formData.LastName}</p>
      <p>Email: {formData.Email}</p>
      <p>Confirm: {formData.Confirm ? 'Yes' : 'No'}</p>
      <p>Gender: {formData.Gender}</p>
      <p>Hobby: {formData.Hobby.join(', ')}</p>
      <p>Status: {formData.Status}</p>
      <p>Note: {formData.Note}</p>
    </div>
  );
}
