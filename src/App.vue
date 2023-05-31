<script>

import Pages from '../pages/index.vue'
import Dashboard from '../pages/Dashboard.vue'


const routes = {
  '/Dashboard': Dashboard,
  '/': Pages,
  
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>
<template>

  <component :is="currentView" />
</template>