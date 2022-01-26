import styled from "styled-components";

const CareerComponent = styled.section`
    width:100%;
    height:200vh;

    .wrapper {
        ${({theme}) => theme.basicWidth};

        .spacer {
            padding:0 24px;
            display:grid;
            gap:8px;
            grid-template-columns:1fr;

            @media screen and (min-width:480px) and (max-width:739px) {
                grid-template-columns:1fr 1fr;
            }

            .title {
                margin-bottom:8px;
                text-align:center;
                opacity:0.5;
            }

            .company {
                display:flex;
                justify-content:center;
                align-items:center;
                
                .thumb {
                    width:64px;
                }
                .flex-fill {
                    flex:1;
                    flex-grow:1;
                }

            }

            .article {
                padding-top:16px;
            }
        }
    }
`

function Career(){

    return (
        <CareerComponent>
            <div className="wrapper">
                <div className="spacer">
                    {/* <p className="t-title-3 title">Job</p> */}
                    <CareerItem>
                        <div className="company">
                            <div className="">
                                <p className="t-title-2">NULLEE</p>
                                <p className="t-body-2">2020.02 ~</p>
                            </div>
                        </div>
                        <div className="article t-body-2">세금신고 서비스 SSEM APP의 전반적인 개발, 프레임워크 관리, 장부시스템 화면 개발, 어드민 페이지 개발을 맡았습니다.</div>
                    </CareerItem>
                </div>
            </div>
        </CareerComponent>
    )
}

export default Career;


const CareerItemComponent = styled.div`
    border-radius:32px;
    padding:24px 16px;
    background:${({theme}) => theme.mode === 'dark' ? theme.typo['color-800'] : theme.typo['color-100']};
    transition:background 0.4s;

    > * {
        transition:color 0.4s;
    }
`
function CareerItem(props){
    
    return (
        <CareerItemComponent>
            {props.children}
        </CareerItemComponent>
    )
}