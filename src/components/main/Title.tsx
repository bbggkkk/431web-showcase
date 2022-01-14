import { useRef, useEffect }        from 'react';
import styled                       from 'styled-components';
import { ScrollAnimation }          from 'assets/library/scrollAnimation';
import Button from 'components/common/Button';
import Phone from 'components/common/Phone';

const TitleComponent = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    overflow:hidden;
    background:${({theme}) => theme.color.background};

    .phone {
        position:absolute; top:50%; left:50%;
        transform:translate(-50%, -50%) rotate(-30deg);

        .box {
            transform-origin:bottom right;
        }
    }

    .main-title {
        position:absolute;
        left:24px;
        top:50%;
        transform:translateY(-50%);

        color:${({theme}) => theme.color.text};
        font-size:${({theme}) => theme.typo['size-title-1']};
        font-weight:${({theme}) => theme.typo['weight-black']};
    }

    .button-wrap {
        margin-top:48px;
        display:flex;
        gap:8px;
    }

`

function Title() {
    useEffect(()=>{
        const scrollAnimation = new ScrollAnimation(window, '.main-wrap .box')
    },[]);
    return (
        <TitleComponent className="main-wrap">
            <div className="phone">
                <div className="box"
                    data-animation-start="0"
                    data-animation-end="<$ return parseInt(window.outerHeight/1.25); $>"
                    data-animation-0="transform:translate(0%, 0%) rotate(0deg);"
                    data-animation-100="transform:translate(50%, 0%) rotate(24deg);">
                    <Phone width="320px" height="600px"></Phone>
                </div>
            </div>
            <div className="main-title">
                <p>431Web</p>
                <p>프론트엔드 공방</p>
                <div className="button-wrap">
                    <Button type="on">
                        <svg id="_-92986742912491551inbox_black_24dp" data-name="-92986742912491551inbox_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path id="패스_4" data-name="패스 4" d="M0,0H24V24H0Z" fill="none"/>
                            <path id="패스_5" data-name="패스 5" d="M19,3H4.99A1.976,1.976,0,0,0,3.01,5L3,19a1.991,1.991,0,0,0,1.99,2H19a2.006,2.006,0,0,0,2-2V5A2,2,0,0,0,19,3Zm0,12H15a3,3,0,0,1-6,0H4.99V5H19Z" fill="#fff"/>
                        </svg>
                        포트폴리오
                    </Button>
                    <Button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="social-github" d="M14.25,2.25a12.158,12.158,0,0,0-12,12.306,12.281,12.281,0,0,0,8.207,11.673.941.941,0,0,0,.2.021.581.581,0,0,0,.616-.611c0-.295-.011-1.066-.016-2.094a5.486,5.486,0,0,1-1.211.145,2.789,2.789,0,0,1-2.834-1.794,3.252,3.252,0,0,0-1.334-1.8c-1.045-.734-.005-.755.075-.755h.005A2.581,2.581,0,0,1,7.8,20.614a2.356,2.356,0,0,0,2.121,1.345,3.375,3.375,0,0,0,1.371-.322,2.66,2.66,0,0,1,.76-1.645c-2.663-.311-5.464-1.366-5.464-6.08a4.817,4.817,0,0,1,1.232-3.3,4.528,4.528,0,0,1,.118-3.257,1,1,0,0,1,.268-.027A5.7,5.7,0,0,1,11.239,8.62a11.154,11.154,0,0,1,6.011,0,5.7,5.7,0,0,1,3.032-1.291,1,1,0,0,1,.268.027,4.533,4.533,0,0,1,.118,3.257,4.837,4.837,0,0,1,1.232,3.3c0,4.725-2.807,5.765-5.48,6.069a2.982,2.982,0,0,1,.814,2.277c0,1.645-.016,2.973-.016,3.375a.578.578,0,0,0,.611.616,1.037,1.037,0,0,0,.214-.021A12.281,12.281,0,0,0,26.25,14.556,12.158,12.158,0,0,0,14.25,2.25Z" transform="translate(-2.25 -2.25)" fill="#1a2024"/>
                        </svg>깃허브
                    </Button>
                </div>
            </div>
        </TitleComponent>
    );
}

export default Title;