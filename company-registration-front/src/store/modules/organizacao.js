import Vue from 'vue/types';
import axios from 'axios/index';
import jsonpAdapter from 'axios-jsonp';

// Initial state
const state = {
  dados: []
}

const mutations = {
  'set-state-cnpj'(state, dados){
    state.dados = dados
  }
}

const actions = {
  'get-data-cnpj'(context, payload) {
    axios.get(`http://www.receitaws.com.br/v1/cnpj/${payload}`, { adapter: jsonpAdapter })
      .then(response => {
        let dados = response.data;
        context.commit('set-state-cnpj', dados)
      })
  },
  'post-info-api'(context, payload) {
    // Examplo:
    // payload: {
    //   cnpj: '',
    //   nome: '',
    //   atividade: '',
    //   telefone: '',
    //   email: ''
    // }
    axios.post('/url-sua-api', payload)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
      console.log(error);
    });
  }
}

export default{
  state,
  getters: [],
  mutations,
  actions
}
