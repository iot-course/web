## `some lambda`


Gets authorization keys to subscribe to IoT Topic


**Callback / External Call:**

```js
cb(null, body:{ host, accessKeyId, secretKey, sessionToken  })
```

arg / param | type | path
--- | --- | ---
`key` | `string` | `event.Records[0].s3.object.key`
<br/> 
