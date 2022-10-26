<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary">Delivery Details </h4>
      </b-row>
      <b-col cols="6">
        <b-form-group id="deliveryDate" label="Delivery Date" label-for="deliveryDate ">
          <b-form-input
            id="deliveryDate"
            type="text"
            placeholder="Delivery Date "
            v-model="delivery.deliveryDate"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="deliveryAddress" label="Delivery Address" label-for="deliveryAddress">
          <b-form-input
            id="deliveryAddress"
            type="text"
            placeholder="Delivery Address"
            v-model="delivery.deliveryAddress"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  
    <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewDelivery"
            >Add delivery</b-button
        >
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Close</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateCustomerModal",
  data() {
    return {
      delivery: {},
    };
  },
  methods: {
    triggerClose() {
      this.$emit("closeCreateModal");
    },
    addNewDelivery() {
      axios
        .post("http://localhost:8083/api/delivery/save", this.delivery)
        .then((response) => {
          console.log(response.data);
          this.$emit("closeCreateModal");
          this.$emit("reloadDataTable");
          this.$emit("showSuccessAlert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>