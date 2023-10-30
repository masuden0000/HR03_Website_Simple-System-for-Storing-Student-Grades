import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/ProgramTugas.css';


const Library = () => {
    const [mahasiswaData, setMahasiswaData] = useState([]);
    const [nimTambah, setNimTambah] = useState('');
    const [namaTambah, setNamaTambah] = useState('');
    const [kelasTambah, setKelasTambah] = useState('');
    const [nilaiTambah, setNilaiTambah] = useState('');
    const [nimCari, setNimCari] = useState('');
    const [namaCari, setNamaCari] = useState('');
    const [kelasCari, setKelasCari] = useState('');
    const [nilaiCari, setNilaiCari] = useState('');
    const [totalData, setTotalData] = useState(0);


    // Membuat refs untuk setiap input
    const namaRef = useRef();
    const kelasRef = useRef();
    const nilaiRef = useRef();

    const tambahMahasiswa = (e) => {
        e.preventDefault();

        const existingMahasiswa = mahasiswaData.find((mahasiswa) => mahasiswa.nim === nimTambah);
        if (existingMahasiswa) {
            alert('NIM sudah ada dalam data!');
            return;
        }

        setMahasiswaData([...mahasiswaData, { nim: nimTambah, nama: namaTambah, kelas: kelasTambah, nilai: nilaiTambah }]);
        setNimTambah('');
        setNamaTambah('');
        setKelasTambah('');
        setNilaiTambah('');
        setNimCari('');
        setNamaCari('');
        setKelasCari('');
        setNilaiCari('');
        setTotalData(mahasiswaData.length + 1);
        namaRef.current.focus();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            switch (e.target.name) {
                case 'nimTambah':
                    namaRef.current.focus();
                    break;
                case 'namaTambah':
                    kelasRef.current.focus();
                    break;
                case 'kelasTambah':
                    nilaiRef.current.focus();
                    break;
                default:
                    break;
            }
        }
    };

    const cariMahasiswa = (e) => {
        e.preventDefault();

        const mahasiswa = mahasiswaData.find((mahasiswa) => mahasiswa.nim === nimCari);
        if (mahasiswa) {
            setNamaCari(mahasiswa.nama);
            setKelasCari(mahasiswa.kelas);
            setNilaiCari(mahasiswa.nilai);
        } else {
            alert('Mahasiswa dengan NIM tersebut tidak ditemukan');
            setNamaCari('');
            setKelasCari('');
            setNilaiCari('');
        }
    };

    const hapusMahasiswa = (nim) => {
        const updatedMahasiswaData = mahasiswaData.filter((mahasiswa) => mahasiswa.nim !== nim);
        setMahasiswaData(updatedMahasiswaData);
        setTotalData(updatedMahasiswaData.length);
    };

    return (
        // Judul
        <div className='my-5'>
            <h2 className='judul'>Sistem Penyimpanan Nilai Mahasiswa</h2>

            {/* Tambah mahasiswa */}
            <h4>Masukan Data</h4>
            <form onSubmit={tambahMahasiswa}>
                <Row className="mb-3">
                    <Col md={4}>
                        <label for="exampleInputEmail1" className="form-label">NIM</label>
                        <input type="text" name="nimTambah"
                            value={nimTambah}
                            onChange={(e) => setNimTambah(e.target.value)} onKeyPress={handleKeyPress} className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nama</label>
                            <input type="text"
                                name="namaTambah"
                                value={namaTambah}
                                onChange={(e) => setNamaTambah(e.target.value)}
                                ref={namaRef} onKeyPress={handleKeyPress} className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputEmail1" className="form-label">Kelas</label>
                            <input type="text"
                                name="kelasTambah"
                                value={kelasTambah}
                                onChange={(e) => setKelasTambah(e.target.value)}
                                ref={kelasRef}
                                onKeyPress={handleKeyPress} className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nilai</label>
                            <input type="text"
                                name="nilaiTambah"
                                value={nilaiTambah}
                                onChange={(e) => setNilaiTambah(e.target.value)}
                                ref={nilaiRef}
                                onKeyPress={handleKeyPress} className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <Button className="buttonMhs my-2" variant="outline-primary" type="submit">Tambah Mahasiswa</Button>{' '}
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                    </Col>
                </Row>
            </form>

            {/* Break line */}
            <div>
                <hr style={{ margin: '5% 0px' }} />
            </div>

            {/* Cari mahasiswa */}
            <Container>
                <Row xs={1} md={2}>
                    <Col md={4}>
                        <form onSubmit={cariMahasiswa}>
                            <h4>Pencarian</h4>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label p-1">Masukkan NIM</label>
                                <input type="text"
                                    value={nimCari}
                                    onChange={(e) => setNimCari(e.target.value)} className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <Button className="buttonMhs mt-2 mb-4" variant="outline-primary" type="submit">Cari Mahasiswa</Button>{' '}
                        </form>
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <div className='hslPencarian'>
                            <h4>Hasil Pencarian</h4>
                            <p>Nama</p>
                            <p className="border rounded p-1 form-hslPencarian">{namaCari}</p>
                            <p>Kelas</p>
                            <p className="border rounded p-1 form-hslPencarian">{kelasCari}</p>
                            <p>Nilai</p>
                            <p className="border rounded p-1 form-hslPencarian">{nilaiCari}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Break line */}
            <div>
                <hr style={{ margin: '5% 0px' }} />
            </div>

            {/* Daftar mahasiswa */}
            <div className='dftrMhs'>
                <h2>Daftar Mahasiswa</h2>
                {mahasiswaData.map((mahasiswa) => (
                    <div key={mahasiswa.nim} className='border rounded container-dftrMhs'>
                        <p>NIM : {mahasiswa.nim}</p>
                        <p>Nama: {mahasiswa.nama}</p>
                        <p>Kelas: {mahasiswa.kelas}</p>
                        <p>Nilai: {mahasiswa.nilai}</p>
                        <Button className="my-2" variant="outline-danger" onClick={() => hapusMahasiswa(mahasiswa.nim)}>Hapus</Button>{' '}
                    </div>
                ))}
                {mahasiswaData.length > 0 && (
                    <h4>Total Data: {mahasiswaData.length}</h4>
                )}
            </div>
        </div >
    );
};

export default Library;
