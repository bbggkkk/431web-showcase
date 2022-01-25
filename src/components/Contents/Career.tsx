import styled from "styled-components";

const CareerComponent = styled.section`
    width:100%;
    height:200vh;

    .wrapper {
        ${({theme}) => theme.basicWidth};

        .spacer {
            padding:0 24px;
        }
    }
`

function Career(){

    return (
        <CareerComponent>
            <div className="wrapper">
                <div className="spacer">
                    <CareerItem>
                        <p>널리소프트</p>
                        <p>2020.02~</p>
                    </CareerItem>
                </div>
            </div>
        </CareerComponent>
    )
}

export default Career;


const CareerItemComponent = styled.div`
    border-radius:32px;
    padding:16px;
    background:${({theme}) => theme.mode === 'dark' ? theme.typo['color-800'] : theme.typo['color-100']};
    transition:background 0.4s;
`
function CareerItem(props){
    
    return (
        <CareerItemComponent>
            {props.children}
        </CareerItemComponent>
    )
}