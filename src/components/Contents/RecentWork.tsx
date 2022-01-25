import { ScrollAnimation } from 'assets/library/scrollAnimation';
import Button from 'components/common/Button';
import { useEffect, useState } from 'react';
import styled            from 'styled-components';

import imgLaptop  from "assets/images/laptop-set.jpg";


const RecentWorkComponent = styled.section`
    top:-100vh;
    margin-bottom:-100vh;
    width:100%;
    height:300vh;
    z-index:1;
    position:relative;

    .wrap {
        position:absolute;
        // top:100vh;
        width:100%;
        .text-wrap {
            ${({theme}) => theme.basicWidth};
            font-size:${({theme}) => theme.typo['size-title-3']};
            font-weight:${({theme}) => theme.typo['weight-bold']};
            width:100%;
            
            .position {
                padding:0 24px;
                overflow:hidden;
                transition:color 0.4s;
                color:#fff;
                // color:${({theme}) => theme.color.text};
                .title {
                    font-weight:${({theme}) => theme.typo['weight-black']};
                    font-size:${({theme}) => theme.typo['size-head-2']};
                }
                p:nth-child(2){
                    margin-bottom:24px;
                }
            }
        }

    }
    .background {
        position:sticky;
        top:0px;
        width:100%;
        height:100vh;
        transition:opacity 0.4s;
        background:no-repeat center / cover url(${imgLaptop});
        // background:${({theme}) => theme.mode === 'dark' ? theme.color.primary : theme.color.secondary};
    }
`;

function RecentWork({width = '360px', height = '680px', ...props}){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, '.publish-wrap .box');
            setRun(false);
        }
    }, []);
    return (
        <RecentWorkComponent className="publish-wrap">
            <div className="background box"
                 data-animation-start="<$ return Math.round(this.closest('.publish-wrap').offsetTop); $>"
                 data-animation-end="<$ return Math.round(this.closest('.publish-wrap').offsetTop + (window.outerHeight/0.75)); $>"
                 data-animation-0="clip-path:polygon(50% 0%, 0% 0%, 0% 0%); opacity:1;"
                 data-animation-25="clip-path:polygon(50% -100%, 200% 200%, -100% 200%);"
                 data-animation-75="opacity:1;"
                 data-animation-100="clip-path:polygon(50% -100%, 200% 200%, -100% 200%); opacity:0;">



                <div className="wrap">
                    <div className="text-wrap">
                        <div className="position box"
                            data-animation-start="<$ return Math.round(this.closest('.publish-wrap').offsetTop); $>"
                            data-animation-end="<$ return Math.round(this.closest('.publish-wrap').offsetTop + (window.outerHeight/0.5)); $>"
                            data-animation-0="transform:translate(0%, calc(0vh - 0%));"
                            data-animation-100="transform:translate(0%, calc(100vh - 100%));">
                            <p className="title">Publishing</p>
                            <p>퍼블리싱 포트폴리오</p>
                            <a href="//portfolio.431web.com" target="_blank">
                                <Button type="on">보러가기</Button>
                            </a>
                        </div>
                    </div>            
                </div>
            </div>
        </RecentWorkComponent>
    )
}

export default RecentWork;