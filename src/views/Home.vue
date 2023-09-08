<template>
<AppHeader />
<h1>Hello {{name}} Wellcome to Add Resturent</h1>

<table id="resturent-list" border="1">
    <thead>
        <tr>
            <th>Resturent Name</th>
            <th>Resturent Address</th>
            <th>Resturent Contact</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in Resturents" :key="item">
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <router-link :to="'/Update/'+item.id"><button>Update</button></router-link>
                <button @click="deleteResturent(item.id)">Delete</button>
            </td>

        </tr>
    </tbody>

</table>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';
export default {
    name: "SignUp",
    components: {
        AppHeader
    },

    data() {
        return {
            name: '',
            Resturents: []
        }
    },
 
    methods: {
        async deleteResturent(id) {
            let DeleteData = await axios.delete('http://localhost:8000/Resturent/' + id)
            if (DeleteData.status == 200) {
                this.loadData()

            }

        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name
            // console.log(this.name)

            if (user == null) {
                this.$router.push({
                    name: "SignUp"
                });
            }
            let resturentData = await axios.get('http://localhost:8000/Resturent')
            this.Resturents = resturentData.data
        }
    },
    mounted() {
        this.loadData()
    },
}
</script>

<style>
#resturent-list {
    width: 70%;
    margin: auto;

}

#resturent-list tr td {
    width: 160px;
    padding: 10px;
}
</style>
