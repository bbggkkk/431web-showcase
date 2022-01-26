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
                height:100%;
                background:#f7df1e;
                
                .stack-name {
                    color:${({theme}) => theme.color.tertiary};
                }
            }
            .stack-typescript {
                background:#3178C6;
                
                .stack-name {
                    color:#fff;
                }
            }
            .stack-react {
                background:#61DAFB;
                
                .stack-name {
                    color:${({theme}) => theme.color.tertiary};
                }
            }
            .stack-svelte {
                background:#FF3E00;
                
                .stack-name {
                    color:#fff;
                }
            }

            .stack-g-mu {
                
                svg {
                    position:absolute;
                    top:50%; left:50%;
                    transform:translate(-50%, calc(-50% + 8px));
                    width:50%;
                    max-height:120px;
                }
            }

            .stack-g-sc { 
                svg {
                    position:absolute;
                    bottom:16px; right:16px;
                    width:50%;
                    max-width:120px;
                    max-height:120px;
                }
            }

            .stack-n {
                position:absolute;
                top:0; left:0;
                width:100%;
                height:100%;
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
                        <div className="stack-javascript stack-g-sc stack-n">
                            <p className="t-title-3 stack-name">Javascript</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                                <rect width="630" height="630" fill="#f7df1e"/>
                                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                            </svg>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-typescript stack-g-sc stack-n">
                            <p className="t-title-3 stack-name">Typescript</p>
                            <svg id="그룹_1" data-name="그룹 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <rect id="사각형_1" data-name="사각형 1" width="512" height="512" fill="#3178c6"/>
                                <path id="패스_1" data-name="패스 1" d="M317,407v50c8.1,4.2,18,7.3,29,9.4a189.127,189.127,0,0,0,35,3.1,163.373,163.373,0,0,0,34-3.4,86.257,86.257,0,0,0,28-11c8.1-5.3,15-12,19-21a75.6,75.6,0,0,0,7.1-32,65.944,65.944,0,0,0-4.1-24,47.113,47.113,0,0,0-12-18,79.422,79.422,0,0,0-18-14,223.3,223.3,0,0,0-24-12c-6.6-2.7-12-5.3-18-7.9a78.051,78.051,0,0,1-13-7.8,35.692,35.692,0,0,1-8.5-8.4,17.56,17.56,0,0,1-3-10,16.762,16.762,0,0,1,2.7-9.3,23.4,23.4,0,0,1,7.5-7.1,39.046,39.046,0,0,1,12-4.6,69.834,69.834,0,0,1,16-1.6,92.333,92.333,0,0,1,13,.94,107.275,107.275,0,0,1,14,2.9,111.105,111.105,0,0,1,14,4.9,66.066,66.066,0,0,1,12,6.9v-47a123.529,123.529,0,0,0-25-6.5,200.5,200.5,0,0,0-31-2.1,150.76,150.76,0,0,0-34,3.8,79.15,79.15,0,0,0-28,12,57.58,57.58,0,0,0-19,21c-4.7,8.4-7,18-7,30,0,15,4.3,28,13,38,8.6,11,22,19,39,27,6.9,2.8,13,5.6,19,8.3a85.318,85.318,0,0,1,15,8.4,36.643,36.643,0,0,1,10,9.5,19.74,19.74,0,0,1,3.8,12,18.6,18.6,0,0,1-2.3,9,19.68,19.68,0,0,1-7.1,7.2,40.556,40.556,0,0,1-12,4.8,73.1,73.1,0,0,1-17,1.7,90.648,90.648,0,0,1-32-5.7,95.038,95.038,0,0,1-30-17ZM233,284h64V243H118v41h64V467h51Z" fill="#fff" fill-rule="evenodd"/>
                            </svg>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-react stack-g-sc stack-n">
                            <p className="t-title-3 stack-name">React</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24.619">
                                <g id="그룹_2" data-name="그룹 2" transform="translate(-948.5 -528.317)">
                                    <circle id="타원_1" data-name="타원 1" cx="2.05" cy="2.05" r="2.05" transform="translate(957.95 538.576)" fill="#fff"/>
                                    <g id="그룹_1" data-name="그룹 1" transform="translate(960 540.626)">
                                    <ellipse id="타원_2" data-name="타원 2" cx="11" cy="4.2" rx="11" ry="4.2" transform="translate(-11 -4.2)" fill="none" stroke="#fff" stroke-width="1"/>
                                    <ellipse id="타원_3" data-name="타원 3" cx="11" cy="4.2" rx="11" ry="4.2" transform="translate(-1.863 -11.626) rotate(60)" fill="none" stroke="#fff" stroke-width="1"/>
                                    <ellipse id="타원_4" data-name="타원 4" cx="11" cy="4.2" rx="11" ry="4.2" transform="translate(9.137 -7.426) rotate(120)" fill="none" stroke="#fff" stroke-width="1"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-svelte stack-g-sc stack-n">
                            <p className="t-title-3 stack-name">Svelte</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="98.102" height="118.027" viewBox="0 0 98.102 118.027">
                                <g id="그룹_1" data-name="그룹 1" transform="translate(0.025 0.014)">
                                    <path id="패스_1" data-name="패스 1" d="M91.8,15.6C80.9-.1,59.2-4.7,43.6,5.2L16.1,22.8A31.253,31.253,0,0,0,1.9,43.9,32.738,32.738,0,0,0,5.2,65.2,30.191,30.191,0,0,0,.5,77a33.646,33.646,0,0,0,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4L81.9,95.3A31.253,31.253,0,0,0,96.1,74.2a32.738,32.738,0,0,0-3.3-21.3,30.191,30.191,0,0,0,4.7-11.8,32.948,32.948,0,0,0-5.7-25.5" fill="#fff"/>
                                    <path id="패스_2" data-name="패스 2" d="M40.9,103.9a21.8,21.8,0,0,1-23.4-8.7A20.25,20.25,0,0,1,14,79.9c.2-.9.4-1.7.6-2.6l.5-1.6,1.4,1a36.476,36.476,0,0,0,10.8,5.4l1,.3-.1,1a6.694,6.694,0,0,0,1.1,4.1,6.619,6.619,0,0,0,7.1,2.7,8.651,8.651,0,0,0,1.7-.7L65.5,72a5.667,5.667,0,0,0,2.6-3.8,6.206,6.206,0,0,0-1-4.6A6.563,6.563,0,0,0,60,61a8.651,8.651,0,0,0-1.7.7L47.8,68.4a18.6,18.6,0,0,1-5.6,2.4,21.8,21.8,0,0,1-23.4-8.7,20.2,20.2,0,0,1-3.4-15.3A18.936,18.936,0,0,1,24,34.1L51.5,16.6a21.173,21.173,0,0,1,29,6.2A20.25,20.25,0,0,1,84,38.1a25.044,25.044,0,0,1-.7,2.6l-.5,1.6-1.4-1a36.476,36.476,0,0,0-10.8-5.4l-1-.3.1-1a6.694,6.694,0,0,0-1.1-4.1,6.563,6.563,0,0,0-7.1-2.6,8.651,8.651,0,0,0-1.7.7L32.4,46.1a5.667,5.667,0,0,0-2.6,3.8,6.206,6.206,0,0,0,1,4.6,6.563,6.563,0,0,0,7.1,2.6,8.651,8.651,0,0,0,1.7-.7l10.5-6.7a21.173,21.173,0,0,1,29,6.2,20.25,20.25,0,0,1,3.5,15.3A18.936,18.936,0,0,1,74,83.9L46.5,101.4a21.764,21.764,0,0,1-5.6,2.5" fill="#ff3e00"/>
                                </g>
                            </svg>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-html stack-g-mu stack-n">
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
                        <div className="stack-css stack-g-mu stack-n">
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