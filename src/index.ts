import { createKeyframes, gotoAndStop } from "./createKeyframes";
import { createGesture } from "./elementGesture";
import { getCSSAttribute } from "./inlineAnimationParser";

interface animationValue {
    [index:string] : number|string|Function
}


const box = document.querySelectorAll('.card-dragbar') as NodeList;


const dragFunction = async function(r:any, e:TouchEvent|MouseEvent, origin:any) {
    let [originX, originY] = (origin === undefined) ? [0, 0] : origin;
    
    const [x, y]   = r.move;
    [originX, originY] = [originX+x, originY+y];
    gotoAndStop(this, [{transform:`translate(0, calc(${originY}px))`}], 0);
    // gotoAndStop(this, [{transform:`translate(calc(${originX}px), calc(${originY}px))`}], 0);

    return [originX, originY];
}

box.forEach(async $item => {
    const eleList = Array.from(($item as HTMLElement).closest('.plate').querySelectorAll(':scope [data-animation-0]'));
    eleList.push($item as HTMLElement);
    const aniList = eleList.map((item:HTMLElement) => {
        const tmp = createKeyframes(getCSSAttribute(item as HTMLElement), () => Math.round(document.documentElement.offsetHeight/1.25));
        gotoAndStop(item as HTMLElement, [tmp[1](0)], 0);
        return tmp;
    });
    let anis = [];
    aniList.forEach(async (item, idx) => {
        const ob = new ResizeObserver(async () => {
            anis[idx] = await item[0]();
        });
        ob.observe(document.documentElement);
    } );

    const [on, off] = createGesture($item as HTMLElement, {
        dragStart   : function(r:any, e:TouchEvent|MouseEvent, origin:any) {
            this.closest('.box').classList.remove('transition');
            anis.forEach((item, idx:number) => {
                eleList[idx].classList.remove('transition');
                let [originX, originY] = origin === undefined ? [0, 0] : origin;
                const [x, y]   = r.move;
                [originX, originY] = [originX+x, originY+y];
                if(Math.round(originY) > 0){
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, 0);
                }else if(Math.abs(Math.round(originY)) > item.length){
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, item.length - 1);
                }else{
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, Math.abs(Math.round(originY)));
                }
            });
            return dragFunction.call(this.closest('.box'), r, e, origin);
        },
        drag        : function(r:any, e:TouchEvent|MouseEvent, origin:any) {

            // console.log(r.direction);
            anis.forEach((item, idx:number) => {
                let [originX, originY] = origin === undefined ? [0, 0] : origin;
                const [x, y]   = r.move;
                [originX, originY] = [originX+x, originY+y];
                if(Math.round(originY) > 0){
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, 0);
                }else if(Math.abs(Math.round(originY)) > item.length){
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, item.length - 1);
                }else{
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, Math.abs(Math.round(originY)));
                }
            });
            return dragFunction.call(this.closest('.box'), r, e, origin);
        },
        dragEnd     : function(r:any, e:TouchEvent|MouseEvent, origin:any) {
            // console.log(r.direction);
            const dir = r.direction[1];

            off();

            this.closest('.box').classList.add('transition');
            gotoAndStop(this.closest('.box'), [{transform:''}], 0);
            if(dir < 0) {
                this.closest('.box').classList.add('open');
            }else{
                this.closest('.box').classList.remove('open');
            }
            
            anis.forEach((item, idx:number) => {
                eleList[idx].classList.add('transition');
                if(dir < 0){
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, item.length - 1);
                }else{
                    gotoAndStop(eleList[idx] as HTMLElement, item as any, 0);
                }
            });
            setTimeout(on, 400);
            return dir < 0 ? [0, -document.documentElement.offsetHeight + 96] : [0, 0];
        },
    });
    on();
})