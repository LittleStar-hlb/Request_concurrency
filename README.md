# 并发请求

## 开始

```javascript
/**
 * @constructor
 * @param {number} limit - 同时执行的最大任务数。
 */
const concurrency = new Concurrency(limit);
```

## 调用方法

```javascript
/**
 * @method all
 * @description 并发执行任务并返回一个 Promise。
 * @param {Array<Promise} tasks - 传入一个 Promise 数组。
 * @returns {Promise} 当所有任务完成时解析的 Promise。
 */

// 1.
concurrency.all(tasks).then((res) => {
  // 处理结果
});
// 2.
await concurrent.all(tasks);
```
