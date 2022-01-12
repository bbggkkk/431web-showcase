import styled            from 'styled-components';
import { theme }         from 'assets/style/theme';
import { CSSProperties } from 'styled-components';

interface Buttoned extends CSSProperties {
    size : string;
}

function Button(props){
    const size          = props.size        ? props.size        : 'basic';
    const background    = props.background  ? props.background  : 'default'; //theme.color['base-ui'];
    const color         = props.color       ? props.color       : 'default'; //theme.color.tertiary;
    const Buttoned      = styled.button<Buttoned>`
        font-family:inherit;
        border:0;
        border-radius:${({size}) => size ==='small' ? '9999px' : '16px'};
        padding:${({size})=>size === 'small' ? '4px 12px' : '12px 16px'};
        background:${({theme})=>background==='default'?theme.color['base-ui']:background};
        color:${({color})=>color};
        font-size:${({size})=>size === 'small' ? theme.typo['size-ui-2'] : theme.typo['size-subtitle-1']};
        font-weight:${theme.typo['weight-bold']};
    ` 
    return (
        <Buttoned size={size} background={background} color={color}>{props.children}</Buttoned>
    )
}

export default Button;