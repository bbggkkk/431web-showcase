import styled from "styled-components";

const StackComponent = styled.div`
    width:100%;

    .wrapper {
        ${({theme}) => theme.basicWidth};
        .spacer {
            padding:0 24px;
            display:grid;
            gap:8px;
            grid-template-columns:1fr 1fr;


            .stack-name {
                position:absolute;
                top:0;
                left:0;
                padding:24px 0 0 16px;
            }

            .stack-javascript {
                position:absolute;
                top:0; left:0;
                width:100%;
                height:100%;
                background:#f7df1e;
                
                .stack-name {
                    color:${({theme}) => theme.color.tertiary};
                }
                img {
                    width:100%;
                    height:100%;
                    object-fit:contain;
                    object-position:right bottom;
                }
            }

            .stack-html {
                position:absolute;
                top:0; left:0;
                width:100%;
                height:100%;
                
                .stack-name {
                    // color:${({theme}) => theme.color.tertiary};
                }
                img {
                    width:100%;
                    height:100%;
                    padding:60px 24px 24px 24px;
                    object-fit:contain;
                }
            }
        }
    }

`

function Stack(){
    return (
        <StackComponent>
            <div className="wrapper">
                <div className="spacer">
                    <StackItem>
                        <div className="stack-javascript">
                            <p className="t-title-3 stack-name">Javascript</p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"/>
                        </div>
                    </StackItem>
                    <StackItem>
                        <div className="stack-html">
                            <p className="t-title-3 stack-name">HTML5</p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
                        </div>
                    </StackItem>
                </div>
            </div>
        </StackComponent>
    )
}

export default Stack;



const StackItemComponent = styled.div`
    border-radius:32px;
    padding:16px;
    background:${({theme}) => theme.mode === 'dark' ? theme.typo['color-800'] : theme.typo['color-100']};
    transition:background 0.4s;
    height:240px;
    position:relative;
    overflow:hidden;
    transform:translate3d(0,0,0);
`

function StackItem(props){
    return (
        <StackItemComponent>
            {props.children}
        </StackItemComponent>
    )
}