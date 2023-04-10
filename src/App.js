import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage.js";

// pengguna
import PenggunasLists from "./components/pengguna/PenggunasLists";
import AddPenggunas from "./components/pengguna/AddPenggunas.js";
import EditPenggunas from "./components/pengguna/EditPenggunas.js";

// acara Seminar
import AcaraSeminarLists from "./components/acaraseminar/AcaraSeminarsLists.js";
import AddAcaraSeminars from "./components/acaraseminar/AddAcaraSeminars.js";
import EditAcaraSeminars from "./components/acaraseminar/EditAcaraSeminars.js";

// Pembayaran
import PembayaransLists from "./components/pembayaran/PembayaransLists.js";
import AddPembyarans from "./components/pembayaran/AddPembayarans.js";
import EditPembayarans from "./components/pembayaran/EditPembayarans.js";

// Pembicara
import PembicarasLists from "./components/pembicara/PembicarasLists.js";
import AddPembicara from "./components/pembicara/AddPembicaras.js";
import EditPembicara from "./components/pembicara/EditPembicaras.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        {/* Pengguna */}
        <Route path="/pengguna" element={<PenggunasLists/>}/>
        <Route path="pengguna/add" element={<AddPenggunas/>}/>
        <Route path="pengguna/edit/:id" element={<EditPenggunas/>}/>

        {/* Acara Seminar */}
        <Route path="/acaraseminar" element={<AcaraSeminarLists/>}/>
        <Route path="acaraseminar/add" element={<AddAcaraSeminars/>}/>
        <Route path="acaraseminar/edit/:id" element={<EditAcaraSeminars/>}/>

        {/* Pembayaran */}
        <Route path="/pembayaran" element={<PembayaransLists/>}/>
        <Route path="pembayaran/add" element={<AddPembyarans/>}/>
        <Route path="pembayaran/edit/:id" element={<EditPembayarans/>}/>

        {/* Pembicara */}
        <Route path="/pembicara" element={<PembicarasLists/>}/>
        <Route path="pembicara/add" element={<AddPembicara/>}/>
        <Route path="pembicara/edit/:id" element={<EditPembicara/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
