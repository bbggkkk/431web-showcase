import { header } from '@src/components/header';
import { ScrollAnimation } from "./scrollAnimation";
import '@src/function/plateBox'; //하단 설명상자 이벤트 추가


document.body.append(header);

const animation = new ScrollAnimation(document.querySelector('.card-content-box') as HTMLElement, '.card-content-box .scroll-animation');