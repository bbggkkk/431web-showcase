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
    
    .main-title {
        width:100%;
        height:50vh;
        position:fixed;
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
    
                    h1 {
                        position:absolute;
                        top:25%;
                        left:50%;
                        transform:translate(-50%, -50%);
                        font-size:${theme.typo['size-title-1']};
                        font-weight:${theme.typo['weight-black']};
                        white-space:nowrap;
                    }
                }
            }
        }
    }

`

function Title() {
    const target = useRef();
    useEffect(()=>{
        const scrollAnimation = new ScrollAnimation(window, '.main-wrap .box')
    },[]);
    return (
        <TitleComponent className="main-wrap">
            <PlaceHolder/>
            <div className="main-title box"
                        data-animation-start="0"
                        data-animation-end="300"
                        data-animation-0="transform:translate(0%, 0px);"
                        data-animation-50="transform:translate(0%, 100px);"
                        data-animation-100="transform:translate(0%, 200px);"
                        data-animation-bezier="1,0,0,1">
                <div    className='title-wrap ' ref={target}
                        data-animation-start="0"
                        data-animation-end="<$ return parseInt(window.outerHeight/2); $>"
                        data-animation-0="padding:0px;"
                        data-animation-100="padding:8px;">
                    <div    className='title-box '
                            data-animation-start="0"
                            data-animation-end="<$ return parseInt(window.outerHeight/2); $>"
                            data-animation-0="border-radius:0px;"
                            data-animation-100="border-radius:48px;">
                        <img src="https://images.unsplash.com/photo-1641763773957-35922086117c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="title"/>
                        <div className="content-box">
                            <h1>
                                <p>431Web</p>
                                <p>포트폴리오 입니다.</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </TitleComponent>
    );
}

export default Title;
