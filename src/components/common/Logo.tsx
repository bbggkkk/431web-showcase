import styled from "styled-components";

    
const LogoSvg = styled.div `
    svg {
        transition:fill 0.4s;
        fill:${({theme}) => theme.color.text};
    }
`

function Logo(props:any) {

    return (
        <LogoSvg>
            <svg className={props.className ? props.className : false} id="Logo" xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="0 0 48 16">
                <path id="_4" data-name="4" d="M0,0V16H16Z"/>
                <rect id="_31" data-name="31" width="16" height="4" transform="translate(16)"/>
                <rect id="_32" data-name="32" width="16" height="4" transform="translate(16 6)"/>
                <rect id="_33" data-name="33" width="16" height="4" transform="translate(16 12)"/>
                <path id="Round" d="M136,0h0a8,8,0,0,0-8,8h0a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8h0A8,8,0,0,0,136,0Zm4,8a4,4,0,0,1-8,0h0a4,4,0,1,1,8,0Z" transform="translate(-96)"/>
                <rect id="Dot" width="2" height="2" rx="1" transform="translate(46 14)"/>
            </svg>
        </LogoSvg>
    );
}

export default Logo;