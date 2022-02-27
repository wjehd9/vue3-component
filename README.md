# vue3-component
vue3-component

#0-1. 전역 component 사용하는 예제
<pre>
<code>
<hr>  
<test-0-a></test-0-a>
</code>
</pre>

### <!-- #0-2. 지역 component 사용하는 예제 -->
<hr>  
<test-0-b></test-0-b>

### <!-- #1. component에 props를 전달하는 예제 -->
<hr>  
<test-1 label="My Todo Item 1"></test-1>
<test-1 label="My Todo Item 2" v-bind:done="true"></test-1>

### <!-- #2-1. component에 props를 여러 개 전달하는 예제 -->
<hr>  
<test-2 name="Eric" age="25"></test-2>
<test-2 name="John"></test-2>
<test-2 ></test-2>

### <!-- #2-2. component에 data에 있는 값을 props로 전달하는 예제 --> 
<hr>     
<test-2 v-bind:name="animal"></test-2>

### <!-- #3. html 태그 내에 camelCase와 kebab-case로 속성명을 사용한 예제 -->
<hr>    
<test-3 v-bind:personAge="2"></test-3>
<test-3 v-bind:personAge="age"></test-3>
<test-3 person-age="5"></test-3>
<test-3 v-bind:person-age="29"></test-3>

### <!-- #4. 버튼 클릭에 따른 동적 컴포넌트를 보여주는 예제 -->  
<hr>  
<button v-on:click="activeTab = 'TabA'">Tab-A</button>
<button v-on:click="activeTab = 'TabB'">Tab-B</button>
<button v-on:click="activeTab = 'TabC'">Tab-C</button>
<test-4-a v-if="activeTab === 'TabA'"></test-4-a>
<test-4-b v-if="activeTab === 'TabB'"></test-4-b>
<test-4-c v-if="activeTab === 'TabC'"></test-4-c>

### <!-- #5. input 태그에서 v-model 디렉티브를 이용하여 컴포넌트 사이에서 값을 넘겨받는 것을 보여주는 예제 --> 
<hr>  
<input type="text" v-model="car">
<test-5 v-model="car"></test-5>

### <!-- #6. 컴포넌트에서 slot을 이용하여 하위 컴포넌트의 내용을 재정의하는 예제 --> 
<hr>  
<!-- <test-6 content="Card Content 1"></test-6>
<test-6 content="Card Content 2"/> -->
<test-6>Card Content 1</test-6>
<test-6><h2>Card Content 2</h2></test-6>
<test-6><img src="https://picsum.photos/200" /></test-6>
<test-6></test-6>

### <!-- #7. 컴포넌트에서 keepalive를 사용하여 컴포넌트의 전환이 있더라도 데이터를 유지할 수 있음을 보여주는 예제 --> 
<hr>  
<button v-on:click="activeTab2 = 'TabA'">Tab-A</button>
<button v-on:click="activeTab2 = 'TabB'">Tab-B</button>
<button v-on:click="activeTab2 = 'TabC'">Tab-C</button> 
<button v-on:click="activeTab2 = 'TabD'">Tab-D</button> 
<test-7-a v-if="activeTab2 === 'TabA'"></test-7-a>
<test-7-b v-if="activeTab2 === 'TabB'"></test-7-b>
<keep-alive>
  <test-7-c v-if="activeTab2 === 'TabC'"></test-7-c>
</keep-alive> 
<test-7-c v-if="activeTab2 === 'TabD'"></test-7-c>

### <!-- #8. 부모와 자식 컴포넌트를 보여주는 예제 --> 
<hr>
<test-8-a></test-8-a>

### <!-- #9. 컴포넌트와 라우터를 이용한 예제 --> 
<hr>
<div id="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
</div>
<router-view></router-view>

### <!-- #10-1. 비동기 컴포넌트 예제 1 --> 
<hr>
<test-10-a></test-10-a>

### <!-- #10-2. 비동기 컴포넌트 예제 2 --> 
####<!-- composition API = 컴포넌트의 로직을 개선하는 API -->
<hr>
<test-10-b></test-10-b>

## <!-- 컴포넌트 2차 자료 -->
### <!-- #11. 부모 컴포넌트에서 자식 컴포넌트를 참조하는 기능 -->
<hr>
<test-11-a></test-11-a>

### <!-- #12. once를 이용하여 캐시를 한 번만 호출하게 함 -->
<hr>
<test-12 v-once v-bind:receive="line"></test-12>
