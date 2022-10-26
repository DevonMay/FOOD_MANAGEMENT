<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Customer Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="adminFirstName" label="admin First Name" label-for="adminFirstName">
            <b-form-input
              id="adminFirstName"
              type="text"
              placeholder="Customer First Name "
              v-model="admin.adminFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="adminLastName" label="Admin Last Name" label-for="adminLastName">
            <b-form-input
              id="adminLastName"
              type="text"
              placeholder="adminLastName"
              v-model="admin.adminLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
       
        <b-col cols="6">
          <b-form-group id="adminPhoneNumber" label="Admin Phone Number" label-for="adminPhoneNumber">
            <b-form-input
              id="adminPhoneNumber"
              type="text"
              placeholder="admin phone number"
              v-model="admin.adminPhoneNumber"
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
      admin: {},
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
          .get(`http://localhost:8083/api/admin/read/${this.customerId}`)
          .then((response) => {
            this.admin = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      update() {
        axios
          .put(
            `http://localhost:8083/api/admin/update/${this.customerId}`,
            this.admin
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