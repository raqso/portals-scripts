(function() {
  persons = [...document.querySelectorAll(".uiList._cw6._509-._4ki li")];
  persons.forEach(person => {
    const name = person.querySelector("strong")
      ? person.querySelector("strong").innerText
      : "";
    const addFriendButton = person.querySelector("button");

    if (addFriendButton) {
      console.log(`Sending a friend request to: ${name} 🤝`);
      addFriendButton.click();
    }
  });
})();
