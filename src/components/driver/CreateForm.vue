<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Driver Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="driverFirstName" label="Driver First Name" label-for="driverFirstName ">
            <b-form-input
              id="driverFirstName"
              type="text"
              placeholder="Driver First Name "
              v-model="driver.driverFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="driverLastName" label="Driver Last Name" label-for="driverLastName">
            <b-form-input
              id="driverLastName"
              type="text"
              placeholder="Driver Last Name"
              v-model="driver.driverLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="driverPhoneNumber" label="driver Phone Number" label-for="driverPhoneNumber ">
            <b-form-input
              id="driverPhoneNumber"
              type="text"
              placeholder="Driver Phone Number "
              v-model="driver.driverPhoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>
    
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewDriver"
            >Add driver</b-button
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
        driver: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewDriver() {
        axios
          .post("http://localhost:8083/api/driver/save", this.driver)
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