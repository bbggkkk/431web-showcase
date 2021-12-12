<script type="ts">
    import Header from "@src/common/Header.svelte";
    import { ScrollAnimation } from "@src/library/scroll-animation/scrollAnimation";
    import { onMount } from "svelte";

    onMount(() => {
        const scrollAnimation = new ScrollAnimation(window, '.animation');
    });

</script>

<!-- <Header /> -->
<div class="wrap">
    <main>
        <div    class="animation a1"
                data-animation-bind="main .animator"
                data-index="0">0</div>
        <div    class="animation a2"
                data-animation-bind="main .animator"
                data-index="1">1</div>

        <div class="hide">
            <p  class="animator"    data-animation-start="<$ return this.getAttribute('data-index') * 20; $>"
                                    data-animation-end="<$ return (this.getAttribute('data-index')+1) * 20; $>"
                                    data-animation-0="color:red;"
                                    data-animation-100="color:blue;"></p>
        </div>
    </main>
</div>


<style>
    main {
        height:200vh;
    }
</style>