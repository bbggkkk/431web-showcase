import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import Phone from "components/common/Phone";
import { useEffect, useState }    from "react";
import styled from "styled-components";

import imgSpace from "assets/images/space-set.jpg";
import imgSnow  from "assets/images/snow-set.jpg";

const SectionElementGestureComponent = styled.section`
    width:100%;
    height:200vh;
    ${({theme}) => theme.basicWidth};
    padding-bottom:50vh;
    position:relative;
    z-index:0;

    .wrapper {
        position:relative;
        height:100%;

        .text-wrap {
            overflow:hidden;
            height:100%;
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
        z-index:1;
        position:sticky;
        top:0px;
        height:50vh;

        .content {
            transform:translateY(-50%);
            padding:0 24px;
            height:200%;

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
                    position:relative;

                    .screen-setter {
                        height:100%;
                        position:relative;
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
                            <Phone width="100%" height="100%">
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
                    {/* <div className="position"></div> */}
                </div>
            </div>
        </SectionElementGestureComponent>
    )
}

const AniWrap = styled.div`
    width:100%;
    height:100%;
    >.animation.nobg {
        width:100%;
        height:100%;
        background:${({theme}) => theme.mode === 'dark' ? '#0E0D12' : '#EBECEE'};
    }
    >.bg {
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        background:no-repeat center / cover url(${({theme}) => theme.mode === 'dark' ? imgSpace : imgSnow});
        // background:no-repeat center / cover url(https://images.unsplash.com/photo-1454789548928-9efd52dc4031);
        // background:no-repeat center / cover url(https://images.unsplash.com/photo-1641996613400-b05123d1051b);
    }

    .animation-box {
        position:absolute;
        top:50%;
        left:0;
        width:100%;
        height:50%;
        .finger {
            width:min(10vw, 10vh);
            height:min(10vw, 10vh);
            min-width:64px;
            min-height:64px;
            max-width:128px;
            max-height:128px;
            top:50%;
            left:50%;
            position:absolute;
            transform:translate(-50%, -50%);
            
            > svg {
                transform:rotate(-45deg);
                width:100%;
                height:100%;
                transition:fill 0.4s;
                fill:${({theme}) => theme.color.text};
            }
        }

    }

`

function Ani(){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.section-2 .animation-wrap .animation');
            setRun(false);
        }
    }, []);
    return (
        <AniWrap className="animation-wrap">
            <div    className="nobg"></div>
            <div    className="bg animation" 
                    data-animation-start="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop - 120); $>"
                    data-animation-end="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop + (window.outerHeight/2)); $>"
                    data-animation-0="opacity:1;"
                    data-animation-100="opacity:0;">
            </div>
            <div className="animation-box animation"
                data-animation-start="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop - 120); $>"
                data-animation-end="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop + (window.outerHeight/2)); $>"
                data-animation-0="opacity:0;"
                data-animation-100="opacity:1;">
                <div className="finger animation"
                     data-animation-start="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop); $>"
                     data-animation-end="<$ if(this.closest('.section-2') === null) return 0; return Math.round(this.closest('.section-2').offsetTop + this.closest('.section-2').offsetHeight - (window.outerHeight/4)); $>"
                     data-animation-0="transform:translate(calc(-50% + 0vw), calc(-50% + 0vh));"
                     data-animation-25="transform:translate(calc(50% + 20vw), calc(50% + 5vh));"
                     data-animation-75="transform:translate(calc(-150% + -20vw), calc(-150% + -5vh));"
                     data-animation-100="transform:translate(calc(-50% + 0vw), calc(-50% + 0vh));">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.79,9.24V5.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v3.74c1.21-0.81,2-2.18,2-3.74c0-2.49-2.01-4.5-4.5-4.5 s-4.5,2.01-4.5,4.5C6.79,7.06,7.58,8.43,8.79,9.24z M14.29,11.71c-0.28-0.14-0.58-0.21-0.89-0.21h-0.61v-6 c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v10.74l-3.44-0.72c-0.37-0.08-0.76,0.04-1.03,0.31c-0.43,0.44-0.43,1.14,0,1.58 l4.01,4.01C9.71,21.79,10.22,22,10.75,22h6.1c1,0,1.84-0.73,1.98-1.72l0.63-4.47c0.12-0.85-0.32-1.69-1.09-2.07L14.29,11.71z"/></g></g></svg>
                </div>
            </div>
        </AniWrap>
    )
}

export default SectionElementGesture;