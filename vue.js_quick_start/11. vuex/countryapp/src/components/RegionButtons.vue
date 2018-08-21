<template>
    <div>
        <button class="region" v-for="region in regions" :key="region" v-bind:class="isSelected(region)" @click="changeRegion({region: region})">
            {{ region }}
        </button>
    </div>
</template>

<script>
import Constant from '../Constant';
import {mapMutations } from 'vuex';

export default {
    name: "RegionButtons",
    computed: {
        regions() {
            return this.$store.getters.regions;
        },
        currentRegion() {
            return this.$store.getters.currentRegion;
        }
    },
    methods: {
        isSelected(region) {
            if (region == this.currentRegion) {
                return {
                    selected: true
                };
            } else {
                return {
                    selected: false
                }
            }
        },
        ...mapMutations([
            Constant.CHANGE_REGION
        ])
    }    
}
</script>
