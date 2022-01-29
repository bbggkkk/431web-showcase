import styled from "styled-components";

const StackComponent = styled.div`
    width:100%;
    margin-bottom:48px;

    .wrapper {
        ${({theme}) => theme.basicWidth};
        .spacer {
            padding:0 24px;
            display:grid;
            gap:8px;
            grid-template-columns:1fr 1fr;

            @media screen and (min-width:1024px) {
                grid-template-columns:1fr 1fr 1fr;
            }


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

            .stack-electron {
                .elec-line {
                    // transition:fill 0.4s;
                    // fill:${({theme}) => theme.mode === 'dark' ? '#9feaf9' : '#47848F'};
                    fill:#9feaf9;
                }
                .elec-back {
                    transition:fill 0.4s;
                    fill:${({theme}) => theme.mode === 'dark' ? 'transparent' : '#2b2e3a' };
                    // fill:none;
                }
            }

        }
    }

`

function Stack(){
    return (
        <>
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
                            <div className="stack-html stack-g-sc stack-n">
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
                            <div className="stack-css stack-g-sc stack-n">
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
            <StackComponent>
                <div className="wrapper">
                    <div className="spacer">
                        <StackItem>
                            <div className="stack-node stack-g-sc stack-n">
                                <p className="t-title-3 stack-name">Node JS</p>
                                <svg xmlns="http://www.w3.org/2000/svg"  width="94.436" height="107.492" viewBox="0 0 94.436 107.492">
                                    <defs>
                                        <linearGradient id="linear-gradient" x1="0.681" y1="0.175" x2="0.278" y2="0.897" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#3f873f"/>
                                        <stop offset="0.33" stop-color="#3e8a3d"/>
                                        <stop offset="0.637" stop-color="#3e9537"/>
                                        <stop offset="0.934" stop-color="#3da82d"/>
                                        <stop offset="1" stop-color="#3dae2b"/>
                                        </linearGradient>
                                        <clipPath id="clip-path">
                                        <path id="패스_19" data-name="패스 19" d="M244.12,226.607a5.092,5.092,0,0,0-5.088,0L196.9,250.921a5.089,5.089,0,0,0-2.545,4.408v48.666A5.094,5.094,0,0,0,196.9,308.4l42.134,24.333a5.086,5.086,0,0,0,5.09,0L286.245,308.4a5.094,5.094,0,0,0,2.544-4.408V255.327a5.088,5.088,0,0,0-2.545-4.406Z" fill="url(#linear-gradient)" clip-rule="evenodd"/>
                                        </clipPath>
                                        <linearGradient id="linear-gradient-3" x1="0.432" y1="0.552" x2="1.591" y2="-0.183" gradientUnits="objectBoundingBox">
                                        <stop offset="0.138" stop-color="#3f873f"/>
                                        <stop offset="0.397" stop-color="#519f44"/>
                                        <stop offset="0.711" stop-color="#63b649"/>
                                        <stop offset="0.908" stop-color="#6abf4b"/>
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-4" x1="-57.151" y1="0.5" x2="68.852" y2="0.5" gradientUnits="objectBoundingBox">
                                        <stop offset="0.092" stop-color="#6abf4b"/>
                                        <stop offset="0.289" stop-color="#63b649"/>
                                        <stop offset="0.603" stop-color="#519f44"/>
                                        <stop offset="0.862" stop-color="#3f873f"/>
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-5" x1="-0.045" x2="1.016" />
                                        <linearGradient id="linear-gradient-6" x1="-347.794" x2="1" />
                                        <linearGradient id="linear-gradient-7" x1="-1.037" x2="1.006" />
                                        <linearGradient id="linear-gradient-8" x1="1.303" y1="-2.11" x2="0.044" y2="2.012" />
                                    </defs>
                                    <g id="그룹_1" data-name="그룹 1" transform="translate(-194.353 -225.926)">
                                        <path id="패스_8" data-name="패스 8" d="M244.12,226.607a5.092,5.092,0,0,0-5.088,0L196.9,250.921a5.089,5.089,0,0,0-2.545,4.408v48.666A5.094,5.094,0,0,0,196.9,308.4l42.134,24.333a5.086,5.086,0,0,0,5.09,0L286.245,308.4a5.094,5.094,0,0,0,2.544-4.408V255.327a5.088,5.088,0,0,0-2.545-4.406Z" fill-rule="evenodd" fill="url(#linear-gradient)"/>
                                        <g id="그룹_6" data-name="그룹 6" clip-path="url(#clip-path)">
                                        <g id="그룹_4" data-name="그룹 4">
                                            <path id="패스_9" data-name="패스 9" d="M238.944,226.607l-42.222,24.314A5.259,5.259,0,0,0,194,255.329v48.666a4.922,4.922,0,0,0,1.313,3.238l47.44-81.152A5.17,5.17,0,0,0,238.944,226.607Z" fill="none"/>
                                            <path id="패스_10" data-name="패스 10" d="M242.988,333.229a5.019,5.019,0,0,0,1.186-.493L286.351,308.4A5.2,5.2,0,0,0,289,303.995V255.327a5.029,5.029,0,0,0-1.54-3.534Z" fill="none"/>
                                            <path id="패스_11" data-name="패스 11" d="M286.327,250.921l-42.252-24.314a5.065,5.065,0,0,0-1.322-.526l-47.44,81.152a5.808,5.808,0,0,0,1.42,1.17l42.324,24.333a5.142,5.142,0,0,0,3.931.493l44.472-81.436A5.567,5.567,0,0,0,286.327,250.921Z" fill="url(#linear-gradient-3)"/>
                                        </g>
                                        <g id="그룹_5" data-name="그룹 5">
                                            <path id="패스_12" data-name="패스 12" d="M289,303.995V255.327a5.211,5.211,0,0,0-2.673-4.406l-42.252-24.314a5.085,5.085,0,0,0-1.55-.571l46.317,79.128A4.661,4.661,0,0,0,289,303.995Z" fill="none"/>
                                            <path id="패스_13" data-name="패스 13" d="M196.722,250.921A5.259,5.259,0,0,0,194,255.329v48.666a5.281,5.281,0,0,0,2.733,4.408l42.324,24.333a5.13,5.13,0,0,0,3.256.633l-45.337-82.594Z" fill="none"/>
                                            <path id="패스_14" data-name="패스 14" d="M237.627,217.669l-.579.331h.773Z" fill="url(#linear-gradient-4)"/>
                                            <path id="패스_15" data-name="패스 15" d="M286.351,308.4a5.325,5.325,0,0,0,2.491-3.239l-46.317-79.128a5.166,5.166,0,0,0-3.581.571l-41.968,24.168,45.337,82.594a5.083,5.083,0,0,0,1.861-.633Z" fill="url(#linear-gradient-5)"/>
                                            <path id="패스_16" data-name="패스 16" d="M290.279,307.62l-.279-.477v.639Z" fill="url(#linear-gradient-6)"/>
                                            <path id="패스_17" data-name="패스 17" d="M286.351,308.4l-42.177,24.333a5.083,5.083,0,0,1-1.861.633l.84,1.53L290,307.782v-.639l-1.158-1.979A5.325,5.325,0,0,1,286.351,308.4Z" fill="url(#linear-gradient-7)"/>
                                            <path id="패스_18" data-name="패스 18" d="M286.351,308.4l-42.177,24.333a5.083,5.083,0,0,1-1.861.633l.84,1.53L290,307.782v-.639l-1.158-1.979A5.325,5.325,0,0,1,286.351,308.4Z" fill="url(#linear-gradient-8)"/>
                                        </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </StackItem>
                        <StackItem>
                            <div className="stack-electron stack-g-sc stack-n">
                                <p className="t-title-3 stack-name">Electron</p>
                                <svg id="그룹_2" data-name="그룹 2" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                                    <circle id="타원_1" className="elec-back" data-name="타원 1" cx="128" cy="128" r="128" fill="#2b2e3a"/>
                                    <g id="그룹_1" data-name="그룹 1">
                                        <path id="패스_1" data-name="패스 1" d="M100.5,71.69c-26-4.736-46.567.221-54.762,14.415-6.115,10.592-4.367,24.635,4.24,39.646a2.667,2.667,0,1,0,4.627-2.653c-7.753-13.522-9.262-25.641-4.248-34.326,6.808-11.791,25.148-16.213,49.187-11.835a2.667,2.667,0,1,0,.956-5.247ZM63.5,144c10.515,11.555,24.176,22.394,39.756,31.388,37.723,21.78,77.883,27.6,97.675,14.106a2.667,2.667,0,1,0-3.005-4.406c-17.714,12.078-55.862,6.548-92-14.318-15.114-8.726-28.343-19.222-38.478-30.36A2.667,2.667,0,1,0,63.5,144Z" className="elec-line" fill="#9feaf9"/>
                                        <path id="패스_2" data-name="패스 2" d="M194.62,140.753c17.028-20.116,22.973-40.348,14.795-54.512C203.4,75.818,190.677,70.315,173.77,70.1a2.667,2.667,0,1,0-.069,5.333c15.205.2,26.165,4.939,31.1,13.48,6.792,11.765,1.49,29.807-14.248,48.4a2.667,2.667,0,1,0,4.071,3.446ZM150.859,72.578c-15.4,3.3-31.784,9.749-47.522,18.835C64.395,113.9,38.992,147.049,42.52,171.088a2.667,2.667,0,1,0,5.277-.775C44.664,148.969,68.744,117.544,106,96.032c15.267-8.815,31.135-15.06,45.972-18.239a2.667,2.667,0,1,0-1.117-5.215Z" className="elec-line" fill="#9feaf9"/>
                                        <path id="패스_3" data-name="패스 3" d="M87.77,187.753c8.9,24.86,23.469,40.167,39.847,40.167,11.945,0,23-8.143,31.614-22.478a2.667,2.667,0,1,0-4.571-2.748c-7.745,12.883-17.258,19.892-27.043,19.892-13.6,0-26.6-13.652-34.825-36.63a2.667,2.667,0,1,0-5.022,1.8Zm81.322-4.863a167.4,167.4,0,0,0,7.085-49.423c0-44.179-15.463-82.263-37.487-92.042a2.667,2.667,0,1,0-2.164,4.875c19.643,8.722,34.317,44.865,34.317,87.167A162.152,162.152,0,0,1,164,181.3a2.667,2.667,0,1,0,5.09,1.593Zm50.224-2.612a12.763,12.763,0,1,0-12.763,12.763A12.763,12.763,0,0,0,219.316,180.278Zm-5.333,0a7.43,7.43,0,1,1-7.43-7.43,7.43,7.43,0,0,1,7.43,7.43ZM48.5,193.041a12.763,12.763,0,1,0-12.763-12.763A12.763,12.763,0,0,0,48.5,193.041Zm0-5.333a7.43,7.43,0,1,1,7.43-7.43,7.43,7.43,0,0,1-7.43,7.43Z" className="elec-line" fill="#9feaf9"/>
                                        <path id="패스_4" data-name="패스 4" d="M127.617,54.444a12.763,12.763,0,1,0-12.763-12.763,12.763,12.763,0,0,0,12.763,12.763Zm0-5.333a7.43,7.43,0,1,1,7.43-7.43,7.43,7.43,0,0,1-7.43,7.43Zm1.949,93.382a9.234,9.234,0,1,1,7.077-10.976A9.234,9.234,0,0,1,129.566,142.493Z" className="elec-line" fill="#9feaf9"/>
                                    </g>
                                </svg>
                            </div>
                        </StackItem>
                    </div>
                </div>
            </StackComponent>
        </>
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