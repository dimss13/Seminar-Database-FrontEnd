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

// Pendafataran
import PendaftaransLists from "./components/pendaftaran/PendaftaransLists.js";
import AddPendaftaran from "./components/pendaftaran/AddPendaftarans.js";
import EditPendaftaran from "./components/pendaftaran/EditPendaftarans.js";

// Penyelenggara
import PenyelenggarasLists from "./components/penyelenggara/PenyelenggarasLists.js";
import AddPenyelenggara from "./components/penyelenggara/AddPenyelenggaras.js";
import EditPenyelenggara from "./components/penyelenggara/EditPenyelenggaras.js";

// Tempat Duduk
import TempatDudukLists from "./components/tempatduduk/TempatDuduksLists.js";
import AddTempatDuduk from "./components/tempatduduk/AddTempatDuduks.js";
import EditTempatDuduk from "./components/tempatduduk/EditTempatDuduks.js";

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

        {/* Pendaftaran */}
        <Route path="/pendaftaran" element={<PendaftaransLists/>}/>
        <Route path="pendaftaran/add" element={<AddPendaftaran/>}/>
        <Route path="pendaftaran/edit/:id" element={<EditPendaftaran/>}/>

        {/* Penyelenggara */}
        <Route path="/penyelenggara" element={<PenyelenggarasLists/>}/>
        <Route path="penyelenggara/add" element={<AddPenyelenggara/>}/>
        <Route path="penyelenggara/edit/:id" element={<EditPenyelenggara/>}/>

        {/* Tempat Duduk */}
        <Route path="/tempatduduk" element={<TempatDudukLists/>}/>
        <Route path="tempatduduk/add" element={<AddTempatDuduk/>}/>
        <Route path="tempatduduk/edit/:id" element={<EditTempatDuduk/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
