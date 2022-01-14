import { ScrollAnimation } from 'assets/library/scrollAnimation';
import 'assets/style/guide.scss';
import Content  from 'components/common/Content';
import Header   from 'components/common/Header';
import SectionElementGesture from 'components/Contents/SectionElementGesture';
import SectionScrollAnimation from 'components/Contents/SectionScrollAnimation';
import Title    from 'components/main/Title';
import { useEffect } from 'react';
import styled from 'styled-components';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Title></Title>
            <SectionTitle/>
            <SectionScrollAnimation/>
            <SectionElementGesture/>
            <div style={{height:'200vh'}}></div>
        </div>
    );
}


const SectionTitleComponent = styled.section`
    position:relative;
    height:50vh;
    background:${({theme}) => theme.color.background};
    color:${({theme}) => theme.mode === 'dark' ? '#C3C6CD' : '#666E7F'};

    .box {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);

        font-size:${({theme}) => theme.typo['size-title-1']};
        font-weight:${({theme}) => theme.typo['weight-bold']};
    }
`
function SectionTitle(){
    useEffect(() => {
        const scroll = new ScrollAnimation(window, '.section-title .box')
    }, []);
    return (
        <SectionTitleComponent className="section-title">
            <div className="box"
                    data-animation-start="0"
                    data-animation-end="<$ return window.outerHeight*1.5; $>"
                    data-animation-0="opacity:0; transform:translate(-50%, calc(-25vh - 0%));"
                    data-animation-40="opacity:1;"
                    data-animation-60="opacity:1;"
                    data-animation-100="opacity:0; transform:translate(-50%, calc(25vh - 100%));">
                <p>제가 만든</p>
                <p>작업물들을</p>
                <p>소개합니다</p>
            </div>
        </SectionTitleComponent>
    )
}

export default App;
