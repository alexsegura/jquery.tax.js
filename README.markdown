JQuery Tax
==========

JQuery plugin to link together two text fields containing tax exclusive/inclusive data. 

Linked fields will be updated as the user types. 

[Demo](http://alexsegura.github.com/jquery.tax.js/)

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
    decimals: 2,             // Number of decimals, 
    autocomplete: true,      // Set to false to disable browser autocomplete
    round: function(value) { // Custom function to round the value
        return value;
    }
});
```