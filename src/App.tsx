import { ScrollAnimation } from 'assets/library/scrollAnimation';
import 'assets/style/guide.scss';
import Header   from 'components/common/Header';
import SectionElementGesture from 'components/Contents/SectionElementGesture';
import SectionScrollAnimation from 'components/Contents/SectionScrollAnimation';
import Title    from 'components/main/Title';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { ThemeProvider }      from 'styled-components';
import { theme, themeLight }  from 'assets/style/theme';
import RecentWork from 'components/Contents/RecentWork';

const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color:transparent;
    }
    body{
        background:${({theme}) => theme.color.background};
        color:${({theme}) => theme.color.text};
        
        transition:background 0.4s;
    }
`;
const AppWrap = styled.div`
    width:100%;
`

function App() {
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : !window.matchMedia ? true : false);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1A2024' : '#fff');
    return (
        <ThemeProvider theme={isDark ? theme : themeLight}>
            <GlobalStyle/>
            <AppWrap className="App">
                <Header setTheme={setIsDark} isDark={isDark}></Header>
                <Title></Title>
                <SectionTitle/>
                <SectionScrollAnimation/>
                <SectionElementGesture/>
                <RecentWork/>
                <div style={{height:'200vh'}}></div>
            </AppWrap>
        </ThemeProvider>
    );
}


const SectionTitleComponent = styled.section`
    position:relative;
    height:50vh;
    background:${({theme}) => theme.color.background};
    color:${({theme}) => theme.mode === 'dark' ? '#C3C6CD' : '#666E7F'};

    transition:background 0.4s, color 0.4s;

    .box {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        white-space:nowrap;

        font-size:${({theme}) => theme.typo['size-title-1']};
        font-weight:${({theme}) => theme.typo['weight-bold']};

        @media screen and (min-width:1024px) {
            font-size:${({theme}) => theme.typo['size-head-3']};
        }

    }
`
function SectionTitle(){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.section-title .box');
            setRun(false);
        }
    }, []);
    return (
        <SectionTitleComponent className="section-title">
            <div className="box"
                    data-animation-start="0"
                    data-animation-end="<$ return Math.round(window.outerHeight*1.5); $>"
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
