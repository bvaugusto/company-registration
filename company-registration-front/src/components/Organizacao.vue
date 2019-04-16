<template>
  <container fluid ma-5 pa-0 fill-width>
    <layout row>
      <flex xs12>
        <subheader>Cadastro</subheader>
        <flex xs6>
          <form
            ref="form">

            <text-field
              model="formData.cnpj"
              label="CNPJ"
              required>
            </text-field>

            <text-field
              model="formData.nome"
              label="Nome"
              required>
            </text-field>

            <text-field
              model="formData.atividade"
              label="Principal Atividade"
              required>
            </text-field>

            <text-field
              model="formData.telefone"
              label="Telefone"
              required>
            </text-field>

            <text-field
              model="formData.email"
              label="Email"
              required>
            </text-field>

            <btn
              color="success"
              @click="onSubmit">
              Cadastrar
            </btn>
          </form>

          {{ JSON.stringify(organizacao) }}
        </flex>
      </flex>
    </layout>
  </container>
</template>

<script>
  import store from '../store'
  /*
    No momento da execução do methods do ciclo de vida do componente (created)
    é disparada uma evento para a store solicitando que os dados sejá carregado.

    Utilizando um method computed, os dados são mapeados no componente apartir
    do unico pode de verdade(Single Source Of Truth).
  */
  export default {
    data: () => ({
      formData: {
        cnpj: '',
        nome: '',
        atividade: '',
        telefone: '',
        email: ''
      }
    }),
    computed: {
      organizacao() {
        this.formData.nome = store.state.organizacao.dados.nome;
        this.formData.atividade = store.state.organizacao.dados.atividade_principal
          ? store.state.organizacao.dados.atividade_principal[0].text
          : '';
        this.formData.telefone = store.state.organizacao.dados.telefone;
        this.formData.email = store.state.organizacao.dados.email;
        return store.state.organizacao.dados
      },
      cnpj() {
        return this.formData.cnpj
      }
    },
    watch: {
      cnpj() {
        if (this.formData.cnpj.length === 14) {
          store.dispatch('get-data-cnpj', this.formData.cnpj)
        }
      }
    },
    methods: {
      onSubmit() {
        store.dispatch('post-info-api', this.formData)
      }
    }
  }
</script>
