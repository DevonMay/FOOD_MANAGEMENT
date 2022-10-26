<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Food Item Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="itemName" label="Food Item Name" label-for="itemName ">
            <b-form-input
              id="itemName"
              type="text"
              placeholder="Item Name "
              v-model="foodItem.itemName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="foodType" label="Food Item type" label-for="foodType">
            <b-form-input
              id="foodType"
              type="text"
              placeholder="Food Item Type"
              v-model="foodItem.foodType"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="amountOfItems" label="Amount of Food Items" label-for="amountOfItems ">
            <b-form-input
              id="amountOfItems"
              type="text"
              placeholder="Amount of Food Items "
              v-model="foodItem.amountOfItems"
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="itemPrice" label="Food Item Price" label-for="itemPrice ">
            <b-form-input
              id="itemPrice"
              type="text"
              placeholder="Food Item Price "
              v-model="foodItem.itemPrice"
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>
      
      
    
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="AddFoodItem"
            >Add Food Item</b-button
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
        foodItem: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      AddFoodItem() {
        axios
          .post("http://localhost:8083/api/foodItem/save", this.foodItem)
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