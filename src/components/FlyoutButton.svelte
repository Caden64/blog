<script>
    import {isFlyoutOpen} from "../sideFlyout";
</script>
<button on:click={() => {isFlyoutOpen.set(!$isFlyoutOpen)}} class="bg-transparent border-0">
    {#if $isFlyoutOpen}
        <img src="/assets/memoji.png" width="45" class="-rotate-45"/>
    {/if}
    {#if !$isFlyoutOpen}
        <img src="/assets/memoji.png" width="45"/>
    {/if}
</button>
