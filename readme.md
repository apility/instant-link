# InstantLink

A library that makes your link's lightning fast.

### Installation

`npm install --save instant-link`

### How it works

InstantLink makes links faster by preloading them the moment you hover them.

This usually means that by the time you actually click the link, it is already downloaded, and so you don't have to wait for it to load, it appears immediatly.

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

```javascript
{
    cache: boolean,         //Enables or disabled caching. Default: true
    compress: boolean,      //If cache is enabled, enables or disables LZMA compression on data. Default: true
    event: string,          //The event handler that triggers InstantLink. Default: 'mouseover'
    comment: boolean        //If enabled, replaces scripts with data-no-instant with a html comment. Default: true
}
```
