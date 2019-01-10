# 小程序map组件上实现cover-input 和 cover-select

现在是2019年1月初，小程序官方还没有发布`cover-input`等组件，在map层级之上可操作的组件只有`cover-view`、`cover-image`

#### cover-input 

map组件属于原生组件，层级最高，能在map层级之上可操作的组件只有`cover-view`、`cover-image`，现有需求在map组件上层浮现弹框，可输入（input）

在真机上原生input组件嵌在<cover-view />内会被忽略导致

实现方法：控制input的焦点

#### cover-select

在cover-view标签里实现cover-select是根据点击事件控制select-list的显示和隐藏，在list中选中的item放到显示区  

使用`data-*`共同属性将选中的item传出

关于e.target和e.currentTarget的区别：
* e.target是返回触发事件的对象
* e.currentTarget返回的是绑定事件的对象

通常情况下target和currentTarget是一致的，我们只要使用target即可，但有一种情况必须区分这两者的关系，那就是在父子
嵌套的关系中，父元素绑定了事件，单击了子元素（根据事件流，在不阻止事件流的前提下他会传递至父元素，导致父元素的事件处
理函数执行），这时候currentTarget指向的是父元素，因为他是绑定事件的对象，而target指向了子元素，因为他是触发事件的
那个具体对象 