<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Cadastro de Empresa</h1>
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- Input addon -->
          <div class="box box-info">
            <div class="box-body">
              <form>
                <div class="form-group">
                  <span class="form-group-addon">CNPJ</span>
                  <input
                    type="text"
                    class="form-control"
                    id="cnpj"
                    name="cnpj"
                    v-model="formData.cnpj"
                  >
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Razão Social</span>
                      <input
                        type="text"
                        class="form-control"
                        id="social_name"
                        name="social_name"
                        v-model="formData.social_name"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Nome Fantasia</span>
                      <input
                        type="text"
                        class="form-control"
                        id="fantasy_name"
                        name="fantasy_name"
                        v-model="formData.fantasy_name"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Telefone</span>
                      <input
                        type="text"
                        class="form-control"
                        id="telephone"
                        name="telephone"
                        v-model="formData.telephone"
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-3">
                    <div class="form-group">
                      <span class="form-group-addon">Inscrição Municipal</span>
                      <input
                        type="text"
                        class="form-control"
                        id="municipal_registration"
                        name="municipal_registration"
                        v-model="formData.municipal_registration"
                      >
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="form-group">
                      <span class="form-group-addon">Inscrição Estadual</span>
                      <input
                        type="text"
                        class="form-control"
                        id="state_registration"
                        name="state_registration"
                        v-model="formData.state_registration"
                      >
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="form-group">
                      <span class="form-group-addon">Segmento</span>
                      <select v-model="formData.id_segment" class="form-control">
                        <!-- <option v-for="task in tasks" v-bind:value="task.name">{{task.name}}</option> -->
                      </select>
                      <!-- {{ id_segment | json }} -->
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="form-group">
                      <span class="form-group-addon">E-mail</span>
                      <input
                        type="text"
                        class="form-control"
                        id="mail"
                        name="mail"
                        v-model="formData.mail"
                      >
                    </div>
                  </div>
                </div>

                <h4>Endereço</h4>

                <div class="form-group">
                  <span class="form-group-addon">CEP</span>
                  <input
                    type="text"
                    class="form-control"
                    id="cep"
                    name="cep"
                    v-model="formData.cep"
                  >
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Logradouro</span>
                      <input
                        type="text"
                        class="form-control"
                        id="public_place"
                        name="public_place"
                        v-model="formData.public_place"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Número</span>
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="number"
                        v-model="formData.number"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Complemento</span>
                      <input
                        type="text"
                        class="form-control"
                        id="complement"
                        name="complement"
                        v-model="formData.complement"
                      >
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Bairro</span>
                      <input
                        type="text"
                        class="form-control"
                        id="neightborhood"
                        name="neightborhood"
                        v-model="formData.neightborhood"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Cidade</span>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        name="city"
                        v-model="formData.city"
                      >
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="form-group">
                      <span class="form-group-addon">Estado</span>
                      <input
                        type="text"
                        class="form-control"
                        id="state"
                        name="state"
                        v-model="formData.state"
                      >
                    </div>
                  </div>
                </div>
                <button class="btn btn-success" @click="onSubmit">Cadastrar</button>
              </form>
              <!-- /form-group -->
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (left) -->
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store";
/*
    No momento da execução do methods do ciclo de vida do componente (created)
    é disparada uma evento para a store solicitando que os dados sejá carregado.

    Utilizando um method computed, os dados são mapeados no componente apartir
    do unico pode de verdade(Single Source Of Truth).
  */
export default {
  data: () => ({
    formData: {
      cnpj: "",
      id_segment: "",
      social_name: "",
      municipal_registration: "",
      state_registration: "",
      cep: "",
      public_place: "",
      number: "",
      telephone: "",
      mail: "",
      complement: "",
      neightborhood: "",
      city: "",
      state: ""
    }
  }),
  computed: {
    organizacao() {
      this.formData.nome = store.state.organizacao.dados.nome;
      this.formData.atividade = store.state.organizacao.dados
        .atividade_principal
        ? store.state.organizacao.dados.atividade_principal[0].text
        : "";
      this.formData.telefone = store.state.organizacao.dados.telefone;
      this.formData.email = store.state.organizacao.dados.email;
      return store.state.organizacao.dados;
    },
    cnpj() {
      return this.formData.cnpj;
    }
  },
  watch: {
    cnpj() {
      if (this.formData.cnpj.length === 14) {
        store.dispatch("get-data-cnpj", this.formData.cnpj);
      }
    }
  },
  methods: {
    onSubmit() {
      store.dispatch("post-info-api", this.formData);
      e.preventDefault();
    }
  }
};
</script>
