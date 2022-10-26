<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Food Type Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="foodName" label="Food Name" label-for="foodName ">
            <b-form-input
              id="foodName"
              type="text"
              placeholder="Food Name "
              v-model="foodType.foodName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewFoodType"
            >Add Food Type</b-button
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
        foodType: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewFoodType() {
        axios
          .post("http://localhost:8083/api/foodType/save", this.foodType)
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