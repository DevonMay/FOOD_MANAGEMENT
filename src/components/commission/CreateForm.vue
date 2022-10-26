<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Commission Details</h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="commissionAddress" label="Commission Address" label-for="commissionAddress ">
            <b-form-input
              id="commissionAddress"
              type="text"
              placeholder="Commission Address "
              v-model="commission.commissionAddress"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="commissionDate" label="Commission Date" label-for="commissionDate">
            <b-form-input
              id="commissionDate"
              type="text"
              placeholder="Commission Date"
              v-model="commission.commissionDate"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>    
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewCommission"
            >Add Commission</b-button
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
        commission: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCommission() {
        axios
          .post("http://localhost:8083/api/commission/save", this.commission)
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