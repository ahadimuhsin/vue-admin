<template>
    <div>
     <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">#</th>
                <th class="text-left">Code</th>
                <th class="text-left">Count</th>
                <th class="text-left">Revenue</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(link, index) in links"
                :key="link.id">
                <td>{{ index + 1 }}</td>
                <td>{{ link.code }}</td>
                <td>{{ link.orders.length }}</td>
                <td>{{ revenue(link.orders) }}</td>
            </tr>
            </tbody>
        </template>
      </v-simple-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "links",
    data(){
        return {
            links: []
        }
    },
    async mounted(){
        const {data} = await axios(`users/${this.$route.params.id}/links`);

        this.links = data;
    },
    methods: {
        revenue(data)
        {
            let total = 0;

            for(let i = 0; i < data.length; i++)
            {
                for (let index = 0; index < data[i].order_items.length; index++) {
                    total += data[i].order_items[index].admin_revenue
                }
            }
            return total
        }
    }
}
</script>