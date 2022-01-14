import { theme } from 'assets/style/theme';
import styled            from 'styled-components';

function Phone({width = '360px', height = '680px', ...props}){

    const PhoneComponent = styled.div`
        padding:2px;
        border-radius:60px;
        background:#C3C6CD;
        width:${width};
        height:${height};
        box-sizing:border-box;

        .frame-2 {
            width:100%;
            height:100%;
            box-sizing:border-box;
            padding:14px;
            border-radius:59px;
            background:${({theme}) => theme.mode === 'dark' ? '#0E0D12' : '#EBECEE'};

            .screen {
                width:100%;
                height:100%;
                box-sizing:border-box;
                border-radius:44px;
                background:${({theme}) => theme.mode === 'dark' ? '#2F3539' : '#fff'};
            }
        }
    `;

    return (
        <PhoneComponent>
            <div className="frame-2">
                <div className="screen">
                    {props.children}
                </div>
            </div>
        </PhoneComponent>
    )
}

export default Phone;