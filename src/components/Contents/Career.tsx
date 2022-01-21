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
                        <p>HI</p>
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
    background:#f2f2f2;
`
function CareerItem(props){
    
    return (
        <CareerItemComponent>
            {props.children}
        </CareerItemComponent>
    )
}