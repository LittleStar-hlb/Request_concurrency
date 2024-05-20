# 并发请求

## 初始化

```javascript
/**
 * @constructor
 * @param {Array} tasks - 要执行的任务数组（promises）。
 * @param {number} limit - 同时执行的最大任务数。
 */
const concurrency = new Concurrency(array, limit);
```

## 调用方法

```javascript
/**
 * @method execute
 * @description 并发执行任务并返回一个 Promise。
 * @returns {Promise} 当所有任务完成时解析的 Promise。
 */
concurrency
  .execute()
  .then(() => {
    // 处理成功完成
  })
  .catch(() => {
    // 处理错误
  });
```
