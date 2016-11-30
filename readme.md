# InstantLink

A library that makes your link's lightning fast.

### Installation

`npm install --save instant-link`

### How it works

InstantLink makes links faster by preloading them the moment you hover them.

This usually means that by the time you actually click the link, it is already downloaded, and so you don't have to wait for it to load, it appears immediatly.

This basically means that InstantLink transforms all your links into ajax requests, and you webpage will behave like a single page application.

InstantLink will also cache the preloaded data, so the next time you click the link, it will be even faster.

InstantLink can also optionally compress the data (using LZMA), so even for larger pages, it will not use a lot of memory.

### Usage

```html
<script src="instant-link.min.js" data-no-instant></script>
<script data-no-instant>new InstantLink();</script>
```

That's basically all the boilerplate you need to get it going.

Notice the `no-instant` data attribute. This can be put into any script or anchor tag.

On a script, this tells InstantLink that the script should be removed if loaded via InstantLink. This can be used e.g to prevent two instances of InstantLink running at the same time.

For regular links, this directive tells InstantLink to treat this link as a normal link, so clicking it will just redirect.

```html
<a href="index.php" data-no-instant>Regular link</a>
```

If you have enabled caching, but want to prevent caching of specific links, you can add the `no-cache` data attribute.

```html
<a href="index.php?foo=bar" data-no-cache>Dynamic link</a>
```

### Options

| Name         | Type    | Default   | Description                                                                                  |
|--------------|---------|-----------|----------------------------------------------------------------------------------------------|
| cache        | boolean | true      | Enables or disabled caching                                                                  |
| compress     | boolean | false     | If cache enabled, enables LZMA compression of data                                           |
| fullCompress | boolean | false     | If compress enabled, compress everything in one buffer. Uses less memory, but is much slower |
| event        | string  | mouseover | The event handler that triggers an InstantLink fetchPage                                     |
| comment      | boolean | true      | If enabled, replaces scripts with a data-no-instant attribute with an html comment           |

```javascript
//Example

var options = {
    cache: true
    compress: true,
    fullCompress: true,
    event: 'mouseover',
    comment: true
}

new InstantLink(options);
```


