<template>
	
	<div class="login-wrap">
	    <section>
	        <section id="login_bg" class="visible animated fadeInUp" v-if="showBox == 'login'">
	            <div class="container">
	                <div class="row">
	                    <div class="col-md-4 col-md-offset-4">
	                        <div class="login-box">
	                            <h2 class="bigintro">登录</h2>
	                            <div class="divide-40"></div>
	                            <validator name="signinValidation">
		                            <form @submit.prevent="login($signinValidation)" novalidate>
		                                <div class="form-group">
		                                    <i class="fa fa-envelope"></i>
		                                    <input type="text" 
													    	        	v-model="user.email" 
													    	        	v-validate:email="{ required: true, minlength: 3, maxlength: 30, email:true }"
													    	        	class="form-control" 
													    	        	placeholder="邮箱"/>
		                                </div>
		                                <div class="form-group">
		                                    <i class="fa fa-lock"></i>
		                                    <input type="password" 
													              	v-model="user.password" 
													              	v-validate:password="{ required: true }"
													              	class="form-control" 
													              	placeholder="密码" />
		                                </div>
		                                <div>
		                                  <!-- <label class="checkbox">
		                                    <div class="checker"> 
		                                    	<span>
		                                    		<div class="checker">
		                                    			<span>
		                                    				<input type="checkbox" class="uniform">
		                                    			</span>
		                                    		</div>
		                                    	</span>
		                            				</div>
		                                		<span>记住我</span>
		                                	</label> -->
			                                <button type="submit" :disabled="$signinValidation.invalid" class="btn btn-danger">Submit</button>
		                        				</div>
		                        		</form>
		                        	</validator>
			                        <div class="login-helpers">
			                        	<a href="javascript:;" @click="toggle('register')">立即注册</a>
			                        </div>
		                    </div>
		                </div>
		            </div>
	            </div>
	        </section>
	        <section id="register_bg" class="visible animated fadeInUp" v-if="showBox == 'register'">
	            <div class="container">
	                <div class="row">
	                    <div class="col-md-4 col-md-offset-4">
	                        <div class="login-box">
	                            <h2 class="bigintro">注册</h2>
	                            <div class="divide-40"></div>
	                            <validator name="registerValidation">
		                            <form @submit.prevent="register($registerValidation)">
		                                <div class="form-group">
		                                    <i class="fa fa-envelope"></i>
		                                    <input type="text" 
																					v-model="newUser.email"
													    	        	v-validate:email="{ required: true, minlength: 3, maxlength: 30, email:true }"
													    	        	class="form-control" 
													    	        	placeholder="邮箱"/>
		                                </div>
		                                <div class="form-group">
		                                    <i class="fa fa-envelope"></i>
		                                    <input type="text" 
																					v-model="newUser.nickname"
													    	        	v-validate:nickname="{ required: true, nickname:true }"
													    	        	class="form-control" 
													    	        	placeholder="昵称"/>
		                                </div>
		                                <div class="form-group">
		                                    <i class="fa fa-lock"></i>
		                                    <input type="password" 
													              	v-model="newUser.password" 
													              	v-validate:password="{ required: true }"
													              	class="form-control" 
													              	placeholder="密码" />
		                                </div>
		                                <div class="form-group">
		                                    <i class="fa fa-lock"></i>
		                                    <input type="password" 
													              	v-model="newUser.password_repeat" 
													              	v-validate:password="{ required: true }"
													              	class="form-control" 
													              	placeholder="确认密码" />
		                                </div>
		                                <div>
		                                  <!-- <label class="checkbox">
		                                      <div class="checker">
		                                      	<span>
		                                      		<div class="checker">
		                                      			<span>
		                                        			<input type="checkbox" class="uniform">
		                                        		</span>
		                                        	</div>
		                                      	</span>
		                              				</div>
		                              			<span>我同意 </span><a href="#">xxx</a>
		                              		</label> -->
			                                <button type="submit" :disabled="$registerValidation.invalid" class="btn btn-success">Submit</button>
			                        			</div>
		                        		</form>
		                        	</validator>
			                        <div class="login-helpers">
			                        	<a href="javascript:;" @click="toggle('login')">登录</a>
			                        </div>
			                    </div>
			                </div>
			            </div>
	            </div>
	        </section>
	    </section>
	    <script>
	        
	    </script>
	    <div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 100%; width: 1280px; z-index: -999999; position: fixed;"><img src="http://ww2.sinaimg.cn/large/65e4f1e6jw1f8xh6gbnxcj218g0tn78a.jpg" style="margin: 0px; padding: 0px; border: none; width: 1280px; height: 100%; max-height: none; max-width: none; z-index: -999999; left: 0px; top: -351.8px;">
	    </div>
	</div>
</template>

<script>
import { localLogin, localRegister } from '../vuex/actions'

export default {
	vuex:{
    getters:{
      // captchaUrl: ({globalVal}) => globalVal.captchaUrl,
      // logins: ({logins}) => logins.items,
      // token: ({auth}) => auth.token
    },
    actions:{
      localLogin,
      localRegister
    }
  },
  validators: { 
    email (val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
    },
    nickname (val) {
    	return /^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/.test(val)
    }
  },
  data (){
    return {
    	showBox: 'login',
      user: {
        email:'cjh@163.com',
        password:'test'
      },
      newUser: {
      	email:'test' + new Date().getTime() + '@tets.com',
      	nickname: new Date().getTime(),
        password:'test',
        password_repeat: 'test',
        status: 1
      }
    }
  },
  methods: {
    login(signinValidation){
    	console.log('step1: 我要登录！')
      if(signinValidation.valid){
        this.localLogin(this.user)
      }
    },
    register(registerValidation) {
    	console.log('step1: 我要注册！')
      if(registerValidation.valid){
        this.localRegister(this.newUser)
      }
    },
    toggle (name) {
    	this.showBox = name
    }
  }
}
</script>