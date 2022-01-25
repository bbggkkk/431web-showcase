import styled            from 'styled-components';

const PhoneComponent = styled.div<{width:string, height:string}>`
padding:2px;
border-radius:60px;
background:#C3C6CD;
width:${({width}) => width};
height:${({height}) => height};
box-sizing:border-box;

.frame-2 {
    transition:background 0.4s;
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:14px;
    border-radius:58px;
    background:${({theme}) => theme.mode === 'dark' ? '#0E0D12' : '#EBECEE'};

    .screen {
        transition:background 0.4s;
        width:100%;
        height:100%;
        box-sizing:border-box;
        border-radius:44px;
        background:${({theme}) => theme.mode === 'dark' ? '#2F3539' : '#fff'};
    }
}


@media screen and (min-width:740px) and (max-width:1023px) {
    .frame-2 {
        padding:20px;

        .screen {
            border-radius:38px;
        }
    }
}
@media screen and (min-width:1024px) and (max-width:1279px) {
    .frame-2 {
        padding:20px;

        .screen {
            border-radius:38px;
        }
    }
}
@media screen and (min-width:1280px) {
    border-radius:16px;
    .frame-2 {
        padding:20px;
        border-radius:14px;

        .screen {
            border-radius:0px;
        }
    }
}
`;

function Phone({width = '360px', height = '680px', ...props}){

    return (
        <PhoneComponent className="phone-component" width={width} height={height}>
            <div className="frame-2">
                <div className="screen">
                    {props.children}
                </div>
            </div>
        </PhoneComponent>
    )
}

export default Phone;