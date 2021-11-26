import { createKeyframes, gotoAndStop } from "./createKeyframes";
import { createGesture } from "./elementGesture";
import { getCSSAttribute } from "./inlineAnimationParser";

const box = document.querySelectorAll('.box') as NodeList;
const [updator, getKeyframe] = createKeyframes({
    '0' : {
        backgroundColor:'#1167bd'
    },
    '100' : {
        backgroundColor:'#ffc72c'
    }
},() => Math.round(Math.sqrt(Math.pow(document.documentElement.offsetHeight/2,2) + Math.pow(document.documentElement.offsetWidth/2,2)))-200 );
// let   animation = updator();
const dragFunction = async function(r:any, e:TouchEvent|MouseEvent, origin:any) {
    // console.log(r.type, this)
    // console.log(origin);
    let [originX, originY] = origin === undefined ? [0, 0] : origin;
    let animation = origin === undefined ? await updator() : origin[2];

    const [x, y]   = r.move;
    const [ex, ey] = r.position;
    [originX, originY] = [originX+x, originY+y];
    [...document.querySelectorAll('div')].forEach(item => item.style.zIndex = '0');
    this.style.zIndex = '1';
    gotoAndStop(this, [{transform:`translate(calc(${originX}px), calc(${originY}px))`}], 0);

    const ani = animation[Math.round(Math.sqrt(Math.pow(originX/2,2) + Math.pow(originY/2,2)))];
    ani && gotoAndStop(this, [ani], 0);
    // console.log(origin, [originX, originY, animation]);
    return [originX, originY, animation];
}

box.forEach(item => {
    const [on, off] = createGesture(item as HTMLElement, {
        dragStart   : dragFunction,
        drag        : dragFunction,
        dragEnd     : dragFunction,
    });
    on();
})