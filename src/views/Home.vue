<template>
    <div class="container-md p-5">
        <h2 class="text-center mt-2">Full-Stack Assignment</h2>
        <div class="content">
            <span>Please try your best for all of them.</span>
            <ol>
                <li class="p-2">
                    <strong>API (Back-end)</strong>
                    <ol>
                        <li class="p-1">X, 5, 9, 15, 23, Y, Z - Please create a function for finding X, Y, Z value</li>
                        <li class="p-1">
                            Create a API endpoint to show the list of Restaurants near
                            <strong>“Muang Thong Thani”</strong> using Google Place API which
                            user can enter the keyword to search, and show result by JSON
                        </li>
                    </ol>
                </li>
                <li class="p-2">
                    <strong>Web (Front-end)</strong>
                    <ol>
                        <li class="p-1">Use JS framework to communicate with API</li>
                        <li class="p-1">Please use Bootstrap or Vuetify for css</li>
                        <li class="p-1">
                            Create a new page for showing results from your API
                            <ol type="a">
                                <li class="p-1">
                                    Show result from finding X, Y, Z value (1.1)
                                    <router-link to="/serial-number">ดูคำตอบ</router-link>
                                </li>
                                <li class="p-1">
                                    Show the list of restaurant and its location (1.2)
                                    <router-link to="/restaurant">ดูคำตอบ</router-link>
                                </li>
                                <li class="p-1">
                                    User can enter a new search keyword
                                    <router-link to="/restaurant">ดูคำตอบ</router-link>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li class="p-2">
                    <strong>Bonus Assignment</strong>
                    <p v-text="`Drawing A Coffee Cup by using only css in one div (<div class=”coffee-cup”></div>) Like this`"></p>
                    <div class="d-flex justify-content-center mt-5">
                        <CoffeeCup />
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import CoffeeCup from '../components/CoffeeCup'
export default {
    name: 'Home',
    components: { CoffeeCup }
}
</script>
