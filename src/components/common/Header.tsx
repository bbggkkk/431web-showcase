import styled                   from 'styled-components';
import { theme }                from 'assets/style/theme';
import Logo                     from 'components/common/Logo';
import Button                   from 'components/common/Button';

const HeaderComponent = styled.header`
    height:60px;
    position:sticky;
    top:0;
    background:rgba(${theme.color['tertiary-rgb']},.9);

    .box {
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;

        .logo {
            position:absolute;
            top:50%;
            left:${theme.size.wrap};
            transform:translateY(-50%);
        }
    
        .button-wrapper {
            display:flex;
            justify-content:center;
            align-items:center;

            position:absolute;
            top:50%;
            right:${theme.size.wrap};
            transform:translateY(-50%);
        }
    }
`

function Content() {
    return (
        <HeaderComponent>
            <div className="box">
                <Logo className="logo" color="#fff"/>
                <div className="menu-wrapper"></div>
                <div className="button-wrapper">
                    <Button size="small" color="#fff" background={theme.color.primary}>작업물 보기</Button>
                </div>
                {/* <svg className="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="social-github" d="M14.25,2.25a12.158,12.158,0,0,0-12,12.306,12.281,12.281,0,0,0,8.207,11.673.941.941,0,0,0,.2.021.581.581,0,0,0,.616-.611c0-.295-.011-1.066-.016-2.094a5.486,5.486,0,0,1-1.211.145,2.789,2.789,0,0,1-2.834-1.794,3.252,3.252,0,0,0-1.334-1.8c-1.045-.734-.005-.755.075-.755h.005A2.581,2.581,0,0,1,7.8,20.614a2.356,2.356,0,0,0,2.121,1.345,3.375,3.375,0,0,0,1.371-.322,2.66,2.66,0,0,1,.76-1.645c-2.663-.311-5.464-1.366-5.464-6.08a4.817,4.817,0,0,1,1.232-3.3,4.528,4.528,0,0,1,.118-3.257,1,1,0,0,1,.268-.027A5.7,5.7,0,0,1,11.239,8.62a11.154,11.154,0,0,1,6.011,0,5.7,5.7,0,0,1,3.032-1.291,1,1,0,0,1,.268.027,4.533,4.533,0,0,1,.118,3.257,4.837,4.837,0,0,1,1.232,3.3c0,4.725-2.807,5.765-5.48,6.069a2.982,2.982,0,0,1,.814,2.277c0,1.645-.016,2.973-.016,3.375a.578.578,0,0,0,.611.616,1.037,1.037,0,0,0,.214-.021A12.281,12.281,0,0,0,26.25,14.556,12.158,12.158,0,0,0,14.25,2.25Z" transform="translate(-2.25 -2.25)" fill="#f7f7f7"/>
                </svg> */}
            </div>
        </HeaderComponent>
    );
}

export default Content;
