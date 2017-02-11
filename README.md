# FreeCodeCamp API: File Metadata Microservice
## User stories:
1. I can submit a FormData object that includes a file upload.
2. When I submit something, I will receive the file size in bytes within the JSON response

**Hint:** You may want to use this package: https://www.npmjs.com/package/multer

## Example query usage:

```text
https://fcc-325-filemetadata.herokuapp.com/
```

## Example query output:

```text
https://fcc-325-filemetadata.herokuapp.com/upload
```

```js
{
	"name":"haveagoodday.jpg",
	"size":35656,
	"date":"2017-02-11 21:40:15",
	"type":"image/jpeg"
}
```
