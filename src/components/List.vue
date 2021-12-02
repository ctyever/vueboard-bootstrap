<template>
  <div class="container border border-dark mt-4 detail">
    <h1 class="text-center mt-4">게시판</h1>
    <table class="table mt-4">
      <thead class="thead-dark">
        <tr>
          <th scope="col" class="text-center">번호</th>
          <th scope="col" class="text-center">제목</th>
          <th scope="col" class="text-center">작성자</th>
          <th scope="col" class="text-center">작성일</th>
        </tr>
      </thead>
      <tbody v-if="postList && postList.length">
        <tr v-for="(data, idx) in lists" :key="idx">
          <td scope="col" class="text-center">{{(idx + 1) + this.currentPage * this.perPage - this.perPage}}</td>
          <td @click="$router.push(`/detail/${data.id}`)" scope="col" class="text-center"><a href="">{{data.title}}</a></td>
          <td scope="col" class="text-center">{{data.author}}</td>
          <td scope="col" class="text-center">{{data.date}}</td>
        </tr>
      </tbody>
      <tr v-else>
              <td colspan="4" class="text-center">데이터가 없습니다.</td>
      </tr>
      <input class="btn btn-primary btn-space mt-5 mb-4" type="button" value="글쓰기"
              @click="$router.push('/register')">
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination" style="justify-content: center;">
            <li class="page-item" @click="pageClick" v-for="(page, idx) in totalPage" :key='idx'><a class="page-link" href="#">{{page}}</a></li>            
        </ul>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      totalPage: 0,
      postList: []
      }      
    },
  computed: {
    lists () {
    if(!this.postList || !this.postList.length) {
      return []
    } else {
      const items = this.postList
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
      }          
    }
  },
  methods: {
    pageClick (e) {
      console.log(typeof(e.target))
      return this.currentPage = parseInt(e.target.text)
    }
  },
  mounted() {
    this.postList = JSON.parse(localStorage.getItem("app2"))
    if(!this.postList || !this.postList.length) {
      console.log('empty')
    } else {      
      this.totalPage = Math.ceil(this.postList.length / this.perPage)
      console.log("this.totalPage",this.postList.length)      
      }    
    }
}
</script>

<style>
.detail {
  white-space: pre;
  overflow: auto; 
}
</style>

