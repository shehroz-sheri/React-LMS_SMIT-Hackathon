import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminProtected({ children }) {
    const admin = localStorage.getItem('email');

    if (!admin == 'shehrozsheri36347@gmail.com') {
        return <Navigate to={'/'} />
    }

    return children
}
