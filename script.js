const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

const navItems = document.getElementsByTagName("a");

for (let i = 0; i < navItems.length; i++) {
  const navItem = navItems[i];
  navItem.style.backgroundColor = randomColor();
}
