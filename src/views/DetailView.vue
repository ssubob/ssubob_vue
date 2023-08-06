<template>
    <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.112.5">
    <title>Album example · Bootstrap v5.3</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/album/">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <meta name="theme-color" content="#712cf9">
    </head>

  <div>
    <!-- 상세 페이지의 내용이 들어갈 영역 -->
    
    <div class="container">
      <h1>  </h1>
      <!-- 상세 정보를 표시하는 코드들 추가 -->

      <div >
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-1 justify-content-center"> 
      <div class="col">
        <div class="card shadow-sm">
           <a :href="place.url" >
            <img :src="place.image || defaultImage" class="bd-placeholder-img card-img-top" width="100%" height="225"/>
            </a>
          <div class="card-body">
            <p class="card-text" ><strong> {{place.title}} </strong></p>
            <hr/>
                <p class="text-center"> {{place.title}} </p>
                <p style = "color: #1B76FB;" class = "text-center"> <strong> 숭실대학교에서 </strong> {{place.distance}}M </p>
                <!--<button type="button" class="btn btn-sm btn-outline-secondary">View</button> 
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
              <small class="text-body-secondary"></small>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      

      <!-- 댓글 입력 창 시작 -->
     <div class="container my-4">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <h2 class="text-center mb-3">식당에 대한 댓글</h2>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent = "submitComment">
               <input type="hidden" id="loggedInUser" v-model="loggedInUsername">
              <div class="mb-3">
                <label for="comment" class="form-label">댓글</label>
                <textarea class="form-control" id="comment" rows="3" v-model= "newComment" placeholder="댓글을 작성해주세요."></textarea>
              </div>
              <button type="submit" class="btn btn-primary">등록</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      <!-- 댓글 입력 창 끝 -->

      <!-- 댓글 리스트 시작 -->
      <div class="container my-4">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div v-for="comment in comments" :key="comment.id" class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">{{ comment.name }}</h5>
                <p class="card-text">{{ comment.content }}</p>
                <p class="card-text"><small class="text-muted">{{ comment.createdAt }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 댓글 리스트 끝 -->
      
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
        loggedInUsername: "username",
        place: {},
        comments : [],
        defaultImage: require("../assets/riceicon.png"),
        newComment: ""
    };
  },
  created(){
    this.getPlace();
  },
  methods: {
    async getPlace() {
      const url =  process.env.VUE_APP_SERVER_URL + "/place/" + this.$route.params.id;
      
      const headers={
        "Authorization":"Bearer "+this.$store.getters.getToken
      }
      
      await axios({
        method: "get",
        url,
        headers
      })
      .then((res)=>{
        console.log(res)
        this.place = res.data
        this.comments = this.place.comments;
      })
      .catch((e)=>{
        console.log(e);
        this.$store.commit("setToken",{token:null});
        this.$router.push("/login");
      })

    },
    async submitComment() {
      // 폼 유효성 검사를 할 수 있습니다.
      if (this.newComment.trim() === "") {
        alert("Please enter a comment.");
        return;
      }
  
      const url = process.env.VUE_APP_SERVER_URL+ "/comment/" + this.place.id;
      const data = {
        name: this.$store.getters.getNickname,
        content: this.newComment // 폼에서 입력한 댓글 내용
        // 추가 필요한 데이터를 여기에 작성하세요.
      };
      const headers={
        "Authorization":"Bearer "+this.$store.getters.getToken
      }

      console.log(this.$store.getters.getNickname)
      await axios({
        method: "post",
        url,
        data,
        headers
      })
      .then(()=>{
        this.newComment = "";
        this.getPlace();
      })
      .catch((e)=>{
        console.log(e);
        this.$store.commit("setToken",{token:null});
        this.$router.push("/login");
      })


     
  }
  }
};
</script>



