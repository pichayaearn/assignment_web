<template>
    <div class="container-md p-5">
        <div class="content block">
            <p>X, 5, 9, 15, 23, Y, Z - Please create a function for finding X, Y, Z value</p>
            <p v-if="x">X = {{ x }}</p>
            <p v-else>X = ??</p>
            <p v-if="y">Y = {{ y }}</p>
            <p v-else>Y = ??</p>
            <p v-if="z">Z = {{ z }}</p>
            <p v-else>Z = ??</p>
            <template v-if="errorMsg">
                <ErrorMessage :errorMsg="errorMsg" />
            </template>
        </div>
    </div>
</template>

<script>
import { requestAPI } from '../utils/requestAPI'
import ErrorMessage from '../components/ErrorMessage'
export default {
    name: 'SerialNumber',
    mounted() {
        this.getSerialNumber()
    },
    data() {
        return {
            index_of_x: 1,
            index_of_y: 6,
            index_of_z: 7,
            x: null,
            y: null,
            z: null,
            errorMsg: ''
        }
    },
    components: { ErrorMessage },
    methods: {
        async getSerialNumber() {
            let apiPath = 'getSerialNumber'
            let params = {
                index_of_x: this.index_of_x,
                index_of_y: this.index_of_y,
                index_of_z: this.index_of_z
            }
            let { data, errors } = await requestAPI(apiPath, params)
            if (errors) {
                this.errorMsg = errors.message
                return
            } else {
                this.errorMsg = ''
                this.x = data.x
                this.y = data.y
                this.z = data.z
            }
        }
    }
}
</script>


