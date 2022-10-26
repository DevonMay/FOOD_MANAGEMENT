<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">remunerationDue Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="remunerationDue" label="Remuneration Due" label-for="remunerationDue ">
            <b-form-input
              id="remunerationDue"
              type="text"
              placeholder="Remuneration Due "
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
          <b-button variant="primary" class="px-5" @click="update"
            >Update Remuneration</b-button
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
      customerId: String,
    },
    data() {
      return {
      remuneration: {},
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
          .get(`http://localhost:8083/api/remuneration/read/${this.customerId}`)
          .then((response) => {
            this.remuneration = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      update() {
        axios
          .put(
            `http://localhost:8083/api/remuneration/update/${this.customerId}`,
            this.remuneration
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