<template>
  <div class="about">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1>회원가입</h1>
          <form class="validation-form" method="post" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="name">아이디</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder=""
                  v-model="userId"
                  required
                />
                <div class="invalid-feedback">아이디을 입력해주세요.</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="nickname">비밀번호</label>
                <input
                  type="text"
                  class="form-control"
                  id="nickname"
                  placeholder=""
                  v-model="password"
                  required
                />
                <div class="invalid-feedback">비밀번호을 입력해주세요.</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">이메일</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="you@example.com"
                required
              />
              <div class="invalid-feedback">이메일을 입력해주세요.</div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="address">생년월일</label>
                <input
                  type="date"
                  class="form-control"
                  id="address"
                  v-model="birthday"
                  min="1990-01-01"
                  max="2023-01-24"
                  required
                />
                <div class="invalid-feedback">생년월일를 입력해주세요.</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="root">성별</label>
                <select
                  class="custom-select d-block w-100"
                  v-model="gender"
                  id="root"
                >
                  <option value=""></option>
                  <option>여자</option>
                  <option>남자</option>
                </select>
                <div class="invalid-feedback">성별을 선택해주세요.</div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="aggrement"
                required
              />
              <label class="custom-control-label" for="aggrement"
                >개인정보 수집 및 이용에 동의합니다.</label
              >
            </div>
            <div class="mb-4"></div>
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="siginUp"
              type="submit"
            >
              가입 완료
            </button>
          </form>
          <!-- <button class="btn btn-primary btn-lg btn-block" @click="siginUp">
            테스트
          </button> -->
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
      email: "",
      password: "",
      birthday: "",
      gender: "",
      createtime: "2021-03-24 09:26:25",
      updatetime: "2021-03-24 09:26:25",
    };
  },
  created() {
    // console.log(this.axios);
  },
  methods: {
    siginUp() {
      let siginUp = {
        userId: this.userId,
        email: this.email,
        password: this.password,
        birthday: this.birthday,
        gender: this.gender,
        createtime: this.createtime,
        updatetime: this.updatetime,
      };
      console.log(siginUp);

      this.axios
        .post("/signup", siginUp)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$router.push("login");
    },
  },
};
</script>
