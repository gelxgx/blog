import{q as e,g as n,K as a}from"./common-1984dd55.js";const r='{"title":"【TypeScript第一期】基础类型与接口","frontmatter":{"date":"2021-11-24","title":"【TypeScript第一期】基础类型与接口","tags":["TypyScript"],"describe":"学习 TS基础类型与接口"},"headers":[{"level":3,"title":"1. 食用Typescript","slug":"_1-食用typescript"},{"level":3,"title":"2.类型","slug":"_2-类型"},{"level":3,"title":"3. 接口","slug":"_3-接口"}],"relativePath":"docs/TypeScript/ts-type-interface.md","lastUpdated":1646063815125.8818}';var t={};const d=[a('<h3 id="_1-食用typescript"><a class="header-anchor" href="#_1-食用typescript" aria-hidden="true">#</a> 1. 食用Typescript</h3><p>在使用Typescript之前，我只知道它是一个可以支持类型检查的JavaScript超集，从今天开始决定重新好好认识Typescript，为之后接触React和阅读其他开源库源码做准备。</p><h3 id="_2-类型"><a class="header-anchor" href="#_2-类型" aria-hidden="true">#</a> 2.类型</h3><p>ts支持着与js几乎相同的数据类型，并且在js上还支持了其他的类型</p><h4 id="_2-1-基础类型"><a class="header-anchor" href="#_2-1-基础类型" aria-hidden="true">#</a> 2.1 基础类型</h4><div class="language-"><pre><code>// 布尔\nlet isBoolean:boolean = true;\n\n// 数字\nlet isNum:number = 6;\n\n//　字符串\nlet isStr:string = &#39;gelx&#39;\n\n// 数组\n// 这里有两种写法，一种是直接在元素后加[]\n// 另一种是使用泛型(?)后面会继续了解这是啥\n\n// 第一种写法\nlet isNumArr: number[] = [1,2,3]\nlet isStrArr: string[] = [&#39;g&#39;,&#39;e&#39;,&#39;l&#39;,&#39;x&#39;]\n\n// 第二种写法\nlet isArr:Array&lt;number&gt; = [1,2,3]\n\n// null &amp;&amp; undefined\n// 他们是所有类型的子集，可以赋值在任何类型上\nlet n:null = null\nlet u:undefined = undefined\n\n// Object\n\nlet obj:object = {x:1}\n</code></pre></div><h4 id="_2-2-拓展类型"><a class="header-anchor" href="#_2-2-拓展类型" aria-hidden="true">#</a> 2.2 拓展类型</h4><h5 id="_2-2-1-元组"><a class="header-anchor" href="#_2-2-1-元组" aria-hidden="true">#</a> 2.2.1 元组</h5><p>表示一个已知数量和类型的数组，数量和类型不受限制</p><div class="language-"><pre><code>let makeTup:[string, number, string]\n\nx = [&#39;gelx&#39;, 18, &#39;cm&#39;]\n</code></pre></div><h5 id="_2-2-2-枚举"><a class="header-anchor" href="#_2-2-2-枚举" aria-hidden="true">#</a> 2.2.2 枚举</h5><p>为一组数值赋予意义，可以自定义值的数值</p><div class="language-"><pre><code>enum Name {xm,xh,xb}\n\nlet name:Name = Name.xm\n</code></pre></div><p>ts这个写法，转换为js之后是这样的</p><div class="language-"><pre><code>var Name;\n(function (Name) {\n    Name[Name[&quot;xm&quot;] = 0] = &quot;xm&quot;;\n    Name[Name[&quot;xh&quot;] = 1] = &quot;xh&quot;;\n    Name[Name[&quot;xb&quot;] = 2] = &quot;xb&quot;;\n})(Name || (Name = {}));\nvar n = Name.xm\n</code></pre></div><p>其实就是定义了一个变量，用一个自执行的函数，往这个变量里添加对应参数相关的序号和内容，所以在官方文档中，枚举中的元素可以改变顺序</p><div class="language-"><pre><code>enum Name {xm=1 ,xh,xb}\n\nlet name:Name = Name.xm\n\nlet numb:string = Name[2] \nconsole.log(numb)  // xh\n</code></pre></div><h5 id="_2-2-3-万物皆可any"><a class="header-anchor" href="#_2-2-3-万物皆可any" aria-hidden="true">#</a> 2.2.3 万物皆可any</h5><p>any表示可以是任何类型，在我们不清楚这个变量的类型时候，可以采用any进行标记，这可以使得这个变量可以传入所有的类型</p><div class="language-"><pre><code>let isAny: any\n\nisAny = &#39;string&#39; // ok\nisAny = false // ok\n</code></pre></div><h5 id="_2-2-4-void"><a class="header-anchor" href="#_2-2-4-void" aria-hidden="true">#</a> 2.2.4 void</h5><p>void跟any相反，它表示没有任何类型，一般用于没有返回值的函数声明中</p><div class="language-"><pre><code>function tVoid(): void {\n\tconsole.log(&#39;gelx&#39;)\n}\n</code></pre></div><h5 id="_2-2-5-never"><a class="header-anchor" href="#_2-2-5-never" aria-hidden="true">#</a> 2.2.5 never</h5><p>这个类型表示永不存在的类型，比如抛出异常的函数、不会有返回值的函数</p><div class="language-"><pre><code>function nError(msg:string): never {\n\tthrow new Error(msg)\n}\n</code></pre></div><h4 id="_2-3-类型断言"><a class="header-anchor" href="#_2-3-类型断言" aria-hidden="true">#</a> 2.3 类型断言</h4><p>在进行对某一个any类型的属性赋值或对其进行参数、内容查询的时候，我们可以在赋值时对属性进行断言</p><div class="language-"><pre><code>let anyValue: any = &quot;maybe is string&quot;\n\n// 这里有两种写法，\n// 尖括号写法 不可用于JSX\nlet stringL: number =(&lt;string&gt;anyValue).length\n\n// as写法，可用于JSX\n\nlet strL:number = (anyValue as string).length\n</code></pre></div><h3 id="_3-接口"><a class="header-anchor" href="#_3-接口" aria-hidden="true">#</a> 3. 接口</h3><p>定义： 对象类型的描述，并且还可以对类的一部分行为进行抽象</p><h4 id="_3-1-简单使用"><a class="header-anchor" href="#_3-1-简单使用" aria-hidden="true">#</a> 3.1 简单使用</h4><p>最简单的使用：直接定义接口内部的参数。此时若添加的参数比定义的少、多，都不被允许，并抛出错误</p><div class="language-"><pre><code>interface testInter {\n\tname: string;\n  age: num\n}\n\n// 被允许的情况\nlet gelx: testInter = {\n\tname: &#39;gelx&#39;;\n  age: 22;\n}\n\n// 不被允许的情况：少参数\nlet gelxError1: testInter = {\n\tname: &#39;gelx&#39;\n}\n\n// 不被允许的情况：多参数\nlet gelxError2: testInter = {\n\tname: &#39;gelx&#39;;\n  age: 24;\n  toll: 183\n}\n</code></pre></div><hr><h4 id="_3-2-可选属性"><a class="header-anchor" href="#_3-2-可选属性" aria-hidden="true">#</a> 3.2 可选属性</h4><p>如果不确定参数是否是需要的，可以通过设置<code>?</code>设置可选参数</p><p>但这依旧不能添加未定义的参数</p><div class="language-"><pre><code>interface testChoosable {\n\tname: string;\n  age?: num\n}\n\n// 被允许的情况\nlet gelx: testChoosable  = {\n\t name: &#39;gelx&#39;\n}\n\nlet gelx: testChoosable = {\n\tname: &#39;gelx&#39;,\n  age: 23;\n}\n\n\n// 不被允许的情况\nlet gelx: testChoosable = {\n\tname: &#39;gelx&#39;,\n  type: &#39;people&#39;\n}\n</code></pre></div><h4 id="_3-3-任意属性"><a class="header-anchor" href="#_3-3-任意属性" aria-hidden="true">#</a> 3.3 任意属性</h4><p>如果希望接口可以有任何属性，可以使用<code>[propName: any]:any</code>定义一个任意属性取任意类型的值</p><p><strong>如果定义了任意属性，确定属性和可选属性的类型都必须是它的类型子集</strong></p><hr><div class="language-"><pre><code>interface person {\n\tname: string;\n  age?: number;\n  [propsName: any]:any\n}\n\nlet gelx : Preson = {\n\tname: &#39;gelx&#39;,\n  age: 22,\n  sex: &#39;man&#39;\n}\n</code></pre></div><h4 id="_3-4-只读属性"><a class="header-anchor" href="#_3-4-只读属性" aria-hidden="true">#</a> 3.4 只读属性</h4><p>可以理解为与<code>const</code>类似，当我们想定义一些只能在创建时赋值的字段时，可以使用<code>readonly</code>定义只读属性</p><div class="language-"><pre><code>interface readOnlyTest {\n\treadonli id: number;\n\tname: string;\n\tage: number\n  [propName:any] :any\n}\n\nlet gelx: readOnlyTest = {\n\tname: &#39;gelx&#39;,\n  age: 22\n}\n\n// 此时会报错\ngelx.id = 2021\n</code></pre></div><p>这里的只读属性的约束，<strong>存在于第一次给对象赋值时，而不是第一次给只读属性赋值</strong></p>',48)];t.render=function(a,r,t,s,i,l){return e(),n("div",null,d)};export{r as __pageData,t as default};