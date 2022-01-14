import styled, { DefaultTheme }            from 'styled-components';
import { CSSProperties } from 'styled-components';

interface Buttoned extends CSSProperties {
    size : string;
}

function Button(props){
    const size          = props.size        ? props.size        : 'basic';
    const type          = props.type        ? props.type        : 'basic';
    const Buttoned      = styled.button<Buttoned>`
        font-family:inherit;
        -webkit-tap-highlight-color:transparent;
        border:0;
        border-radius:${({size}) => size ==='small' ? '9999px' : '16px'};
        padding:${({size})=>size === 'small' ? '4px 12px' : '12px 16px'};
        background:${({theme})=>getBackgroundColor(type, theme)};
        color:${({theme})=>getColor(type, theme)};
        font-size:${({size, theme})=>size === 'small' ? theme.typo['size-ui-2'] : theme.typo['size-body-1']};
        font-weight:${({theme}) => theme.typo['weight-bold']};
        position:relative;
        overflow:hidden;
        cursor:pointer;

        display:flex;
        gap:8px;
        align-items:center;
        user-select:none;
        transform:translate3d(0,0,0);

        &:before {
            content:'';
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:#fff;
            transition:opacity 0.4s, background 0.1s;
            opacity:0;
        }
        &:hover:before {
            opacity:0.2;
        }

        &:active:before {
            background:#000;
        }
    ` 
    return (
        <Buttoned size={size} type={type}>{props.children}</Buttoned>
    )
}

function getBackgroundColor(type:string, theme:DefaultTheme){
    switch (type) {
        case 'basic' : return theme.color['base-ui']
        case 'on'    : return theme.color.primary;
    }
}

function getColor(type:string, theme:DefaultTheme){
    switch (type) {
        case 'basic' : return '#282B30';
        case 'on'    : return '#fff';
    }
}

export default Button;