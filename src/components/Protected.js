import { Navigate } from 'react-router-dom';

export default function Protected({ children }) {
    // const { Component } = props;
    const user = localStorage.getItem('email');
    if (!user) {
        return <Navigate to={'/registration'} />
    }

    return children;
}
