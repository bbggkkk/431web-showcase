import { ScrollAnimation } from "assets/library/scrollAnimation";
import Button from "components/common/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SectionWrap = styled.section`
    width:100%;
    // height:100vh;
    height:auto;
    ${({theme}) => theme.basicWidth};
    padding:25vh 0 15vh;
    position:relative;
    z-index:0;
    overflow:hidden;
`

const SectionTitle = styled.p`
    padding:0 24px;
    margin-bottom:128px;
    font-weight:${({theme}) => theme.typo['weight-black']};
    font-size:${({theme}) => theme.typo['size-head-2']};
`

const ContextP = styled.p`
    padding:0 24px;
    font-size:${({theme}) => theme.typo['size-title-3']};
    font-weight:${({theme}) => theme.typo['weight-bold']};

    > a {
        display:inline-block;
        margin-top:16px;
    }
`

const MemoWrap = styled.ul`
    display:grid;
    gap:8px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    padding:24px;
    flex-wrap:wrap;
`
const MemoItem = styled.li`
    cursor:pointer;
    border-radius:24px;
    transform:translate3d(0,0,0);
    border:1px solid ${props => props.theme.mode === 'dark' ? props.theme.color['tertiary-700'] : props.theme.color['tertiary-50']};
    background:${props => props.theme.color.background};
    width:100%;
    position:relative;
    overflow:hidden;
    user-select:none;

    &:before {
        content:''; display:block; padding-bottom:100%;
    }
`

const MemoDetail = styled.div`
    position:absolute;
    top:0; left:0; right:0; bottom:0;

    > .context {
        font-size:12px;
        opacity:0.5;
    }
    > .title {
        position:absolute;
        bottom:0;
        width:100%;
        padding:24px;
        background:${props => props.theme.mode === 'dark' ? props.theme.color['tertiary-700'] : props.theme.color['tertiary-50']};
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        backdrop-filter:blur(4px);
    }
`

const context = `function Section431Memo (){
    return (
        <SectionWrap>
            <MemoItem className="menu-item">
                <MemoDetail>
                    <pre className="context">{context}</pre>
                    <div className="title">{title}</div>
                </MemoDetail>
            </MemoItem>
        </SectionWrap>
    )
}`;

function Section431Memo (){
    const [isRun, setRun] = useState(true);
    useEffect(() => {
        if(isRun){
            new ScrollAnimation(window, SectionTitle);
            new ScrollAnimation(window, MemoWrap);
            setRun(false);
        }
        // new ScrollAnimation(window, '.section-2');
    },[]);
    return (
        <SectionWrap>
            <SectionTitle   data-animation-start={`<$ return Math.round(this.closest('${SectionWrap}').offsetTop - window.outerHeight); $>`}
                            data-animation-end={`<$ return Math.round(this.closest('${SectionWrap}').offsetTop); $>`}
                            data-animation-0="opacity:0;"
                            data-animation-100="opacity:1;">
                431Memo
            </SectionTitle>
            <MemoWrap       data-animation-start={`<$ return Math.round(this.closest('${SectionWrap}').offsetTop - window.outerHeight); $>`}
                            data-animation-end={`<$ return Math.round(this.closest('${SectionWrap}').offsetTop + window.outerHeight); $>`}
                            data-animation-0="transform:translateY(25%);"
                            data-animation-100="transform:translateY(-25%);">
                <MemoItem className="menu-item">
                    <MemoDetail>
                        <pre className="context"><br/><br/><br/>구글로 로그인 할 수 있어요!</pre>
                        <div className="title">인터넷으로 연동되는</div>
                    </MemoDetail>
                </MemoItem>
                <MemoItem className="menu-item">
                    <MemoDetail>
                        <pre className="context">{context}</pre>
                        <div className="title">간단한 메모를</div>
                    </MemoDetail>
                </MemoItem>
                <MemoItem className="menu-item">
                    <MemoDetail>
                        <pre className="context"><br/><br/>일상에서 간단하게 메모를 남겨요</pre>
                        <div className="title">남길 수 있죠</div>
                    </MemoDetail>
                </MemoItem>
            </MemoWrap>
            <ContextP>
                <p>431Memo</p>
                <p>사용하러 가기</p>
                <a href="https://memo.431web.com" target="_blank" title="431Memo">
                    <Button type="on">열기</Button>
                </a>
            </ContextP>
        </SectionWrap>
    )
}

export default Section431Memo;