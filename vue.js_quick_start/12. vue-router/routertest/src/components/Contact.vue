<template>
    <div>
        <h1>Contact</h1>
        <div class="box" v-for="c in contacts" :key="c.no">
            <router-link v-bind:to="'/contacts/' + c.no">{{ c.name }}</router-link>
        </div>
    </div>
</template>

<script>
import contactlist from '../ContactList';

export default {
    name: "contact",
    data: function() {
        return {
            contacts: contactlist.contacts
        };
    }
}
</script>