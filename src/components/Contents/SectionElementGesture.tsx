import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import Phone from "components/common/Phone";
import { useEffect, useState }    from "react";
import styled from "styled-components";

const SectionElementGestureComponent = styled.section`
    width:100%;
    height:calc(150vh + 120px);
    ${({theme}) => theme.basicWidth};
    position:relative;
    z-index:0;

    .wrapper {
        position:relative;
        height:150vh;

        .text-wrap {
            overflow:hidden;
            height:calc(100% - 60px);
            font-size:${({theme}) => theme.typo['size-title-3']};
            font-weight:${({theme}) => theme.typo['weight-bold']};
            position:absolute;
            top:0;
            padding:0 24px;
            width:calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));

            transition:color 0.4s;
    
            @media screen and (min-width:1024px) {
                font-size:${({theme}) => theme.typo['size-title-2']};
            }
    
            .position {
                transform:translateY(60px);
                height:calc(100% / 3);
                display:flex;
                align-items:center;
            }
            .position.title {
                font-weight:${({theme}) => theme.typo['weight-black']};
                font-size:${({theme}) => theme.typo['size-head-2']};
            }
        
            @media screen and (min-width:1024px) {
                .position.title {
                    font-size:${({theme}) => theme.typo['size-head-1']};
                }
            }
    
            .goto-git {
                margin-top:16px;
            }
        }
    
        
    }

    .wrap {
        user-select:none;
        /* pointer-events:none; */
        z-index:1;
        position:sticky;
        top:120px;
        height:calc(50vh);

        .content {
            padding:0 24px;
            height:100%;

            display:flex;
            flex-direction:column;
            justify-content:flex-end;

            > div {
                width:100%;
                height:100%;
            }
            .phone-wrap {
                position:relative;

                .screen {
                    overflow:hidden;
                }

                .phone {
                    height:100%;
                    top:calc(-100% - 120px);
                    position:relative;

                    .screen-setter {
                        height:50%;
                        position:relative;
                        top:calc(50% + 120px);
                        /* transform:translateY(100%); */
                    }
                }
            }
        }
    }
    
`

function SectionElementGesture(props){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.section-2 .box');
            new ScrollAnimation(window, '.section-2');
            setRun(false);
        }
    }, []);
    return (
        <SectionElementGestureComponent className="section-wrap section-2"
                data-animation-start="<$ return this.offsetTop - 160; $>"
                data-animation-end="<$ return this.offsetTop - 159; $>"
                data-animation-0="z-index:0;"
                data-animation-100="z-index:1;">
            <div className="wrap">
                <div className="content">
                    <div className="phone-wrap"
                        data-animation-start="<$ return Math.round(this.closest('.section-2').offsetTop + this.closest('.section-2').querySelector(':scope .wrapper').offsetHeight); $>"
                        data-animation-end="<$ return Math.round(this.closest('.section-2').offsetTop + this.closest('.section-2').querySelector(':scope .wrapper').offsetHeight + window.outerHeight); $>"
                        data-animation-0="transform:translateY(-10%);"
                        data-animation-100="transform:translateY(-30%);">
                        <div className="phone">
                            <Phone width="100%" height="200%">
                                <div className="screen-setter">
                                    <Ani/>
                                </div>
                            </Phone>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper">

                <div className="text-wrap">
                    {/* <div className="position"></div> */}
                    <div className="position title box"
                        data-animation-start="<$ return Math.round(this.closest('.section-2').offsetTop - window.outerHeight); $>"
                        data-animation-end="<$ return Math.round(this.closest('.section-2').offsetTop + window.outerHeight); $>"
                        data-animation-0="opacity:1;"
                        data-animation-100="opacity:0;">
                        <div>
                            <p>Element</p>
                            <p>Gesture</p>
                        </div>
                    </div>
                    <div className="position">
                        <div>
                            <p>드래그 정보를</p>
                            <p>정리해서 전달해주는</p>
                            <p>라이브러리</p>
                        </div>
                    </div>
                    <div className="position">
                        <div>
                            <p>Element-Gesture</p>
                            <p>깃허브에서 보기</p>
                            <div className="goto-git">
                                <a href="https://github.com/bbggkkk/Element-Gesture" target="_blank" title="Element-Gesture">
                                    <Button type="on">
                                        보러가기
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg> */}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionElementGestureComponent>
    )
}

const AniWrap = styled.div`
    >.animation.nobg {
        width:100%;
        height:100%;
        background:${({theme}) => theme.mode === 'dark' ? '#0E0D12' : '#EBECEE'};
    }
    >.bg {
        position:absolute;
        top:-100%;
        width:100%;
        height:200%;
        background:no-repeat center / cover url(https://images.unsplash.com/photo-1641996613400-b05123d1051b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1417&q=80);
    }

    .finger {
        width:64px;
        height:64px;
        top:50%;
        left:50%;
        position:absolute;
        transform:translate(-50%, -50%) rotate(-45deg);
        fill:#fff;
    }
`

function Ani(){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            // new ScrollAnimation(window, '.section-2 .animation-wrap .animation');
            setRun(false);
        }
    }, []);
    return (
        <AniWrap className="animation-wrap">
            <div    className="animation nobg"
                    data-animation-start="<$ return Math.round(this.closest('.section-2').offsetTop); $>"
                    data-animation-end="<$ return Math.round( this.closest('.section-2').offsetTop + this.closest('.section-2').offsetHeight/3 ); $>"
                    data-animation-0="opacity:1;"
                    data-animation-100="opacity:0;"></div>
            <div    className="bg">
            </div>
            <div className="finger">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.79,9.24V5.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v3.74c1.21-0.81,2-2.18,2-3.74c0-2.49-2.01-4.5-4.5-4.5 s-4.5,2.01-4.5,4.5C6.79,7.06,7.58,8.43,8.79,9.24z M14.29,11.71c-0.28-0.14-0.58-0.21-0.89-0.21h-0.61v-6 c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v10.74l-3.44-0.72c-0.37-0.08-0.76,0.04-1.03,0.31c-0.43,0.44-0.43,1.14,0,1.58 l4.01,4.01C9.71,21.79,10.22,22,10.75,22h6.1c1,0,1.84-0.73,1.98-1.72l0.63-4.47c0.12-0.85-0.32-1.69-1.09-2.07L14.29,11.71z"/></g></g></svg>
            </div>
        </AniWrap>
    )
}

export default SectionElementGesture;