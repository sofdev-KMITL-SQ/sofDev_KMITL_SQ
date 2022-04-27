<template>
  <div style="background-color: grey">
    <Review />
  </div>
</template>


<script>
import Review from "@/components/Review";
export default {
  layout: "LayoutUser",
  components: {
    Review,
  },
};
</script>