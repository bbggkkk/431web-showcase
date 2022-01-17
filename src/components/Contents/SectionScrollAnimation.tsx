import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import Phone from "components/common/Phone";
import { useEffect, useState }    from "react";
import styled from "styled-components";

const SectionScrollAnimationComponent = styled.section`
    width:100%;
    height:200vh;
    ${({theme}) => theme.basicWidth};
    position:relative;
    z-index:1;
    background:${({theme}) => theme.color.background};

    transition:background 0.4s, color 0.4s;

    .text-wrap {
        overflow:hidden;
        height:100%;
        font-size:${({theme}) => theme.typo['size-title-3']};
        font-weight:${({theme}) => theme.typo['weight-bold']};
        position:absolute;
        top:0;
        padding:0 24px;
        width:calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));

        @media screen and (min-width:1024px) {
            font-size:${({theme}) => theme.typo['size-title-1']};
        }

        .position {
            transform:translateY(60px);
            height:calc(100% / 4);
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

    .wrap {
        user-select:none;
        /* pointer-events:none; */
        z-index:1;
        position:sticky;
        top:calc(50vh + 60px);
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
                overflow:hidden;

                .screen {
                    overflow:hidden;
                }
            }
        }
    }
`

function SectionScrollAnimation(props){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.section-1 .box');
            setRun(false);
        }
    }, []);
    return (
        <SectionScrollAnimationComponent className="section-wrap section-1">

            <div className="wrap">
                <div className="content">
                    
                    <div className="phone-wrap"
                        data-animation-start="<$ return Math.round(this.closest('.section-1').offsetTop); $>"
                        data-animation-end="<$ return Math.round(this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight); $>"
                        data-animation-0="transform:translateY(10%);"
                        data-animation-100="transform:translateY(-10%);">
                        <Phone width="100%" height="200%">
                            <Ani/>
                        </Phone>
                    </div>
                </div>
            </div>

            <div className="text-wrap">
                <div className="position title box"
                     data-animation-start="<$ return Math.round(this.closest('.section-1').offsetTop - window.outerHeight); $>"
                     data-animation-end="<$ return Math.round(this.closest('.section-1').offsetTop + window.outerHeight); $>"
                     data-animation-0="opacity:0;"
                     data-animation-100="opacity:1;">
                    <div>
                        <p>Scroll</p>
                        <p>Animation</p>
                    </div>
                </div>
                <div className="position">
                    <div>
                        <p>스크롤에 반응하는</p>
                        <p>애니메이션을 편리하게</p>
                        <p>만드는 라이브러리</p>
                    </div>
                </div>
                <div className="position">
                    <div>
                        <p>Scroll-Animation</p>
                        <p>깃허브에서 보기</p>
                        <div className="goto-git">
                            <a href="https://github.com/bbggkkk/scroll-animation" target="_blank" title="scroll-animation">
                                <Button type="on">
                                    보러가기
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg> */}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionScrollAnimationComponent>
    )
}

const AniWrap = styled.div`
    width:100%;
    height:50%;
    position:relative;
    overflow:hidden;

    >.nobg {
        width:100%;
        height:100%;
        background:#0E0D12;
    }
    >.bg {
        opacity:0;
        position:absolute;
        top:0;
        width:100%;
        height:200%;
        background:no-repeat center / cover url(https://images.unsplash.com/photo-1641996613400-b05123d1051b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1417&q=80);
    }

    >.text-box {
        position:absolute;
        top:50%;
        transform:translateY(calc(-50% - 30px));
        padding:0 ${({theme}) => theme.size.wrap};
        white-space:nowrap;
        p {
            font-size:${({theme}) => theme.typo['size-title-3']};
            @media screen and (max-width:320px) {
                font-size:${({theme}) => theme.typo['size-body-1']};
            }
            @media screen and (min-width:480px) and (max-width:739px) {
                font-size:${({theme}) => theme.typo['size-title-2']};
            }
            @media screen and (min-width:740px) {
                font-size:${({theme}) => theme.typo['size-title-1']};
            }

            font-family:'Roboto Mono';
            .css-wrap {
                position:relative;
                display:inline-block;
            }
            .css-input {
                position:absolute;
            }
            .css-placeholder {
                user-select:none;
                pointer-events:none;
                visibility:hidden;
            }
        }
    }
`

function Ani(){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.animation-wrap .animation-runner');
            setRun(false);
        }
    }, []);
    return (
        <AniWrap className="animation-wrap">
            <div    className="nobg"></div>
            <div    className="animation-runner bg"
                    data-animation-start="<$ if(this.closest('.section-1') === null) return 0; return Math.round(this.closest('.section-1').offsetTop); $>"
                    data-animation-end="<$ if(this.closest('.section-1') === null) return 0; return Math.round( this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight/3 ); $>"
                    data-animation-0="opacity:0;"
                    data-animation-100="opacity:1;"></div>
            <div    className="text-box animation-runner" 
                    data-animation-start="<$ if(this.closest('.section-1') === null) return 0; return Math.round(this.closest('.section-1').offsetTop); $>"
                    data-animation-end="<$ if(this.closest('.section-1') === null) return 0; return Math.round( this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight/3 ); $>"
                    data-animation-0="color:#fff;"
                    data-animation-100="color:#000;">
                <p className="">.background &#123;</p>
                <p className="css-wrap">&nbsp;&nbsp;&nbsp;&nbsp;opacity:<span className="css-wrap"><span className="animation-runner css-input" data-animation-start="<$ if(this.closest('.section-1') === null) return 0; return Math.round(this.closest('.section-1').offsetTop); $>"
                    data-animation-end="<$ if(this.closest('.section-1') === null) return 0; return Math.round( this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight/3 ); $>"
                    data-animation-0="transform:translateY(0%); opacity:1;"
                    data-animation-100="transform:translateY(-100%); opacity:0;">0</span><span className="animation-runner css-input" data-animation-start="<$ if(this.closest('.section-1') === null) return 0; return Math.round(this.closest('.section-1').offsetTop); $>"
                    data-animation-end="<$ if(this.closest('.section-1') === null) return 0; return Math.round( this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight/3 ); $>"
                    data-animation-0="transform:translateY(100%); opacity:0;"
                    data-animation-100="transform:translateY(0%); opacity:1;">1</span><span className="css-placeholder">0</span></span>;</p>
                <p className="">&#125;</p>
            </div>
        </AniWrap>
    )
}

export default SectionScrollAnimation;