import React, { FC } from 'react'
import { TraningSesionsTable } from './components/TraningSesionTable/traningSesionsTable';
import { DetailsScreen } from './components/DetailsScreen/detailScreen';
import './app.css';
import { Routes, Route } from "react-router-dom";


export const App: FC = () => <div>
    <Routes>
        <Route path="/" element={<TraningSesionsTable />} />
        <Route path="/detailsscreen" element={<DetailsScreen />} />
        {/* todo 404 page */}
        {/* redirect page */}
    </Routes>



</div>
