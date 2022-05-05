
### Vue 响应式原理

通过object.defindProxy

Observer（哦普馊we）负责将数据转换成getter/setter形式；

Dep负责管理数据的依赖列表；是一个发布订阅模式，上游对接Observer，下游对接Watcher

Watcher是实际上的数据依赖，负责将数据的变化转发到外界(渲染、回调)；

首先将data传入Observer转成getter/setter形式；当Watcher实例读取数据时，会触发getter，被收集到Dep仓库中；当数据更新时，触发setter，通知Dep
仓库中的所有Watcher实例更新，Watcher实例负责通知外界


### Vue 生命周期

beforeCreate（k诶特） 在实例初始化之后，数据观测observer 和event、watcher事件配置之前被调用
created 实例已经创建完成，在这一步，以下配置被完成

数据观测
属性和方法的运算
watch/event时间回调
$el尚未生成


beforeMount 在挂载之前被调用，render尚未被调用
mounted el被新创建的vm.$el替换，并挂载到实例上去之后调用
beforeUpdate 数据更新时，被调用，发生在虚拟Dom重新渲染和打补丁之前
update 由于数据更改导致的虚拟Dom重新渲染和打补丁，在这之后调用
beforeDestroy 实例销毁之前调用
destroyed 实例销毁之后调用，调用后Vue实例的所有东西都会被解绑，所有的事件监听会被移除，子实例被销毁，该钩子在服务端渲染期间不被调用
keep-alive（activated & deactivated）
