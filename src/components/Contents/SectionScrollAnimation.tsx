import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import Phone from "components/common/Phone";
import { useEffect }    from "react";
import styled from "styled-components";

const SectionScrollAnimationComponent = styled.section`
    width:100%;
    height:300vh;
    position:relative;

    .wrap {
        position:sticky;
        top:60px;
        height:calc(100vh - 60px);

        .content {
            padding:0 24px;
            color:#fff;
            height:100%;

            > div {
                width:100%;
                height:50%;
            }
            .text-wrap {
                font-size:${({theme}) => theme.typo['size-title-3']};
                font-weight:${({theme}) => theme.typo['weight-bold']};
                position:relative;

                .position {
                    height:100%;
                    display:flex;
                    align-items:center;
                }
                .position.title {
                    font-size:${({theme}) => theme.typo['size-title-1']};
                }

                .box {
                    height:100%;
                }

                .goto-git {
                    margin-top:16px;
                }
            }
            .phone-wrap {
                position:relative;
                overflow:hidden;
            }
        }
    }
`

function SectionScrollAnimation(){
    useEffect(() => {
        const scroll = new ScrollAnimation(window, '.section-1 .box')
    }, []);
    return (
        <SectionScrollAnimationComponent className="section-wrap section-1">
            <div className="wrap">
                <div className="content">
                    <div className="text-wrap">
                        <div className="box"
                            data-animation-start="<$ return Math.round(this.closest('.section-1').offsetTop + (window.outerHeight*0.25)); $>"
                            data-animation-end="<$ return Math.round(this.closest('.section-1').offsetTop + this.closest('.section-1').offsetHeight - (window.outerHeight*1.25)); $>"
                            data-animation-0="transform:translateY(0%);"
                            data-animation-100="transform:translateY(-200%);">
                            <div className="position title">
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
                                    <p>깃허브에서 보기</p>
                                    <div className="goto-git">
                                        <a href="https://github.com/bbggkkk/scroll-animation" target="_blank" title="scroll-animation">
                                            <Button type="on">
                                                보러가기
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="phone-wrap">
                        <Phone width="100%" height="200%"></Phone>
                    </div>
                </div>
            </div>
        </SectionScrollAnimationComponent>
    )
}

export default SectionScrollAnimation;