import React from 'react';
import 'assets/style/guide.scss';
import Content  from 'components/common/Content';
import Header   from 'components/common/Header';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div style={{
                maxWidth:960,
                margin:'0 auto',
                padding:8,
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                gridTemplateRows:'1fr 1fr 1fr 1fr 1fr 1fr',
                gap:8,
            }}>
                <Content>
                    <p style={{position:'absolute', fontWeight:'900', top:'25%', left:'50%', transform:'translate(-50%, -50%)', fontSize:'300%', color:'#fff'}}>431Web</p>
                    <img src="https://images.unsplash.com/photo-1641765770550-e2a1e9a61082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8" style={{width:'100%',height:'100%',objectFit:'cover'}}></img>
                </Content>
                <Content></Content>
                <Content></Content>
                <Content></Content>
                <Content></Content>
                <Content></Content>
            </div>
        </div>
    );
}

export default App;
