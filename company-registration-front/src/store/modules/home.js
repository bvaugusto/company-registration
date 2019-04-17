import Vue from "vue";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

// Initial state
const state = {
  dados: []
};

const mutations = {
  "set-state-datatable"(state, dados) {
    console.log(dados);
    // state.dados = dados;
  }
};

const actions = {
  "get-data-table"(context, payload) {
    axios
      .get(`http://127.0.0.1:8000/api/company`, {
        adapter: jsonpAdapter
      })
      .then(response => {
        let dados = response.data;
        context.commit("set-state-datatable", dados);
      });
  },
  "post-info-api"(context, payload) {
    // Examplo:
    // payload: {
    //   cnpj: '',
    //   nome: '',
    //   atividade: '',
    //   telefone: '',
    //   email: ''
    // }
    axios
      .post("/url-sua-api", payload)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default {
  state,
  getters: [],
  mutations,
  actions
};
