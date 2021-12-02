<template>
  <div class="container border border-dark mt-4">
    <form id="root" @submit.prevent="editPost" class="container mt-4">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="newTitle">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" v-model="newContent"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">작성자</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="newAuthor">
      </div>
      <input class="btn btn-primary btn-space mb-4" type="submit" value="저장">
      <input class="btn btn-primary mb-4" type="button" value="취소" @click="onCancel"> 
    </form> 
  </div>
</template>

<script>
export default {
    props: {
        dataList: Array
    },
    data() {
        return {
            newTitle: this.dataList.find(item => item.id == this.$route.params.id).title,
            newContent: this.dataList.find(item => item.id == this.$route.params.id).content,
            newAuthor: this.dataList.find(item => item.id == this.$route.params.id).author
        }
    },
    methods: {
        onCancel() {
            this.$router.push(`/detail/${this.$route.params.id}`)
        },
        editPost(){
            if (!this.newTitle) {
                alert("제목을 작성해주세요")
            } else if (!this.newAuthor) {
                alert("작성자를 작성해주세요")
            } else {
              console.log('click')            
              const postEdit = this.dataList.find(data => data.id == this.$route.params.id)         
              postEdit.title = this.newTitle
              postEdit.content = this.newContent
              postEdit.author = this.newAuthor
              const pulledList = JSON.parse(localStorage.getItem("app2")) 
              pulledList.push(postEdit)
              
              const deleteIndex = pulledList.findIndex(item => item.id == this.$route.params.id)
              pulledList.splice(deleteIndex, 1)
              pulledList.sort((a, b) => { return a.id - b.id })

              localStorage.setItem("app2", JSON.stringify(pulledList))
              this.$router.push(`/detail/${this.$route.params.id}`)
            }            
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