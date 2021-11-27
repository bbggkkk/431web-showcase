import { createKeyframes, gotoAndStop } from "./createKeyframes";
import { createGesture } from "./elementGesture";
import { getCSSAttribute } from "./inlineAnimationParser";

interface animationValue {
    [index:string] : number|string|Function
}


const box = document.querySelectorAll('.box') as NodeList;


const dragFunction = async function(r:any, e:TouchEvent|MouseEvent, origin:any) {
    let [originX, originY] = origin === undefined ? [0, 0] : origin;
    
    const [x, y]   = r.move;
    [originX, originY] = [originX+x, originY+y];
    box.forEach(item => (item as HTMLElement).style.zIndex = '0');
    this.style.zIndex = '1';
    gotoAndStop(this, [{transform:`translate(0, calc(${originY}px))`}], 0);
    // gotoAndStop(this, [{transform:`translate(calc(${originX}px), calc(${originY}px))`}], 0);

    return [originX, originY];
}

box.forEach(async $item => {
    const eleList = Array.from(($item as HTMLElement).querySelectorAll(':scope [data-animation-0]'));
    eleList.push($item as HTMLElement);
    const aniList = eleList.map((item:HTMLElement) => {
        const tmp = createKeyframes(getCSSAttribute(item as HTMLElement), () => Math.round(document.documentElement.offsetHeight));
        gotoAndStop(item as HTMLElement, [tmp[1](0)], 0);
        return tmp;
    });
    let anis = [];
    aniList.forEach(async item => anis.push(await item[0]()) );

    const [on, off] = createGesture($item as HTMLElement, {
        dragStart   : function(r:any, e:TouchEvent|MouseEvent, origin:any) {
            // console.log(anis);
            anis.forEach((item, idx:number) => {
                let [originX, originY] = origin === undefined ? [0, 0] : origin;
                const [x, y]   = r.move;
                [originX, originY] = [originX+x, originY+y];
                if(Math.abs(Math.round(originY)) >= item.length || Math.round(originY) > 0) return;
                // console.log(Math.round(originY),item[Math.round(originY)]);
                gotoAndStop(eleList[idx] as HTMLElement, item as any, Math.abs(Math.round(originY)));
            });
            return dragFunction.call(this, r, e, origin);
        },
        drag        : function(r:any, e:TouchEvent|MouseEvent, origin:any) {
            anis.forEach((item, idx:number) => {
                let [originX, originY] = origin === undefined ? [0, 0] : origin;
                const [x, y]   = r.move;
                [originX, originY] = [originX+x, originY+y];
                if(Math.abs(Math.round(originY)) >= item.length || Math.round(originY) > 0) return;
                // console.log(Math.round(originY),item[Math.round(originY)]);
                gotoAndStop(eleList[idx] as HTMLElement, item as any, Math.abs(Math.round(originY)));
            });
            return dragFunction.call(this, r, e, origin);
        },
        dragEnd     : function(r:any, e:TouchEvent|MouseEvent, origin:any) {
            
            return dragFunction.call(this, r, e, origin);
        },
    });
    on();
})