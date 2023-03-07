import React from "react";
import "./App.css";
import Layout from "./layout";
import Musics from "./pages/Musics";
import Statistics from "./pages/Statistics";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumMusics from "./pages/AlbumMusicsPage";
import AlbumMusicsPage from "./pages/AlbumMusicsPage";
import GenreMusicPage from "./pages/GenreMusicsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Musics />} />
            <Route path="/statstics" element={<Statistics />} />
            <Route path="/album/:id" element={<AlbumMusicsPage />} />
            <Route path="/genre/:id" element={<GenreMusicPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
