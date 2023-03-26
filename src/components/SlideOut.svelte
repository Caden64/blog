<script>
    import { fade } from 'svelte/transition'
    const fadeIn = {
        delay:100,
        duration: 200
    }
    const fadeOut = {
        delay: 0,
        duration: 100
    }
    import { isFlyoutOpen } from "../sideFlyout";
</script>
<nav class:expanded={$isFlyoutOpen}>
    {#if $isFlyoutOpen}
        <div class="relative mt-2">
            <div class="absolute top-0 right-0">
                <div class="flex flex-col gap-y-2 items-center text-lg">
                    <div class="mr-4">
                        <a in:fade="{fadeIn}" out:fade="{fadeOut}" href="/" class="bg-pastel-gradient-blue-md-500 px-2 rounded-full hover:bg-pastel-gradient-blue-600 hover:text-white">Home</a>
                    </div>
                    <div class="mr-4">
                        <a in:fade="{fadeIn}" out:fade="{fadeOut}" href="github.com/winnietthepooh" class="bg-pastel-gradient-blue-md-500 px-2 rounded-full hover:bg-pastel-gradient-blue-600 hover:text-white">Github</a>
                    </div>
                    <div class="mr-4 flex">
                        <a in:fade="{fadeIn}" out:fade="{fadeOut}" href="/projects" class="bg-pastel-gradient-blue-md-500 px-2 rounded-full hover:bg-pastel-gradient-blue-600 hover:text-white">Projects</a>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</nav>