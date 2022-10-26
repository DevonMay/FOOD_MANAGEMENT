<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Remuneration Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="remunerationDue" label="Remuneration Due" label-for="remunerationDue ">
            <b-form-input
              id="remunerationDue"
              type="text"
              placeholder="Remuneration Due"
              v-model="remuneration.remunerationDue"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="remunerationDate" label="Remuneration Date" label-for="remunerationDate">
            <b-form-input
              id="remunerationDate"
              type="text"
              placeholder="Remuneration Date"
              v-model="remuneration.remunerationDate"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
      
        <b-col cols="6">
          <b-form-group id="remunerationDescription" label="Remuneration Description" label-for="remunerationDescription ">
            <b-form-input
              id="remunerationDescription"
              type="text"
              placeholder="Remuneration Description "
              v-model="remuneration.remunerationDescription"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewRemuneration"
            >Add Remuneration</b-button
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
        remuneration: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewRemuneration() {
        axios
          .post("http://localhost:8083/api/remuneration/save", this.remuneration)
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