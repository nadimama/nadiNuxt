<template>
  <div>
    <template v-for="item in upserveSections" v-if="item.name === 'Feature - Tuesday' || item.name === 'Feature - Wednesday' || item.name === 'Feature - Thursday' || item.name === 'Feature - Friday' || item.name === 'Feature - Saturday'">
      <template v-for="piece in item.item_ids">
        <template v-for="serve in upserve">
          <template v-if="serve.id === piece" class="inline-block">
            {{item.name}}
            {{serve.name}}
          </template>
        </template>
      </template>
    </template>
  </div>
</template>

<script>


export default {
  name: "upservefiltering",
  props: ["data"],
  data() {
    return {

      upserve: null,
      upserveSections: null
    };
  },
  methods: {
    async upserves() {
      let responseUpserve = await this.$http.get(
        "/product/upserveolo"
      );
      let upserveProducts = responseUpserve.data.body.items;
      this.upserve = upserveProducts;
      this.upserveSections = responseUpserve.data.body.sections;
    },
  },
  mounted() {
    this.upserves();
  },
};
</script>



