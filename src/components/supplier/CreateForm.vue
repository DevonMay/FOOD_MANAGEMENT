<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Supplier Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="supplierFirstName" label="Supplier First Name" label-for="supplierFirstName ">
            <b-form-input
              id="supplierFirstName"
              type="text"
              placeholder="Supplier First Name "
              v-model="supplier.supplierFirstName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="supplierLastName" label="Supplier Last Name" label-for="supplierLastName">
            <b-form-input
              id="supplierLastName"
              type="text"
              placeholder="Supplier Last Name"
              v-model="supplier.supplierLastName"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group id="distributionNr" label="Distribution Number" label-for="distributionNr ">
            <b-form-input
              id="distributionNr"
              type="text"
              placeholder="Distribution Number "
              v-model="supplier.distributionNr"
            ></b-form-input>
          </b-form-group>
        </b-col>
       
      </b-row>
      
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewSupplier"
            >Add Supplier</b-button
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
        supplier: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewSupplier() {
        axios
          .post("http://localhost:8083/api/supplier/save", this.supplier)
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