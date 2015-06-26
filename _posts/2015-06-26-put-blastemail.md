---
layout: page
title: "PUT BlastEmail"
category: ref
date: 2015-06-26 14:27:38
---

### Overview

This method adds blast email statistics for a specific campaign. It receives in the `PUT` request a `BatchEmailRequest` object, which contains a collection of `BlastCampaign` objects.

---
#### BlastCampaign
---

| Name  	| Description  	| Type  	| Additional Info  	|
|---	|---	|---	|---	|
| BlastCampaigns | | Collection of `BlastCampaign` | None |

---

### Example


---
<div class="container-fluid">
  <ul class='nav nav-tabs' data-tabs='tabs'>
    <li><a class="js">JavaScript</a></li>
    <li class='active'><a class="php">PHP</a></li>
    <li><a class="cs">C#.NET</a></li>
    <li><a class="ror">Ruby on Rails</a></li>
  </ul>
</div>
{% highlight php %}
<?php
$url = 'https://test-api.i-360.com/1.1/signalr';

$authString = base64_encode(userId + ':');

$request = new HTTPRequest($url, HTTP_METH_PUT);
$request->setRawPostData($json);
$request->addQueryData(array('auth' => $authString))
$request->send();
$response = $request->getResponseBody();
?>
{% endhighlight %}
{% highlight javascript %}
$(document).ready(function(){
    echo 'Hello World!';
});
{% endhighlight %}
{% highlight c# %}
public class HelloWorld
{
    public static void Main()
    {
        System.Console.WriteLine("Hello World!");
    }
}
{% endhighlight %}
{% highlight ruby %}
class PagesController < ApplicationController
    def home
        puts 'Hello World!'
    end
end
{% endhighlight %}