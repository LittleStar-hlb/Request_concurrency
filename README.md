# 并发请求

## 初始化

```javascript
/**
 * @constructor
 * @param {Array<Function>} tasks - 要执行的任务数组，每个任务都返回一个 Promise。
 * @param {number} limit - 同时执行的最大任务数。
 */
const concurrency = new Concurrency(tasks, limit);
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
    // 处理成功结果
  })
  .catch(() => {
    // 处理错误结果
  });
```
