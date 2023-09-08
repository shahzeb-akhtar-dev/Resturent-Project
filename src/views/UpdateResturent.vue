<template>
<div>
    <AppHeader />
    <form class="add">
        <input type="text" name="name" placeholder="Update Resturent Name" v-model="Resturent.name">
        <input type="text" name="address" placeholder="Update Resturent Address" v-model="Resturent.address">
        <input type="text" name="contact" placeholder="Update Resturent Contact" v-model="Resturent.contact">
        <button type="button" @click="update()">Update Resturent</button>
    </form>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';
export default {
    name: 'UpdateResturent',
    components: {
        AppHeader
    },

    data() {
        return {
            Resturent: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },

    methods: {
        async update() {
            let input_name = this.Resturent.name.toLowerCase()
            let input_address = this.Resturent.address.toLowerCase()
            let input_contact = this.Resturent.contact

            let validator = await axios.get(`http://localhost:8000/Resturent?name=${input_name}&&address=${input_address}`)

            if (validator.data[0]) {
                
                let apiname = validator.data[0].name
                console.log(apiname)
                let apiaddress = validator.data[0].address
                console.log(apiaddress)
                if(input_name==apiname && input_address==apiaddress){
                    alert('Match')
                }
                


            } else {
                if (input_name == null && input_address == null && input_contact == null) {
                    alert('Plese fill the form')
                } else {

                    await axios.put("http://localhost:8000/Resturent/" + this.$route.params.id, {
                        name: input_name,
                        address: input_address,
                        contact: input_contact
                    })
                }
            }

            //  console.log(result)

        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");

        if (user == null) {
            this.$router.push({
                name: "SignUp"
            });

        }
        let result = await axios.get("http://localhost:8000/Resturent/" + this.$route.params.id)

        this.Resturent = result.data

    }
}
</script>

<style>

</style>
