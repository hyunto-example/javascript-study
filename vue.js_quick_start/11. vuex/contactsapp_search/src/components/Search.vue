<template>
    <div>
        <p>
        이름 : <input type="text" v-model.trim="name" placeholder="두글자 이상 입력 후 엔터!" @keyup.enter="keyupEvent">
        </p>    

        <div>
            <div>최근 검색이름 리스트 : </div>
            <div class="box">
                <div class="item" v-for="{keyword, index} in keywordlist" :key="index">
                    {{ keyword }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Constant from '../Constant';
import { mapState } from 'vuex';

export default {
    name: 'search',
    data: function() {
        return {
            name: ''
        };
    },
    computed: mapState([
        'keywordlist'
    ]),
    methods: {
        keyupEvent: function(e) {
            var val = e.target.value;
            
            if (val.length >= 2) {
                this.$store.dispatch(Constant.SEARCH_CONTACT, { name: val });
                this.name = "";
            } else {
                this.$store.dispatch(Constant.SEARCH_CONTACT, { name: '' });
            }
        }
    }
}
</script>
