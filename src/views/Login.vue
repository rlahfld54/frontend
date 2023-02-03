<template lang="">
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>로그인</h1>
          <div>
            <div class="mb-3">
              <label class="form-label" for="id">아이디</label>
              <input
                class="form-control"
                v-model="userId"
                type="text"
                name="id"
                id="id"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="pwd">비밀번호</label>
              <input
                class="form-control"
                v-model="password"
                type="password"
                name="pwd"
                id="pwd"
              />
            </div>
            <button class="btn btn-outline-primary btn-sm" @click="Login">
              로그인
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
      userId: "",
      password: "",
    };
  },
  methods: {
    Login() {
      let user = {
        userId: this.userId,
        password: this.password,
      };
      console.log(user);

      this.axios
        .post("/login", user, { withCredentials: true })
        .then((response) => {
          console.log(response);
          console.log(response.headers);
          console.log(document.cookie);
          alert(`${user.userId}님 환영합니다~ 로그인 성공! `);
          this.$router.push("dashboard");
        })
        .catch(function (error) {
          console.log(error);
          alert("로그인 실패.. 없는 사용자이거나 다시 시도해주세요");
        });
    },
  },
};
</script>
<style lang=""></style>
