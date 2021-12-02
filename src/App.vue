<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">VueBoard</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><router-link to="/">홈</router-link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/list">글목록</router-link></a>
            </li> 
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/register">글쓰기</router-link></a>
            </li>                    
        </ul>          
      </div>
    </div>
  </nav>
  <router-view :dataList="dataList"></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        dataList: []
      }    
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("app2"))) {
        this.dataList = JSON.parse(localStorage.getItem("app2"))
    }  
  }
}
</script>

<style>
</style>
