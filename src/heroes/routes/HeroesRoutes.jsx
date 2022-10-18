import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { Dc, Marvel, HeroPage, Search } from "../pages";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel" element={<Marvel />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/search" element={<Search />} />
                <Route path="/hero/:heroId" element={<HeroPage />} />
                <Route path={'/'} element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
