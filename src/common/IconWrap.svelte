<script lang="ts">
import { onMount } from "svelte";
    export let container = undefined;

    export let src = undefined;
    export let svg = undefined;
    export let alt: string;
    export let w  : number;
    export let h  : number;
    export let style = '';

    onMount(() => {
        let imgDom;
        if(src !== undefined){
            imgDom = document.createElement('img');
            imgDom.src = src;
            imgDom.alt = alt;
        }else if(svg !== undefined){
            const tmp = document.createElement('div');
            tmp.innerHTML = svg;
            imgDom = tmp.querySelector('svg');
        }
        imgDom.classList.add('img');
        container.replaceWith(imgDom);
    });

</script>

<div class="icon-wrapper" style="width:{w}px; height:{h}px; {style}">
    <div bind:this={container} class="img"></div>
</div>

<style>
    .icon-wrapper {
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:25%;
        overflow:hidden;
        position:relative;
    }
    .icon-wrapper::before {
        content:'';
        padding-top:100%;
        display:block;
    }
    .icon-wrapper .img {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
</style>
