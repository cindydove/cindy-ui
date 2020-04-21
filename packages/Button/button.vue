<template>
    <div class="dx-button">
       <slot>按钮</slot>
    </div>
</template>

<script>
    export default {
        name: "dx-button",

    }
</script>

<style scoped>
    .dx-button{
        display: inline-block;
        padding: 3px 6px;
        background:#000;
        color:#fff;
    }
</style>