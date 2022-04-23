<template>
  <div style="background-color: grey">
    <Products />
  </div>
</template>


<script>
import Products from "@/components/Product";
export default {
  layout: "LayoutUser",
  components: {
    Products,
  },
};
</script>