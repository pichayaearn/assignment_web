<template>
    <div class="alert alert-danger" role="alert">{{errorMsg}} !!</div>
</template>

<script>
export default {
    name: 'ErrorMessage',
    props: {
        errorMsg: String
    }
}
</script>