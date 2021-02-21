<template>
    <div class="coffee-cup"></div>
</template>

<script>
export default {
    name: 'CoffeeCup'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coffee-cup {
    background: linear-gradient(to top, black 14%, white 14%, white 100%);
    width: 300px;
    height: 190px;
    border-radius: 0 0 25px 25px;
    position: relative;
}

.coffee-cup::before {
    content: '';
    position: absolute;
    background-color: black;
    height: 150px;
    top: 0;
    left: 55px;
    right: 55px;
    border-radius: 0 0 30px 30px;
    z-index: 1;
}

.coffee-cup::after {
    content: '';
    position: absolute;
    width: 88px;
    height: 100px;
    background-color: white;
    top: 0px;
    right: 9px;
    border: 27px solid black;
    border-radius: 50%;
}

@media (max-width: 385px) {
    .coffee-cup {
        width: 300px;
        height: 120px;
    }
    .coffee-cup::before {
        height: 90px;
        left: 20%;
        right: 20%;
    }
    .coffee-cup::after {
        width: 70px;
        height: 55px;
        right: 7px;
        border: 13px solid black;
    }
}
</style>
