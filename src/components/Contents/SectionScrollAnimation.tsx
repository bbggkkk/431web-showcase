import { ScrollAnimation } from "assets/library/scrollAnimation";
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
                display:flex;
                align-items:center;
                font-size:${({theme}) => theme.typo['size-title-3']};
                font-weight:${({theme}) => theme.typo['weight-bold']};
                position:relative;

                .position {
                    position:absolute;
                    top:50%;
                    transform:translateY(-50%);
                }
                .position.title {
                    font-size:${({theme}) => theme.typo['size-title-1']};
                }
            }
            .phone-wrap {
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
                        <div className="position title">
                            <p className="box"
                               data-animation-bind=".section-1 .animator"
                               data-animation-index="0"
                               data-animation-lng="6">Scroll</p>
                            <p className="box"
                               data-animation-bind=".section-1 .animator"
                               data-animation-index="1"
                               data-animation-lng="6">Animation</p>
                        </div>
                        {/* <div className="position">
                            <p>스크롤에 반응하는</p>
                            <p>애니메이션을 편리하게</p>
                            <p>만드는 라이브러리</p>
                        </div> */}
                        <div    className="animator"
                                data-animation-start="<$ return Math.round(this.closest('.section-wrap').offsetTop + ((+this.getAttribute('data-animation-index')-0) * (window.outerHeight / (+this.getAttribute('data-animation-lng'))) )); $>"
                                data-animation-end="<$ return Math.round(this.closest('.section-wrap').offsetTop + ((+this.getAttribute('data-animation-index')+1) * (window.outerHeight / (+this.getAttribute('data-animation-lng'))) )); $>"
                                data-animation-0="transform:translateY(50%); opacity:0;"
                                data-animation-100="transform:translateY(0%); opacity:1;"></div>
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