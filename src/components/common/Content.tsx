import { theme } from 'assets/style/theme';
import styled from 'styled-components';

const ContentComponent = styled.div< { backgroundColor : string } >`
    border-radius:32px;
    position:relative;
    background:${({backgroundColor}) => !backgroundColor ? theme.color['tertiary-500'] : backgroundColor};
    width:100%;
    height:100%;
    overflow:hidden;

    &>div {
        position:absolute;
        top:0; left:0; right:0; bottom:0;
    }
    &:after {
        padding-top:min(100%,240px);
        display:block;
        content: "";
    }
    &:nth-of-type(1){
        border-radius:48px;
        grid-column:1/3;
        grid-row:1/3;
    }
    &:nth-of-type(2){
        border-radius:48px;
        grid-column:1/3;
        grid-row:3/5;
    }
`

function Content(props:any) {
    return (
        <ContentComponent backgroundColor={props.backgroundColor}>
            <div>
                {props.children}
            </div>
        </ContentComponent>
    );
}

export default Content;
