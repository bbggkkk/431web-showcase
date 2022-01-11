import { useRef, useEffect }        from 'react';
import styled                       from 'styled-components';
import { theme }                    from 'assets/style/theme';

import { ScrollAnimation }          from 'assets/library/scrollAnimation';

const PlaceHolder = styled.div`
    width:100%;
    height:150vh;
`
const TitleComponent = styled.div`
    width:100%;
    height:150vh;
    position:absolute;
    top:0;

    .title-wrap {
        width:100%;
        height:calc(100% / 3 * 2);
        box-sizing:border-box;

        position:sticky;
        top:0;

        .title-box {
            width:100%;
            height:100%;
            overflow:hidden;

            .content-box {
                padding:32px;
                position:absolute;
                top:0; left:0; right:0; bottom:0;
            }
        }
    }
`

function Title() {
    const target = useRef();
    useEffect(()=>{
        const scrollAnimation = new ScrollAnimation(window, '.main-title .box')
    },[]);
    return (
        <>
            <PlaceHolder/>
            <TitleComponent className="main-title">
                <div    className='title-wrap box' ref={target}
                        data-animation-start="0"
                        data-animation-end="<$ return parseInt(window.innerHeight/2); $>"
                        data-animation-0="padding:0px;"
                        data-animation-100="padding:8px;">
                    <div    className='title-box box'
                            data-animation-start="0"
                            data-animation-end="<$ return parseInt(window.innerHeight/2); $>"
                            data-animation-0="border-radius:0px;"
                            data-animation-100="border-radius:48px;">
                        <img src="https://images.unsplash.com/photo-1641765770550-e2a1e9a61082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="title"/>
                        <div className="content-box">
                            <h1 style={{fontWeight:900}}>431Web</h1>
                        </div>
                    </div>
                </div>
            </TitleComponent>
        </>
    );
}

export default Title;
