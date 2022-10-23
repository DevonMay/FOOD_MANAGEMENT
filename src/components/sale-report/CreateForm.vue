<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Employee Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="First-Name" label="First Name " label-for="First Name">
            <b-form-input
              id="First-Name"
              type="text"
              placeholder="First Name"
              v-model="employee.empFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="Last-Name" label="Last Name" label-for="Last-Name">
            <b-form-input
              id="Last-Name"
              type="text"
              placeholder="Last-Name"
              v-model="employee.empLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="phone-number " label="phone number " label-for="phone-number ">
            <b-form-input
              id="phone-number "
              type="text"
              placeholder="phone-number "
              v-model="employee.empPhoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="role" label="role" label-for="role">
            <b-form-input
              id="role"
              type="text"
              placeholder="model"
              v-model="employee.empRole"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
  
   
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewCustomer"
            >Add Employee</b-button
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
    name: "CreateModal",
    data() {
      return {
        employee : {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCustomer() {
        axios
          .post("http://localhost:8003/api/employee/save",this.employee)
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