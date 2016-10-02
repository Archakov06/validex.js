# validex
jQuery plugin for validation inputs by regular expression.

![Example work](https://media.giphy.com/media/l0HlvvQQmowWDI4O4/giphy.gif)

## Usage

#### Example #1 with options
```js
  $('#fullname-input').validex({
    pattern: '^[a-zA-Zа-яА-Я\\s]+$',
    target: '#fullname-group',
    onValid: function(input, target) {
      $(target).removeClass('has-error');
    },
    onNotValid: function(input, target) {
      $(target).addClass('has-error');
    }
  });
```

If regular express condition does not work, run method `onNotValid` and for element `#fullname-group` set class `has-error`.

*Class `has-error` used to Bootstrap 3.*


#### Example #2 with regular express in attribute [data-validex]
```js
  $('#twitter-input').validex();
```

```html
  <input type="text" id="twitter-input" value="@archakov06" placeholder="Enter Twitter username" data-validex="^@([A-Za-z0-9_]{1,15})+$" class="form-control">
```

##### All methods
* onValid
* onNotValid
* condRequired
* onBefore
* onAfter
