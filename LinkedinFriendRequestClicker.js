(function() {
  persons = [...document.querySelectorAll(".mn-pymk-list__cards li")];
  persons.forEach(person => {
    const name = person.querySelector(".pymk-card__name")
      ? person.querySelector(".pymk-card__name").innerText
      : "";
    const addFriendButton = person.querySelector(".pymk-card__action-container button");

    if (addFriendButton) {
      console.log(`Sending a friend request to: ${name} 🤝`);
      addFriendButton.click();
    }
  });
})();
