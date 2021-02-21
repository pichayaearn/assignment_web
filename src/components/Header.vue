<template>
    <div class="header-nav">
        <div class="row">
            <div class="col-12">
                <img alt="Vue logo" src="../assets/logo.png" />
            </div>
            <div class="col-12">
                <router-link to="/">Home</router-link>|
                <router-link to="/serial-number">Serial Number</router-link>|
                <router-link to="/restaurant">Restaurant</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header-nav {
    text-align: center;
}
</style>