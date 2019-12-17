<template>
  <div class="modals">
    <a class="modal-trigger" :href="`#modal-${namePoke}`">
      <div class="btn-floating">
        <img class="img-pokeball" src="../assets/img/pokeball.png">
      </div>             
      Detalhes 
    </a>
    <!-- Modal Structure -->
    <div :id="`modal-${namePoke}`" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>{{namePoke}}</h4>
        <div class="poke_img">
          <img :src="sprites.front_default">
        </div>
        <div class="row">
          <div class="col s12">
            <ul :id="`tabs-${namePoke}`" class="tabs">
              <li class="tab col s3"><a class="active" :href="`#tab-01-${namePoke}`">status</a></li>
              <li class="tab col s3"><a :href="`#tab-02-${namePoke}`">skills</a></li>
            </ul>
          </div>
          <div :id="`tab-01-${namePoke}`" class="col s12">
            <div class="poke_grafico">
              <div class="poke_basic">
                <h6>Features</h6>
                <div class="heigth-weigth">
                  Height: {{height}} |
                  Weigth: {{weight}}
                </div>
                <div class="poke_type">
                  <h6>Type:</h6>
                  <ul class="type_list">
                    <li
                      :key="index"
                      v-for="(item, index) in poke_types">
                      {{item.type.name}}
                    </li>
                  </ul>
                </div>
              </div>
              <grafico-status 
                :data="poke_stats"
              />
            </div>
          </div>
          <div :id="`tab-02-${namePoke}`" class="col s12">
            <div 
              :key="index"
              class="all_skills"
              v-for="(item, index) in abilities"
            >
              <div class="section">
                <h5>skill: {{item[1]}}</h5>
                <p>Effect: {{item[0].effect}}</p>
                <p>Short Effect: {{item[0].short_effect}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a class="modal-close waves-effect waves-green btn-flat">FECHAR</a>
      </div>
    </div>
  </div>
</template>

<script>
import GraficoStatus from './GraficoStatus'
export default {
  name: 'modal',
  props: {
    namePoke: String,
    abilities: Array,
    sprites: Object,
    poke_stats: Object,
    poke_types: Array,
    base_experience: Number,
    height: Number,
    poke_id: Number,
    weight: Number
  },
  components: {
    GraficoStatus
  },
  mounted () {
    this.instances()
  },
  methods: {
    instances () {
      let elModal = document.querySelectorAll('.modal');
      let elTabs = document.querySelector(`#tabs-${this.namePoke}`)
      let instanceTabs = M.Tabs.init(elTabs);
      let instanceModal = M.Modal.init(elModal);
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: black !important;
}
.modal {
  background-color: #e0f7fa;
  top: 5%;
  .modal-content {
    h5, h4 {
      text-transform: uppercase;
      text-align: center;
    }
    .poke_img {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .poke_grafico {
      padding: 15px;
      width: 100%;
      display: flex;
      justify-content: space-around;

      .poke_basic {
        background-color: white;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
      }

      .poke_type {
        display: flex;
        flex-direction: column;
        h6 {
          align-self: center;
        }
        .type_list {
          display: flex;
          margin: 0;
          li {
            padding: 5px;
            margin: 3px;
            background-color: #e0f7fa;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
.modals {
  display: flex;
  width: 100%;
  justify-content: center;

  .modal-trigger {
    a {
      display: flex;
      align-items: center;
      width: 100%;
      color: black !important;
    }
  }
  .section {
    &:nth-child(1){
      margin-top: 5px;
    }
    margin-bottom: 5px;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 10px;
  }
}

.img-pokeball {
  width: 100%;
}
</style>