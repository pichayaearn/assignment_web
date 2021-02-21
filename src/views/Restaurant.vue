<template>
    <div class="container-md p-5">
        <input type="text" class="form-control mb-4" placeholder="ค้นหาร้านอาหาร" @input="debounceSearch" :value="keywordSearch" />
        <div class="content">
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status" v-if="isLoading"></div>
            </div>
            <template v-if="errorMsg">
                <ErrorMessage :errorMsg="errorMsg" />
            </template>
            <template v-if="restaurants.length > 0">
                <table class="table table-striped table-bordered mt-4">
                    <thead class="table-header">
                        <tr>
                            <th scope="col">ชื่อร้านอาหาร</th>
                            <th scope="col" class="text-center">คะแนน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="restaurant in restaurants" :key="restaurant.name">
                            <td>{{restaurant.name}}</td>
                            <td class="text-center">{{restaurant.rating}}</td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>
    </div>
</template>

<script>
import { requestAPI } from '../utils/requestAPI'
import ErrorMessage from '../components/ErrorMessage'
export default {
    name: 'Restaurant',
    data() {
        return {
            keywordSearch: '',
            restaurants: [],
            debounce: null,
            errorMsg: '',
            isLoading: false
        }
    },
    components: { ErrorMessage },
    methods: {
        async getRestaurants() {
            if (this.keywordSearch.length) {
                let apiPath = 'getRestaurants'
                let params = {
                    keyword: this.keywordSearch
                }

                let { data, errors } = await requestAPI(apiPath, params)
                this.isLoading = false
                if (errors) {
                    this.errorMsg = errors.message
                    return
                } else {
                    if (data.results.length) {
                        this.restaurants = data.results
                        this.errorMsg = ''
                    } else if (data.status === 'ZERO_RESULTS') {
                        this.errorMsg = 'ไม่พบร้านอาหาร'
                        this.restaurants = []
                    } else {
                        this.errorMsg = 'REQUEST DENIED'
                        this.restaurants = []
                    }
                }
            }
        },
        debounceSearch(event) {
            this.errorMsg = ''
            this.keywordSearch = event.target.value
            if (event.target.value == '') {
                this.restaurants = []
                this.isLoading = false
                clearTimeout(this.debounce)
                return
            }

            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.isLoading = true
                this.getRestaurants()
            }, 1500)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-header {
    background-color: #86b7fe7a;
}
</style>
