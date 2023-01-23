<template lang="">
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>로그인</h1>
          <form action="" method="post">
            <div class="mb-3">
              <label class="form-label" for="id">아이디</label>
              <input class="form-control" type="text" name="id" id="id" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="pwd">비밀번호</label>
              <input class="form-control" type="password" name="pwd" id="pwd" />
            </div>
            <button class="btn btn-outline-primary btn-sm" type="submit">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.axios.get("/login").then((response) => {
      console.log("유저 테이블 : " + response.data);
    });
  },
};
</script>
<style lang=""></style>
