---
layout: page
title: "PUT Contact"
category: ref
date: 2015-06-26 12:31:54
---

### Overview

This method adds a contact. It receives in the PUT request a
ContactImportRequest object, which contains a collection of Contact objects.

---
#### ContactImportRequest
---

| Name  	| Description  	| Type  	| Additional Info  	|
|---	|---	|---	|---	|
| Contacts  	| The contacts to import  	| Collection of Contact  	| None  	|
| EmailNotification  	| Whether an email should be sent to the user on completion of import.  	| Boolean  	| None  	|
| ApiNotification	  	| Whether an API user notification should be sent on completion of import.	| Boolean  	| None  	|
| CallbackUrl  	| If ApiNotification is true, the address to POST the Import object to.  	| String  	| None  	|
  
---

### Example


---
#### PHP
---
```php
$url = 'https://test-api.i-360.com/1.1/signalr';

$authString = base64_encode(userId + ':');

$request = new HTTPRequest($url, HTTP_METH_PUT);
$request->setRawPostData($json);
$request->addQueryData(array('auth' => $authString))
$request->send();
$response = $request->getResponseBody();

