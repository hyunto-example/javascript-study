<template>
    <div>
        <button :class="[$style.hand, $style.text]">CSS Module을 적용한 버튼</button>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$style);
    }
}
</script>

<style module>
.hand {
    cursor: pointer;
    background-color: purple;
    color: yellow;
}
.hand:hover {
    background-color: darkgreen;
}
.text {
    font-size: 12px;
}
</style>
