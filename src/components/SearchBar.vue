<template>
    <InputGroup>
        <Button  @click="$emit('search-location',  inpText )">
          <i class="pi pi-search" style="font-size: 14px"></i> 
        </Button>
        <InputText v-model="inpText" placeholder="Search By location"  @keypress.enter="$emit('search-location',  inpText )"/>
    </InputGroup>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';

export default {
  name: 'SearchBar',
  components:{
    InputGroup: defineAsyncComponent(()=>import('primevue/inputgroup')),
    Button: defineAsyncComponent(()=>import('primevue/button')),
    InputText: defineAsyncComponent(()=>import('primevue/inputtext'))
  },
  setup(){
    const inpText = ref('')
    
    return{
      inpText
    }
  }
}
</script>

<style scoped>

</style>
