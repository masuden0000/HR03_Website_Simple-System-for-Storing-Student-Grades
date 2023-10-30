import React, { Component } from 'react';
import '../style/PerkenalanDiri.css';
import Container from 'react-bootstrap/Container';

class PerkenalanDiri extends Component {
    render() {
        return (
            <Container className='justify-content-center p-4'>
                <div className='container-perkenalandiri d-flex flex-column'>
                    <h1 onmousedown='return false;' onselectstart='return false;'>
                        <span>HUDA</span>RASYAD<span>WICAKSONO</span>
                    </h1>
                    <p>2210511098</p>
                    <p>Program Studi Informatika</p>
                    <p>Angkatan 2022</p>
                </div >
            </Container>
        );
    }
}

export default PerkenalanDiri;