<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Products Sold</h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="productName" label="Product Name" label-for="productName ">
            <b-form-input
              id="productName"
              type="text"
              placeholder="Product Name "
              v-model="productSold.productName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="amountOfProduct" label="Amount Of Product" label-for="amountOfProduct">
            <b-form-input
              id="amountOfProduct"
              type="text"
              placeholder="Amount Of Product"
              v-model="productSold.amountOfProduct"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>    
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewSoldProduct"
            >Add Sold Product</b-button
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
        productSold: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewSoldProduct() {
        axios
          .post("http://localhost:8083/api/productSold/save", this.productSold)
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