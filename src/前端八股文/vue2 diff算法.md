# vue2 diff算法.md

## 什么是diff算法
 本质是比较两个JS对象（虚拟dom）的差异


```mermaid
graph TD
A[数据改变] --触发--> B[setter]
B --触发--> C[Dep.notify]
C -- 通知订阅者--> D["patch(oldVnode,newVnode)"]
D --> E{isSameVnode}
E --是同类型的标签-->F[patchVnode]
E -- 不是同类型标签 -->G[直接替换]
F -->H{oldVnode和newVnode是否相等}
H -- 相等-->I[直接return]
H --不相等-->J[分情况]
J -->K1[oldVnode和newVnode都是文本节点]
K1 --执行-->L1[用新的文本代替旧文本]
J -->K2[oldVnode没有子节点，newVnode有子节点]
K2--执行-->L2[增加新的子节点]
J -->K3[oldVnode有子节点，newVnode没有子节点]
K3--执行-->L3[删除旧的子节点]
J -->K4[oldVnode和newVnode都有子节点]
K4--执行-->L4[updateChildren]

```

①依次比较，当比较成功后退出当前比较
②渲染结果以newVnode为准
③每次比较成功后start点和end点向中间靠拢
④)当新旧节点中有一个start点跑到end点右侧时终止比较
⑤如果都匹配不到，则旧虚拟DOM key值去比对新虚拟DOM的key值，如果key相同则复用，并移动到新虚拟DOM的位置