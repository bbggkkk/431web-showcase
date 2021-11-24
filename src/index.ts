import { createKeyframes, gotoAndStop } from "./createKeyframes";
import { createGesture } from "./elementGesture";
import { getCSSAttribute } from "./inlineAnimationParser";

const box = document.querySelector('#box') as HTMLElement;
// const [updator, getKeyframe] = createKeyframes(getCSSAttribute(box),100);
// let   animation = updator();

const dragFunction = (r:any, e:TouchEvent|MouseEvent, origin:any) => {
    let [originX, originY] = origin === undefined ? [0, 0] : origin;
    const [x, y]   = r.move;
    [originX, originY] = [originX+x, originY+y];
    gotoAndStop(box, [{transform:`translate(calc(${originX}px), calc(${originY}px))`}], 0);
    return [originX, originY];
}

const [on, off] = createGesture(box, {
    dragStart   : dragFunction,
    drag        : dragFunction,
    dragEnd     : dragFunction,
});
on();
