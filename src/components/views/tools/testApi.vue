<template>
  <div class="card" style="height: 600px">
    API Test Template

    <table class="table table-bordered">
      <tr>
        <td>
          {{ this.apiData }}
          <br />
          {{ this.apiData.error }}
        </td>
      </tr>
      <tr>
        <td><b-button @click="getData()">getData</b-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'testApi',
  data() {
    return {
      apiData: '',
      formData: {
        name: 'admin',
        password: '123456',
        captcha: '2254',
      },
    }
  },
  methods: {
    getData() {
      this.axios({
        method: 'post',
        baseURL: 'http://120.79.29.46:8080/',
        url: 'platform-admin/sys/login',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        // data: {
        //   name: 'admin',
        //   password: '123456',
        //   captcha: '2254',
        // },
      })
        .then((res) => {
          console.log(res)
          this.apiData = res.data
        })
        .catch((err) => {
          console.log(err.data.msg)
          this.apiData.msg = err.data.msg
          this.apiData.code = err.data.code
        })
    },
  },
}
</script>