<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary justify-content-center">Admin Details </h4>
      </b-row>
      <b-col cols="6" class="mb-4 mt-4">
        <b-form-group id="adminFirstName" label="Admin First Name" label-for="adminFirstName">
          <b-form-input id="customerFirstName" type="text" placeholder="Customer First Name "
            v-model="$v.admin.adminFirstName.$model"
            :class="{ 'is-invalid': $v.admin.adminFirstName.$error }"
            ></b-form-input>
            <div v-if="$v.admin.adminFirstName.$error" class="invalid-feedback">
              <span v-if="!$v.admin.adminFirstNamerequired"
                >Password is required</span
              >
              <span v-if="!$v.user.password.minLength"
                >Password must be at least 8 characters</span
              >
            </div>

        </b-form-group>
      </b-col>
      <b-col cols="6" class="mb-4 mt-4">
        <b-form-group id="adminLastName" label="Admin Last Name" label-for="adminLastName">
          <b-form-input id="adminLastName" type="text" placeholder="adminLastName" v-model="admin.adminLastName">
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>

      <b-col cols="6" class="mb-4 mt-4">
        <b-form-group id="adminPhoneNumber" label="Admin Phone Number" label-for="adminPhoneNumber">
          <b-form-input id="adminPhoneNumber" type="text" placeholder="admin phone number"
            v-model="admin.adminPhoneNumber"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="3">
        <b-button variant="primary" class="px-5" @click="addNewFlghtLiner">Add Admin</b-button>
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Close</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>
  
<script>
import axios from "axios";
import {required, email,minLength,} from "vuelidate/lib/validators";
export default {
  name: "CreateCustomerModal",
  data() {
    return {
      admin: {},
    };
  },
  validations: {
    admin: {
      adminFirstName: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email,
        },
      
        password: {
          required,
          minLength: minLength(8),
        }
       
      },
    },
  methods: {
    triggerClose() {
      this.$emit("closeCreateModal");
    },
    addNewFlghtLiner() {
      axios
        .post("http://localhost:8083/api/admin/save", this.admin)
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