<template lang="">
  <div class="container text-center">
    <h1>글쓰기</h1>
    <div class="row">
      <div class="col">
        <div class="input-group flex-nowrap mb-3">
          <span class="input-group-text" id="addon-wrapping">제목</span>
          <input
            type="text"
            v-model="title"
            class="form-control"
            placeholder="제목을 입력하세요"
            aria-label="글쓰기제목"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">본문</span>
          <textarea
            class="form-control"
            v-model="contents"
            aria-label="With textarea"
            rows="20"
            cols="50"
          >
          야야..로그아웃 기능 안만들었다. 쿠키 생성 시발 ㅋㅋㅋ 로그인 성공하면 쿠키 만들어서 저장해야됨
          글쓰는 라이브러리?를 만들면 좋겠지만 그것은 시간이 나면 하는 것이 좋겠소 허허
          <br/>
          사진,동영상 첨부하는 기능, 태그 입력 등등
          <ul>
            <li>사진</li>
            <li>동영상</li>
            <li>태그 입력</li>
            <li>엑셀 올리기</li>
            <li>차트??ㅋㅋ</li>
            
          </ul>
        </textarea
          >
        </div>
        <div class="row mt-3">
          <div class="col-4"></div>
          <div class="col-4"></div>
          <div class="col-4">
            <button type="button" class="btn btn-primary" @click="makeContents">
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      contents: "",
      currentTime: "",
    };
  },
  methods: {
    timestamp() {
      var today = new Date();
      // 미국시간 기준이니까 9를 더해주면 대한민국 시간됨
      today.setHours(today.getHours() + 9);
      // 문자열로 바꿔주고 T를 빈칸으로 바꿔주면 yyyy-mm-dd hh:mm:ss 이런 형식 나옴
      return today.toISOString().replace("T", " ").substring(0, 19);
    },
    makeContents() {
      this.currentTime = this.timestamp();

      let temp = {
        title: this.title,
        contents: this.contents,
        currentTime: this.currentTime,
        userid: document.cookie.split("=")[1],
      };
      console.log(temp);
      console.log(document.cookie);
      this.axios
        .post("/write", temp, {
          // headers: {
          //   Authorization: "Bearer" + varToken,
          // },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("글생성 실패!" + error);
          console.log(error.toJSON());
        });
    },
  },
};
</script>
<style lang=""></style>
