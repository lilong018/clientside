import Vue from 'vue'
import VueRouter from 'vue-router'
const TestApi = () => import('@/components/views/tools/testApi.vue') // 僅供研發時使用api測試

const Admin = () => import('@/components/views/admin.vue') //背景
const Welcome = () => import('@/components/views/welcome.vue') //未登入-欢迎画面
const Login = () => import('@/components/views/login.vue') //未登入-登录画面
const ForgetPassword = () => import('@/components/views/forgetPassword.vue') //未登入-忘记密码
const Register = () => import('@/components/views/register.vue') //未登入-注册画面
const RegisterSuccess = () => import('@/components/views/registerSuccess.vue') //未登入-注册成功
const Home = () => import('@/components/views/home.vue') //未登入-注册画面

const Account = () => import('@/components/views/account/payment/payment.vue') // 账户入口

const PaymentAdd = () => import('@/components/views/account/payment/add/paymentAdd.vue') // 添加电子帐户
const PaymentAdd3 = () => import('@/components/views/account/payment/add/paymentAdd_step3.vue') // 电子账户激活
const PaymentAdd4 = () => import('@/components/views/account/payment/add/paymentAdd_step4.vue') // 电子账户完成
const Bank = () => import('@/components/views/account/bank/bank.vue') // 銀行帐户
const Message = () => import('@/components/views/enterprise/message.vue') // 基本信息
const SafeSettings = () => import('@/components/views/enterprise/safeSettings.vue') // 安全

Vue.use(VueRouter)
const routes = [
  {
    path: '*',
    name: 'root',
    redirect: 'welcome', //未登入時
    //redirect: 'home', //已登入時
    components: {
      app: Admin, // app router-view载入admin.vue
    },
    children: [
      {
        path: 'testApi',
        name: 'testApi',
        components: {
          appAdmin: TestApi, // 僅供研發時使用api測試
        },
      },
      {
        path: 'welcome',
        name: 'welcome',
        components: {
          appAdmin: Welcome, // 登入註冊
        },
      },
      {
        path: 'login',
        name: 'login',
        components: {
          appAdmin: Login, // 登入
        },
      },
      {
        path: 'forgetPassword',
        name: 'forgetPassword',
        components: {
          appAdmin: ForgetPassword, // 忘記密碼
        },
      },
      {
        path: 'register',
        name: 'register',
        components: {
          appAdmin: Register, // 註冊
        },
      },
      {
        path: 'registerSuccess',
        name: 'registerSuccess',
        components: {
          appAdmin: RegisterSuccess, // 註冊成功
        },
      },
      {
        path: 'home',
        name: 'home',
        components: {
          appAdmin: Home, // 登入時的首頁
        },
      },
      {
        path: 'account',
        name: 'account',
        components: {
          appAdmin: Account, // 渠道账户-电子账户
        },
      },
      {
        path: 'account/payment',
        name: 'payment',

        components: {
          appAdmin: Account, // 渠道账户-电子账户
        },
      },
      {
        path: 'account/payment/add',
        name: 'paymentAdd',
        components: {
          appAdmin: PaymentAdd, // 添加电子账户
        },
      },
      {
        path: 'account/payment/add/activation',
        name: 'paymentAddActivation',
        components: {
          appAdmin: PaymentAdd3, // 电子账户激活
        },
      },
      {
        path: 'account/payment/add/done',
        name: 'paymentAddDone',
        components: {
          appAdmin: PaymentAdd4, // 电子账户完成
        },
      },
      {
        path: 'account/bank',
        name: 'bank',
        components: {
          appAdmin: Bank, // 渠道账户-电子账户
        },
      },
      {
        path: 'enterprise/message',
        name: 'message',
        components: {
          appAdmin: Message, // 基本信息
        },
      },
      {
        path: 'enterprise/safeSettings',
        name: 'safeSettings',
        components: {
          appAdmin: SafeSettings, // 安全中心
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
