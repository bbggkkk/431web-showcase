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
import Career from 'components/Contents/Career';
import Stack from 'components/Contents/Stack';
import Section431Memo from 'components/Contents/Section431Memo';

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

    .end {
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;

        text-align:center;

        p:nth-child(1) {
            margin-bottom:24px;
        }

        p a {
            display:flex;
            align-items:center;
            gap:4px;

            svg {
                transform:translateY(1px);
            }
        }
    }
`

function App() {
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : !window.matchMedia ? true : false);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1A2024' : '#fff');
    return (
        <ThemeProvider theme={isDark ? theme : themeLight}>
            <GlobalStyle/>
            <AppWrap className="App">
                <Header setTheme={setIsDark} isDark={isDark}></Header>
                <Title/>
                <SectionTitle>
                    <p>제가 만든</p>
                    <p>작업물들을</p>
                    <p>소개합니다</p>
                </SectionTitle>
                <Section431Memo/>
                <SectionScrollAnimation/>
                <SectionElementGesture/>
                <RecentWork/>
                <SectionTitle>
                    <p>제가 다룰 수 있는</p>
                    <p>기술 스택입니다</p>
                </SectionTitle>
                <Stack/>
                <SectionTitle>
                    <p>저는</p>
                    <p>이런 일들을</p>
                    <p>해왔습니다</p>
                </SectionTitle>
                <Career/>
                <div className="end">
                    <div>
                        <p className="t-title-1">END</p>
                        <p className="t-body-1">서성일</p>
                        <p className="t-body-1"><a href="mailto:ss1431ml@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>ss1431ml@gmail.com</a></p>
                    </div>
                </div>
            </AppWrap>
        </ThemeProvider>
    );
}


const SectionTitleComponent = styled.section`
    position:relative;
    height:50vw;
    min-height:50vh;
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
function SectionTitle(props){
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
                    data-animation-start="<$ return Math.round(this.closest('.section-title').offsetTop - window.outerHeight); $>"
                    data-animation-end="<$ return Math.round(this.closest('.section-title').offsetTop + this.closest('.section-title').offsetHeight); $>"
                    data-animation-0="opacity:0; transform:translate(-50%, calc(-25vh - 0%));"
                    data-animation-40="opacity:1;"
                    data-animation-60="opacity:1;"
                    data-animation-100="opacity:0; transform:translate(-50%, calc(25vh - 100%));">
                {props.children}
            </div>
        </SectionTitleComponent>
    )
}

export default App;
