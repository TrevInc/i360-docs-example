---
layout: default
title: "i-360 API Documentation"
---

### Overview

This website contains helpful information and code samples for making the best use of the i-360 API.

Code samples will be presented with the following formatting:

```php
$url = 'https://test-api.i-360.com/1.1/signalr';

$authString = base64_encode(userId + ':');

$request = new HTTPRequest($url, HTTP_METH_PUT);
$request->setRawPostData($json);
$request->addQueryData(array('auth' => $authString))
$request->send();
$response = $request->getResponseBody();
```

#### Tutorials

- [Adding a Contact](http://jekyllrb.com/docs/posts/)
- [Adding a Volunteer](http://jekyllrb.com/docs/posts/)
- [Adding a User to an Email Blast](http://jekyllrb.com/docs/posts/)
