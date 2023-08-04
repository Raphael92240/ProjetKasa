import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, About, Logement,Not404 } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'

const router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Not404 />} />
            </Route>
        </Routes>
    );
};

export default router;