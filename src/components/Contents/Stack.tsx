import styled from "styled-components";

const StackComponent = styled.div`
    width:100%;

    .wrapper {
        ${({theme}) => theme.basicWidth};
        .spacer {
            padding:0 24px;
            display:grid;
            gap:8px;
            grid-template-columns:1fr 1fr;


            .stack-name {
                position:absolute;
                top:0;
                left:0;
                padding:24px 0 0 16px;
                transition:color 0.4s;
            }

            .stack-javascript {
                position:absolute;
                top:0; left:0;
                width:100%;
                height:100%;
                background:#f7df1e;
                
                .stack-name {
                    color:${({theme}) => theme.color.tertiary};
                }
                img {
                    width:100%;
                    height:100%;
                    object-fit:contain;
                    object-position:right bottom;
                    padding:16px;
                }
            }

            .stack-g-mu {
                position:absolute;
                top:0; left:0;
                width:100%;
                height:100%;
                
                svg {
                    position:absolute;
                    top:50%; left:50%;
                    transform:translate(-50%, calc(-50% + 8px));
                    width:50%;
                    max-height:120px;
                }
            }
        }
    }

`

function Stack(){
    return (
        <StackComponent>
            <div className="wrapper">
                <div className="spacer">
                    <StackItem>
                        <div className="stack-javascript">
                            <p className="t-title-3 stack-name">Javascript</p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"/>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-html stack-g-mu">
                            <p className="t-title-3 stack-name">HTML</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="362.8" height="411.4" viewBox="0 0 362.8 411.4">
                                <g id="그룹_1" data-name="그룹 1" transform="translate(-74.6 -100.6)">
                                    <path id="패스_2" data-name="패스 2" d="M107.6,471l-33-370.4H437.4l-33,370.2L255.7,512" fill="#e44d26"/>
                                    <path id="패스_3" data-name="패스 3" d="M256,480.5V131H404.3L376,447" fill="#f16529"/>
                                    <path id="패스_4" data-name="패스 4" d="M142,176.3H256v45.4H191.8l4.2,46.5h60v45.3H154.4m2,22.8H202l3.2,36.3L256,386.2v47.4l-93.2-26" fill="#ebebeb"/>
                                    <path id="패스_5" data-name="패스 5" d="M369.6,176.3H255.8v45.4H365.4m-4.1,46.5H255.8v45.4h56l-5.3,59-50.7,13.6v47.2l93-25.8" fill="#fff"/>
                                </g>
                            </svg>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/> */}
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-css stack-g-mu">
                            <p className="t-title-3 stack-name">CSS</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="362.734" height="411.38" viewBox="0 0 362.734 411.38">
                                <g id="layer1" transform="translate(-193.633 -376.982)">
                                    <g id="g3013" transform="translate(119 276.362)">
                                    <path id="polygon2989" d="M437.367,100.62l-33.046,370.2L255.778,512,107.644,470.877,74.633,100.62Z" fill="#264de4"/>
                                    <path id="polygon2991" d="M376.03,447.246l28.24-316.352H256V480.523Z" fill="#2965f1"/>
                                    <path id="polygon2993" d="M150.31,268.217l4.07,45.41H256v-45.41Z" fill="#ebebeb"/>
                                    <path id="polygon2995" d="M256,176.3H142.132l4.128,45.411H256Z" fill="#ebebeb"/>
                                    <path id="polygon2997" d="M256,433.4V386.153l-.2.053L205.227,372.55l-3.233-36.217H156.409l6.362,71.3,93.02,25.823Z" fill="#ebebeb"/>
                                    <path id="polygon3005" d="M311.761,313.627l-5.271,58.894-50.647,13.67v47.244l93.094-25.8.683-7.672,10.671-119.551,1.108-12.194,8.2-91.912H255.843v45.411h63.988l-4.132,46.5H255.843v45.41Z" fill="#fff"/>
                                    </g>
                                </g>
                            </svg>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/> */}
                        </div>
                    </StackItem>
                </div>
            </div>
        </StackComponent>
    )
}

export default Stack;



const StackItemComponent = styled.div`
    border-radius:32px;
    padding:16px;
    background:${({theme}) => theme.mode === 'dark' ? theme.typo['color-800'] : theme.typo['color-100']};
    transition:background 0.4s;
    height:240px;
    position:relative;
    overflow:hidden;
    transform:translate3d(0,0,0);
`

function StackItem(props){
    return (
        <StackItemComponent>
            {props.children}
        </StackItemComponent>
    )
}