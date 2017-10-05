# IE userData

IE<8 不支持 localStorage，可以用 userData Behavior 替代。

作用域，要求与文档同目录，并且无法改变。

默认永不过期，可以设置 expires 属性。

每个 document 最大 128 KB，每个 domain 最大 1MB。

## 参考

- https://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
- https://github.com/marcuswestin/store.js
