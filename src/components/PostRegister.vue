<template>
  <div class="container border border-dark mt-4">
    <form id="root" @submit.prevent="onSubmitForm" class="container mt-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="title">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" v-model="content"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">작성자</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="author">
      </div>
      <input class="btn btn-primary btn-space mb-4" type="submit" value="작성">
      <input class="btn btn-primary mb-4" type="button" value="취소" @click="onCancel">
    </form> 
  </div>
</template>

<script>
export default {
    methods: {
      onCancel() {
            this.$router.push(`/list`)
        },
      onSubmitForm() {
              if (!this.title) {
                  alert("제목을 작성해주세요")
              } else if (!this.author) {
                  alert("작성자를 작성해주세요")
              } else {
                      const addList = JSON.parse(localStorage.getItem("app2")) 
                      if (!addList || !addList.length) {
                          let firstList = []
                          firstList.push({
                              id: 0, 
                              title: this.title, 
                              content: this.content, 
                              author: this.author, 
                              date: new Date().toLocaleDateString()})
                          localStorage.setItem("app2", JSON.stringify(firstList))
                          const idList = [0]                                             
                          localStorage.setItem('idList', JSON.stringify(idList))                    
                      } else {
                          const maxId = Math.max(...JSON.parse(localStorage.getItem('idList'))) 
                          addList.push({
                              id: maxId + 1, 
                              title: this.title, 
                              content: this.content, 
                              author: this.author, 
                              date: new Date().toLocaleDateString()})
                          localStorage.setItem("app2", JSON.stringify(addList))
                          const idList = JSON.parse(localStorage.getItem('idList'))
                          idList.push(maxId + 1)                                              
                          localStorage.setItem('idList', JSON.stringify(idList)) 
                      }
                      this.$router.push('/list')       
                  }
              },        
    },
    data() {
        return {
            title: "",
            author: "",
            content: ""
        }
    }    
}
</script>

<style>
  textarea {
    resize: none;
  }
  .btn-space {
    margin-right: 10px;
  }
</style>