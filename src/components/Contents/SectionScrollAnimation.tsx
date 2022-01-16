import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import Phone from "components/common/Phone";
import { useEffect }    from "react";
import styled from "styled-components";

const SectionScrollAnimationComponent = styled.section`
    width:100%;
    height:200vh;
    max-width:${({theme}) => theme.basicWidth};
    margin:0 auto;
    position:relative;


    .text-wrap {
        overflow:hidden;
        height:100%;
        color:#fff;
        font-size:${({theme}) => theme.typo['size-title-3']};
        font-weight:${({theme}) => theme.typo['weight-bold']};
        position:absolute;
        top:0;
        padding:0 24px;
        width:100%;

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

        .goto-git {
            margin-top:16px;
        }
    }

    .wrap {
        pointer-events:none;
        z-index:1;
        position:sticky;
        top:calc(50vh + 60px);
        height:calc(50vh - 60px);

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
            }
        }
    }
`

function SectionScrollAnimation(props){
    useEffect(() => {
        const scroll = new ScrollAnimation(window, '.section-1 .box')
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
    background:green;
`

function Ani(){
    useEffect(() => {
        const scroll = new ScrollAnimation(window, '.section-1 .animation .box')
    }, []);
    return (
        <AniWrap className="animation">
            <div    className="box"
                    data-animation-start="<$ return Math.round(this.closest('.section-1').offsetTop); $>"
                    data-animation-end="<$ return Math.round( this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight/3 ); $>"
                    data-animation-0="opacity:0;"
                    data-animation-100="opacity:1;">
                test
            </div>
        </AniWrap>
    )
}

export default SectionScrollAnimation;