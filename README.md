# Portals scripts

Tired of manually clicking on the 'People you me know' list? You can use these little scripts to do all the work for you.
### Added websites

  - [Facebook](https://facebook.com)
  - [Linkedin](https://linkedin.com)


## How to use

First of all, open the desired site (facebook or linkedin).

Select tho code of these bookmarklets and then drag&drop to you bookmarks bar.

Facebook:
```js
javascript:(function()%7B(function()%20%7Bpersons%20%3D%20%5B...document.querySelectorAll(%22.uiList._cw6._509-._4ki%20li%22)%5D%3Bpersons.forEach(person%20%3D%3E%20%7Bconst%20name%20%3D%20person.querySelector(%22strong%22)%3F%20person.querySelector(%22strong%22).innerText%3A%20%22%22%3Bconst%20addFriendButton%20%3D%20person.querySelector(%22button%22)%3Bif%20(addFriendButton)%20%7Bconsole.log(%60Sending%20a%20friend%20request%20to%3A%20%24%7Bname%7D%20%F0%9F%A4%9D%60)%3BaddFriendButton.click()%3B%7D%7D)%3B%7D)()%7D)()
```
or
Linkedin:
```js
javascript:(function()%7B(function()%20%7Bpersons%20%3D%20%5B...document.querySelectorAll(%22.mn-pymk-list__cards%20li%22)%5D%3Bpersons.forEach(person%20%3D%3E%20%7Bconst%20name%20%3D%20person.querySelector(%22.pymk-card__name%22)%3F%20person.querySelector(%22.pymk-card__name%22).innerText%3A%20%22%22%3Bconst%20addFriendButton%20%3D%20person.querySelector(%22.pymk-card__action-container%20button%22)%3Bif%20(addFriendButton)%20%7Bconsole.log(%60Sending%20a%20friend%20request%20to%3A%20%24%7Bname%7D%20%F0%9F%A4%9D%60)%3BaddFriendButton.click()%3B%7D%7D)%3B%7D)()%7D)()
```

Find the 'People you may know' section on the page.

Click the appropriate bookmark.




### Todos

 - Add the closing of appearing dialogs

License
----

MIT
