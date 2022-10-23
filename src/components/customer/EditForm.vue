<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Customer Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="customerFirstName" label="Customer First Name" label-for="customerFirstName ">
            <b-form-input
              id="customerFirstName"
              type="text"
              placeholder="Customer First Name "
              v-model="customer.customerFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="customerLastName" label="Customer Last Name" label-for="customerLastName">
            <b-form-input
              id="customerLastName"
              type="text"
              placeholder="Customer Last Name"
              v-model="customer.customerLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
       
        <b-col cols="6">
          <b-form-group id="customerGender" label="customer Gender" label-for="customerGender">
            <b-form-input
              id="customerGender"
              type="text"
              placeholder="Customer Gender"
              v-model="customer.customerGender"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="customerAddress" label="customerAddress" label-for="customerAddress">
            <b-form-input
              id="customerAddress"
              type="text"
              placeholder="customerAddress"
              v-model="customer.customerAddress"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="customerPhoneNumber" label="customer Phone Number" label-for="customerPhoneNumber ">
            <b-form-input
              id="customerPhoneNumber"
              type="text"
              placeholder="Customer Phone Number "
              v-model="customer.customerPhoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>
  
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="update"
            >Update Flght Line</b-button
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
    props: {
      customerId: Number,
    },
    data() {
      return {
      customer: {},
      };
    },
    mounted() {
      this.getCusomterByID();
      //.log(this.getCusomterByID())
    },
    methods: {
      triggerClose() {
        this.$emit("closeEditModal");
      },
      getCusomterByID() {
        axios
          .get(`http://localhost:8083/api/customer/${this.customerId}`)
          .then((response) => {
            this.customer = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      update() {
        axios
          .put(
            `http://localhost:8083/api/customer/${this.customerId}`,
            this.customer
          )
          .then((response) => {
            console.log(response.data);
            this.$emit("closeEditModal");
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