import { createKeyframes, gotoAndStop } from "./createKeyframes";
import { createGesture } from "./elementGesture";
import { getCSSAttribute } from "./inlineAnimationParser";

const box = document.querySelector('#box') as HTMLElement;
// const [updator, getKeyframe] = createKeyframes(getCSSAttribute(box),100);
// let   animation = updator();

const [on, off] = createGesture(box, {
    dragStart : async (r:any, e:TouchEvent|MouseEvent) => {
        const [x, y] = r.position;
        gotoAndStop(box, [{transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`}], 0);
    },
});
on();
