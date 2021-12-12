<script lang="ts">
    import Logo from '@src/common/Log.svelte';
    import IconWrap from '@src/common/IconWrap.svelte';

    import profileImg from '@src/img/profile.png';
    import { onMount } from 'svelte';

    let header:HTMLElement;

    const dom = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="패스_3" data-name="패스 3" d="M0,0V24H24V0ZM14.534,19.59c-.406.078-.534-.171-.534-.384V17.011a1.906,1.906,0,0,0-.55-1.481c1.782-.2,3.654-.875,3.654-3.947a3.086,3.086,0,0,0-.824-2.147A2.87,2.87,0,0,0,16.2,7.319s-.671-.215-2.2.82a7.565,7.565,0,0,0-4.006,0c-1.528-1.035-2.2-.82-2.2-.82A2.879,2.879,0,0,0,7.72,9.435,3.092,3.092,0,0,0,6.9,11.582c0,3.064,1.867,3.751,3.645,3.954a1.7,1.7,0,0,0-.508,1.07A1.7,1.7,0,0,1,7.7,15.94a1.683,1.683,0,0,0-1.227-.825s-.78-.01-.055.487a2.118,2.118,0,0,1,.889,1.17S7.775,18.2,10,17.716V19.2c0,.211-.129.459-.528.385a8,8,0,1,1,5.062,0Z" fill="#333"/></svg>`;

    onMount(() => {
        
        const headerFloat = function(e) {
            const scroll = document.documentElement.scrollTop;
            const offset = this.offsetTop;
            if(scroll >= offset){
                this.classList.remove('header-on-float');
            }else{
                this.classList.add('header-on-float');
            }
        }.bind(header);

        // let scrollOffset = header.offsetTop;
        window.addEventListener('scroll', headerFloat);
    });


</script>

<header bind:this={header} class="header-on-float wrap">
    <div class="header-background">
        <div class="header-background-2 flex-box flex-middle">
            <div class="flex-box flex-middle flex-left">
                <Logo/>
            </div>
            <div class="flex-box flex-middle flex-right flex-fill">
                <IconWrap src={profileImg} alt="프로필 이미지" w={24} h={24} style="margin-right:16px;"/>
                <IconWrap svg={dom} alt="깃허브 이미지" w={24} h={24}/>
            </div>
        </div>
    </div>
</header>

<style>
    header {
        position:sticky;
        top:0;
        width:100%;
        height:60px;
        transition:all 0.5s;
        transition-timing-function:linear;
    }
    header.header-on-float {
        padding:10px;
        height:80px;
    }
    header:not(.header-on-float){
        max-width:100vw;
    }
    header:not(.header-on-float) .header-background-2 {
        max-width:1080px;
        height:100%;
        background:none;
        box-shadow:none;
        padding:0;
    }

    header .header-background {
        background:rgba(242,242,242,0.8);
        backdrop-filter:blur(5px);
        padding:2px;
        width:100%;
        height:100%;
        box-shadow:0 8px 16px rgba(0,0,0,0.1);
    }
    header.header-on-float .header-background {
        border-radius:14px;
    }

    header .header-background-2 {
        width:100%;
        height:100%;
        background:rgba(255,255,255,0.5);
        box-shadow:0 1px 2px rgba(0,0,0,0.1);
        padding:0 16px;

        margin:0 auto;
        max-width:100vw;

        transition:all 0.5s;
        transition-timing-function:linear;
    }
    header.header-on-float .header-background-2 {
        border-radius:12px;
    }
</style>
