import { ScrollAnimation } from 'assets/library/scrollAnimation';
import Button from 'components/common/Button';
import { useEffect, useState } from 'react';
import styled            from 'styled-components';


const RecentWorkComponent = styled.section`
width:100%;
height:100vh;
z-index:1;
position:relative;

    .wrap {
        ${({theme}) => theme.basicWidth};
        .text-wrap {
            // width:100%;
            font-size:${({theme}) => theme.typo['size-title-3']};
            font-weight:${({theme}) => theme.typo['weight-bold']};
            position:absolute;
            top:0;
            width:calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));
            
            .position {
                overflow:hidden;
                padding:0 24px;
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
        transform:translateY(-25%);
        position:sticky;
        top:0px;
        width:100%;
        height:200vh;
        transition:background 0.4s;
        background:no-repeat center / cover url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80);
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
                 data-animation-start="<$ return Math.round(this.closest('.publish-wrap').offsetTop - (window.outerHeight/1.5)); $>"
                 data-animation-end="<$ return Math.round(this.closest('.publish-wrap').offsetTop + this.closest('.publish-wrap').offsetHeight - (window.outerHeight/4)); $>"
                 data-animation-0="clip-path:circle(0%);"
                 data-animation-25="clip-path:circle(72%);"
                 data-animation-75="clip-path:circle(72%);"
                 data-animation-100="clip-path:circle(0%);"></div>
            <div className="wrap">
                <div className="text-wrap">
                    <div className="position box"
                        data-animation-start="<$ return Math.round(this.closest('.publish-wrap').offsetTop - window.outerHeight); $>"
                        data-animation-end="<$ return Math.round(this.closest('.publish-wrap').offsetTop + window.outerHeight); $>"
                        data-animation-0="opacity:0; transform:translate(0%, calc(0vh - 0%));"
                        data-animation-40="opacity:1;"
                        data-animation-60="opacity:1;"
                        data-animation-100="opacity:0; transform:translate(0%, calc(100vh - 100%));">
                        <p className="title">Publishing</p>
                        <p>퍼블리싱 포트폴리오</p>
                        <a href="//portfolio.431web.com" target="_blank">
                            <Button type="on">보러가기</Button>
                        </a>
                    </div>
                </div>            
            </div>
        </RecentWorkComponent>
    )
}

export default RecentWork;