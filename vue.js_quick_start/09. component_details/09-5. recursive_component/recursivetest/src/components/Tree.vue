<template>
    <ul>
        <li v-for="s in subs" v-bind:class="s.type" v-bind:key="s.name">
            {{ s.name }}
            <tree :subs="s.subs"></tree>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'tree',
    props: [
        'subs'
    ]
}
</script>

<style scoped>

</style>
