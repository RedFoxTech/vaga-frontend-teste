<template>
  <div>
    {{type}}
    <b-link href="#" class="ml-3 mr-0 text-primary">x</b-link>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>