<template lang="">
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>글쓰기 리스트</h1>
          <div>
            <div class="row mb-3">
              <div class="col-4">
                <button type="button" class="btn btn-primary" @click="logOut">
                  로그아웃
                </button>
              </div>
              <div class="col-4"></div>
              <div class="col-4">
                <button type="button" class="btn btn-primary" @click="write">
                  글쓰기
                </button>
              </div>
            </div>
            <ol class="list-group list-group-numbered">
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.axios.get("/dashboard").then((response) => {
      console.log("글 작성 테이블 : " + response.data);
    });
  },
  methods: {
    write() {
      this.$router.push({ path: "/write" });
    },
    logOut() {
      this.axios.get("/logout").then((res) => {
        res.clearCookie("user");
        alert("로그아웃되었습니다.");
        this.$router.push({ path: "/" });
      });
    },
  },
};
</script>
<style lang=""></style>
