<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Employee Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="empFirstName" label="Emplyee First Name" label-for="empFirstName ">
            <b-form-input
              id="customerFirstName"
              type="text"
              placeholder="Customer First Name "
              v-model="employee.empFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="empLastName" label="Employee Last Name" label-for="empLastName">
            <b-form-input
              id="empLastName"
              type="text"
              placeholder="employee Last Name"
              v-model="employee.empLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
       
        <b-col cols="6">
          <b-form-group id="empPhoneNumber" label="Employee Phone Number" label-for="empPhoneNumber">
            <b-form-input
              id="empPhoneNumber"
              type="text"
              placeholder="Employee Phone Number"
              v-model="employee.empPhoneNumber"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="empRole" label="empRole" label-for="Employee Role">
            <b-form-input
              id="empRole"
              type="text"
              placeholder="Employee role"
              v-model="employee.empRole"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
    
       
      </b-row>

    
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewFlghtLiner"
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
    name: "CreateCustomerModal",
    data() {
      return {
        employee: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewFlghtLiner() {
        axios
          .post("http://localhost:8083/api/employee/save", this.employee)
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