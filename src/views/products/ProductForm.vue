<template>
    <div>
        <form @submit.prevent="submit">
            <div class="my-4">
                <v-text-field label="Title" 
                placeholder="Product Title" v-model="title"></v-text-field>
            </div>

            <div class="my-4">
                <v-textarea label="Description" 
                placeholder="Product Description"
                v-model="description"></v-textarea>
            </div>

            <div class="my-4">
                <!-- <v-file-input label="Image" show-size
                v-model="image"></v-file-input> -->

                <v-text-field label="Image" 
                placeholder="Contoh Image"
                v-model="image"></v-text-field>

            </div>

            <div class="my-4">
                <v-text-field label="Price" 
                type="number" min="0" 
                placeholder="Product Price"
                v-model="price"></v-text-field>
            </div>

            <v-btn color="primary" type="submit">Save</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "ProductForm",
    data(){
        return{
            title : '',
            description: '',
            image: '',
            price: 0
        }
    },
    async mounted()
    {
        if(this.$route.params.id)
        {
            const {data} = await axios.get(`products/${this.$route.params.id}`);

            this.title = data.title;
            this.description = data.description;
            this.image = data.image;
            this.price = data.price;
        }
    },
    methods: {
        async submit()
        {
            const data = {
                title: this.title,
                description: this.description,
                image: this.image,
                price: this.price,
            }
            
            if(this.$route.params.id)
            {
                await axios.put(`products/${this.$route.params.id}`, data)
            }
            else{
                await axios.post('products', data)
            }

            await this.$router.push('/products')

            this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Sukses',
                text: 'Produk Berhasil Ditambahkan'
            });
        }
    }
}
</script>

<style scoped>

</style>