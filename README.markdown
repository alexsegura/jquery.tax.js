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
    inclusive: '.inclusive', // Selector for the tax inclusive input
    exclusive: '.exclusive', // Selector for the tax exclusive input
    rate: 19.6,              // Tax rate
    decimals: 2              // Number of decimals
});
```