<template>
  <div class="container border border-dark mt-4 detail"> 
      <h1 class="text-center mt-4">상세페이지</h1>
      <table id="datatable-scroller" class="table table-bordered tbl_Form mt-4 ">
        <colgroup>
          <col width="250px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th class="active" >제목</th>
            <td>{{dataList.find(item => item.id == $route.params.id).title}}</td>
          </tr>
          <tr>
            <th class="active">작성자</th>
            <td>{{dataList.find(item => item.id == $route.params.id).author}}</td>
          </tr>
          <tr>
            <th class="active">날짜</th>
            <td>{{dataList.find(item => item.id == $route.params.id).date}}</td>
          </tr>
          <tr>
            <th class="active" >내용</th>
            <td>{{dataList.find(item => item.id == $route.params.id).content}}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <input class="btn btn-primary btn-space mb-4" type="button" value="수정" 
              @click="$router.push(`/edit/${dataList.find(item => item.id == $route.params.id).id}`)">
        <input class="btn btn-primary btn-space mb-4" type="button" value="삭제"
              @click='deleteData($route.params.id)'>
        <input class="btn btn-primary btn-space mb-4" type="button" value="목록"
            @click="$router.push('/list')">
      </div>  
  </div>
</template>

<script>
export default {
  props: { 
    dataList: Array   
  },  
  methods: {
      deleteData(dataId) {
              const pulledList = JSON.parse(localStorage.getItem("app2"))               
              const updatedList = pulledList.filter((data) => data.id != dataId)
              localStorage.setItem("app2", JSON.stringify(updatedList))
              this.$router.push('/list') 
      }
  }
}
</script>

<style>
.btn-space {
  margin-right: 10px;
}
.detail {
  white-space: pre;
  overflow: auto; 
}
</style>