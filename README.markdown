JQuery Tax
==========

JQuery plugin to link together two text fields containing tax exclusive/inclusive data. 

Linked fields will be updated as the user types. 

Usage
-----

Text fields just need to be wrapped inside any element. 

```html
    <fieldset class="tax">
        <input type="text" class="inclusive" /> INCL.
        <input type="text" class="exclusive" /> EXCL
    </fieldset>
```

Then call the plugin with options. 

```javascript
$('fieldset.tax').tax({
    inclusive: '.inclusive', 
    exclusive: '.exclusive', 
    rate: 19.6, 
    decimals: 2
});
```