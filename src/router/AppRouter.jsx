import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../views/HomeScreen'
import MarvelScreen from '../views/MarvelScreen'
import DCScreen from '../views/DCScreen'
import SearchScreen from '../views/SearchScreen'
import Layout from '../components/LayoutComponent'
import DetailScreen from '../views/DetailScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/marvel" element={<MarvelScreen/>} />
          <Route path="/dc" element={<DCScreen/>} />
          <Route path="/search" element={<SearchScreen/>} />
          <Route path="/detail/:id" element={<DetailScreen/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
};

export default AppRouter