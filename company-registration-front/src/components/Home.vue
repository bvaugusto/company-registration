<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Empresas</h1>
    </section>

    <div>
      <ul v-if="company && company.length">
        <li v-for="post in company">
          <p>
            <strong>Title: {{post.cnpj}}</strong>
          </p>
          <p>Message: {{post.social_name}}</p>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li v-for="error in errors">{{error.message}}</li>
      </ul>
    </div>

    <!-- Main content -->
    <!-- <section class="content"> -->
    <!-- <div class="row"> -->
    <!-- <div class="col-md-12"> -->
    <!-- {{company}}
          <ul v-if="company && company.lenght">
            <li v-for="value in company">
              <p>{{value.cnpj}}</p>
            </li>
          </ul>

          <ul v-if="errors && errors.lenght">
            <li v-for="erro in errors">
              <p>{{erro.message}}</p>
            </li>
    </ul>-->
    <!-- </div> -->
    <!-- <div class="col-md-12 col-sm-12 col-xs-12">
          <div v-for="n in 9" :key="n">
            <div class="d-flex">
              <img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
            </div>
          </div>
    <!-- </div>-->
    <!-- </div> -->
    <!-- </section> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  // data: () => ({
  //   company: [],
  //   errors: []
  // }),
  // created() {
  //   Axios.get(`http://127.0.0.1:8000/api/company`)
  //     .then(response => {
  //       this.company = response.data;
  //     })
  //     .catch(e => {
  //       this.errors.push(e);
  //     });
  // }

  data() {
    return {
      company: [],
      errors: []
    };
  },
  created() {
    Axios.get(`http://127.0.0.1:8000/api/company`)
      .then(response => {
        this.company = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
// https://www.npmjs.com/package/vuejs-datatable
// https://vuetable.ratiw.net/api/users
</script>


