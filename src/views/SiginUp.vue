<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div>
          <div class="mb-3">
            <label for="아이디" class="form-label">아이디</label>
            <input type="text" v-model="userId" required />
          </div>

          <div class="mb-3">
            <label for="이메일" class="form-label">이메일</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="비밀번호" class="form-label">비밀번호</label>
            <input type="text" v-model="password" required />
          </div>
          <div class="mb-3">
            <label for="생년월일" class="form-label">생년월일</label>
            <input type="date" v-model="birthday" required />
          </div>
          <div class="mb-3">
            <label for="성별">성별</label>
            <select name="gender" v-model="gender">
              <option value="">선택</option>
              <option>여자</option>
              <option>남자</option>
            </select>
          </div>

          <div class="mb-3">
            <button class="btn btn-primary btn-lg btn-block" @click="siginUp">
              가입 완료
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
      email: "",
      password: "",
      birthday: "",
      gender: "",
      createtime: "2021-03-24 09:26:25",
      updatetime: "2021-03-24 09:26:25",
    };
  },
  methods: {
    siginUp() {
      if (this.password.length < 4 || this.password.length >= 20) {
        alert("비밀번호는 4자리에서 20자리 이하로 설정해주세요");
      }

      if (this.email == "") {
        alert("이메일을 입력하세요");
        return false;
      }

      if (this.gender == "") {
        alert("성별을 선택하세요");
        return false;
      }

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
      // console.log(this.axios);

      // axios 요청을 하기 전에 데이터 유효성 검사를 한다.
      // 중복된 아이디 유저가 있는 것은 디비를 조회해아하니 이 부분은 백엔드에서 한다.
      this.axios
        .post("/signup", siginUp)
        .then((response) => {
          console.log(response);
          const result = response.data;
          if (result === "successs") {
            alert("회원가입에 성공하셨습니다. 로그인 페이지로 이동합니다.");
            this.$router.push({ path: "/login" });
          } else if (result === "dup-userid") {
            alert("중복된 아이디입니다. 아이디를 변경하세요.");
          }
        })
        .catch((error) => {
          alert("회원가입 실패!! 관리자에게 문의하세요 ㅋㅋ ");
          console.log(error);
          console.log(error.toJSON());
        });
    },
  },
};
</script>
