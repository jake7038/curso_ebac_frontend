<script setup>
import { reactive } from 'vue';



const resultado = reactive({
  numero1: 0,
  numero2: 0,
  operador: 'adi',
  conta : () => {
    if(resultado.numero2 === 0 && resultado.operador === 'div'){
      return  'ERRO Divisão por 0'
    }
    else{
      switch (resultado.operador){
      case 'adi':
      return  (parseInt(resultado.numero1 )+ parseInt(resultado.numero2))
      case 'sub':
      return  (resultado.numero1 - resultado.numero2)  
      case 'mult':
      return  (resultado.numero1 * resultado.numero2)
      case 'div':
      return  (resultado.numero1 / resultado.numero2)
    }
    }
    
  }
});



</script>

<template>
  <div class="container">
    <header class="pt-5 text-center">
      <h1>calculadora aritmética</h1>

    </header>
    <div class="bg-light mt-5 pt-5 pb-5">
      <div class="row d-flex justify-content-center align-middle" style="flex-direction: row; align-items: center;">
        <div class="col-md-3 d-flex justify-content-center">
          <input @change="evento => resultado.numero1 = evento.target.value" :value="resultado.numero1" type="number">
        </div>
        <div class="col-md-1">
          <select  @change="evento => resultado.operador = evento.target.value"  class="form-control text-center fs-5 align-middle" style="cursor: pointer;">
        <option value="adi">+</option>
          <option value="sub">-</option>
          <option value="mult">x</option>
          <option value="div">/</option>
      </select>
        </div>
        <div class="col-md-3 d-flex justify-content-center ">
          <input @change="evento => resultado.numero2 = evento.target.value"  :value="resultado.numero2" type="number">
        </div>
        <div class="col-md-1 d-flex justify-content-center fs-1">
            =
        </div>
        <div class="col-md-3" style="text-align: center;  flex-direction: row; vertical-align: middle;">
          
          <span class="align-middle" style="vertical-align: middle;"> {{resultado.conta()}} </span>
        </div>
      </div>

      
    </div>
  </div>
  
</template>

<style scoped>


</style>
