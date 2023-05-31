<script setup>

import Navbar from '../src/components/Navbar.vue';
import Banner from '../src/components/index/Banner.vue';
import Companies from '../src/components/index/Companies.vue';
import WorkWith from '../src/components/index/WorkWith.vue';
import WhatWeDo from '../src/components/index/WhatWeDo.vue';
import GetCaught from '../src/components/index/GetCaught.vue';
import Footer from '../src/components/index/Footer.vue';
import Retrieve from '../src/components/index/Retrieve.vue';

</script>
<template>
    <div id="wrapper">
        <Navbar/>
        <Banner/>
        <Retrieve/>
        <!-- <Companies/> -->
        <WhatWeDo/>
        
        <WorkWith AnotherClass= "" />
        <GetCaught/>
        <Footer/>



    </div>
</template>
