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
            border-radius:58px;
            background:${({theme}) => theme.mode === 'dark' ? '#0E0D12' : '#EBECEE'};

            .screen {
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

    return (
        <PhoneComponent className="phone-component">
            <div className="frame-2">
                <div className="screen">
                    {props.children}
                </div>
            </div>
        </PhoneComponent>
    )
}

export default Phone;