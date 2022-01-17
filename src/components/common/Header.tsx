import styled                   from 'styled-components';
import Logo                     from 'components/common/Logo';
import Button                   from 'components/common/Button';

const HeaderComponent = styled.header`
    height:60px;
    width:100%;
    position:fixed;
    padding:0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
    z-index:9;
    top:0;
    background:rgba(${({theme}) => theme.color.backgroundRgb},.92);
    transition:background 0.4s;
    backdrop-filter:blur(10px);

    .box {
        ${({theme}) => theme.basicWidth};
        padding:0;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        color:${({theme}) => theme.color.text};

        .logo {
            position:absolute;
            top:50%;
            left:${({theme}) => theme.size.wrap};
            transform:translateY(-50%);
        }
    
        .button-wrapper {
            display:flex;
            justify-content:center;
            align-items:center;
            gap:16px;

            position:absolute;
            top:50%;
            right:${({theme}) => theme.size.wrap};
            transform:translateY(-50%);

            svg {
                display:block;
            }
            .dark-mode {
                fill:${({theme}) => theme.color.secondary};
            }
            .light-mode {
                fill:${({theme}) => theme.color.tertiary};
            }
        }
    }
`

function Header(props) {
    const setDark = props.setTheme;
    const isDark  = props.isDark;
    return (
        <HeaderComponent>
            <div className="box">
                <Logo className="logo"/>
                <div className="menu-wrapper"></div>
                <div className="button-wrapper">
                    <div onClick={() => { setDark(!isDark); document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1A2024' : '#fff') }}>
                        {isDark ? <svg className="dark-mode" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M11.01,3.05C6.51,3.54,3,7.36,3,12c0,4.97,4.03,9,9,9c4.63,0,8.45-3.5,8.95-8c0.09-0.79-0.78-1.42-1.54-0.95 c-0.84,0.54-1.84,0.85-2.91,0.85c-2.98,0-5.4-2.42-5.4-5.4c0-1.06,0.31-2.06,0.84-2.89C12.39,3.94,11.9,2.98,11.01,3.05z"/></svg> : <svg className="light-mode" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg> }
                    </div>
                    <Button size="small" type="on">작업물 보기</Button>
                </div>
                {/* <svg className="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="social-github" d="M14.25,2.25a12.158,12.158,0,0,0-12,12.306,12.281,12.281,0,0,0,8.207,11.673.941.941,0,0,0,.2.021.581.581,0,0,0,.616-.611c0-.295-.011-1.066-.016-2.094a5.486,5.486,0,0,1-1.211.145,2.789,2.789,0,0,1-2.834-1.794,3.252,3.252,0,0,0-1.334-1.8c-1.045-.734-.005-.755.075-.755h.005A2.581,2.581,0,0,1,7.8,20.614a2.356,2.356,0,0,0,2.121,1.345,3.375,3.375,0,0,0,1.371-.322,2.66,2.66,0,0,1,.76-1.645c-2.663-.311-5.464-1.366-5.464-6.08a4.817,4.817,0,0,1,1.232-3.3,4.528,4.528,0,0,1,.118-3.257,1,1,0,0,1,.268-.027A5.7,5.7,0,0,1,11.239,8.62a11.154,11.154,0,0,1,6.011,0,5.7,5.7,0,0,1,3.032-1.291,1,1,0,0,1,.268.027,4.533,4.533,0,0,1,.118,3.257,4.837,4.837,0,0,1,1.232,3.3c0,4.725-2.807,5.765-5.48,6.069a2.982,2.982,0,0,1,.814,2.277c0,1.645-.016,2.973-.016,3.375a.578.578,0,0,0,.611.616,1.037,1.037,0,0,0,.214-.021A12.281,12.281,0,0,0,26.25,14.556,12.158,12.158,0,0,0,14.25,2.25Z" transform="translate(-2.25 -2.25)" fill="#f7f7f7"/>
                </svg> */}
            </div>
        </HeaderComponent>
    );
}

export default Header;
