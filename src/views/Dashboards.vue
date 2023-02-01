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
              <div class="col-4">
                총 글의 양 : {{ this.totalContentsLength }}
              </div>
              <div class="col-4">
                <button type="button" class="btn btn-primary" @click="write">
                  글쓰기
                </button>
              </div>
            </div>
            <ol class="list-group list-group-numbered">
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
                v-for="item in contentsList"
                :key="item.id"
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{{ item.title }}</div>
                  {{ item.contents }}
                </div>
                <span class="badge bg-primary rounded-pill">{{
                  item.likes
                }}</span>
              </li>
            </ol>

            <h1 class="mt-5">pagination</h1>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="item in paginationLenght"
                  :key="item"
                  @click="pagination"
                >
                  <a class="page-link" href="#"> {{ item }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 페이지 네이션을 클릭할때마다 일정한 양의 데이터를  axios로 불러온다.
// 여기서는 아직 디비에 데이터를 안쌓아놨기때문에 임시로 빅데이터를 만들어줬다.
// 나는 글 3개씩 불러올려고 한다. 글 총 12개
export default {
  data() {
    return {
      currentPage: 1,
      nextPage: 2,
      paginationLenght: [1, 2, 3, 4, 5],
      totalContentsLength: 0,
      contentsList: [
        {
          id: 1,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 2,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 3,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
      ],
      testBigData: [
        {
          id: 1,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 2,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 3,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 4,
          title: "네번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 5,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 6,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 7,
          title: "일곱번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 8,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 9,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 10,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 11,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 12,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 13,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 14,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
        {
          id: 15,
          title: "첫번째 글입니다.",
          contents: "환영합니다~!",
          likes: 14,
        },
      ],
    };
  },
  created() {
    this.axios.get("/dashboard").then((response) => {
      console.log("글 작성 테이블 : " + response.data);
      // 여기에서 임시 3가지 길이를 가지고 있는 배열에 푸시해준다.
      // 모든 데이터를 다 가져오는 것이 아니라 딱 3개만 요청 하는 거임
      // 초기 글을 보여줘야하니까!!
    });
  },
  mounted() {
    let temp = [this.testBigData[0], this.testBigData[1], this.testBigData[2]];
    this.totalContentsLength = this.testBigData.length;
    this.contentsList = temp;
  },
  watch: {},
  computed: {},
  methods: {
    pagination() {
      // 현재 페이지를 변경해준다.
      this.contentsList = []; // 내용물 비워주고 새로운 데이터 추가하기
      this.contentsList.push(somthing);
    },
    write() {
      this.$router.push({ path: "/write" });
    },
    logOut() {
      // 로그아웃하면 서버에서 쿠키가 사라지는 함수 써놨음
      this.axios.post("/logout").then((res) => {
        alert("로그아웃되었습니다.");
        this.$router.push({ path: "/" });
      });
    },
  },
};
</script>
<style lang=""></style>
