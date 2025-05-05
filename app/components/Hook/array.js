'use client';
import {useState,useEffect} from 'react';
import react from 'react';

const UserProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        gender: '',
        confirmPDPA: '',
        hobby: '',
        status: '',
        note: ''
    });

export default function UserProfileForm() {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        gender: '',
        confirmPDPA: '',
        hobby: '',
        status: '',
        note: ''
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
